import React, { useState, useEffect } from "react";
import { View, Pressable, ActivityIndicator, StyleSheet } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";

interface VideoPlayerProps {
  videoUrl: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const [isReady, setIsReady] = useState(false);

  // Verifica se e uma URL do YouTube ou Vimeo
  const isYouTubeUrl = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");
  const isVimeoUrl = videoUrl.includes("vimeo.com") || videoUrl.includes("player.vimeo.com");

  // Extrai o ID do YouTube ou usa a URL embed direta
  const getYouTubeEmbedUrl = (url: string): string => {
    // Se ja for uma URL embed, usar direto
    if (url.includes("/embed/")) {
      return url;
    }
    // Extrair ID de outras URLs do YouTube
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  // Para YouTube ou Vimeo, usa WebView
  if (isYouTubeUrl || isVimeoUrl) {
    const embedUrl = isYouTubeUrl ? getYouTubeEmbedUrl(videoUrl) : videoUrl;

    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: embedUrl }}
          style={styles.video}
          allowsFullscreenVideo
          allowsInlineMediaPlayback
          mediaPlaybackRequiresUserAction={false}
          javaScriptEnabled
          domStorageEnabled
          mixedContentMode="always"
          onLoadEnd={() => setIsReady(true)}
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
          }}
        />
        {!isReady && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#F2C400" />
          </View>
        )}
      </View>
    );
  }

  // Para videos diretos (MP4, etc), usa expo-video
  return <DirectVideoPlayer videoUrl={videoUrl} />;
};

// Componente separado para videos diretos (evita chamar useVideoPlayer condicionalmente)
const DirectVideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const [isReady, setIsReady] = useState(false);

  const player = useVideoPlayer(videoUrl, (player) => {
    player.loop = false;
    player.muted = false;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePlayPause = () => {
    if (player.playing) {
      player.pause();
    } else {
      player.play();
    }
  };

  return (
    <View style={styles.container}>
      <VideoView
        player={player}
        style={styles.video}
        allowsFullscreen
        allowsPictureInPicture
        contentFit="contain"
      />

      {!isReady && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#F2C400" />
        </View>
      )}

      {isReady && !player.playing && (
        <Pressable
          style={styles.playButton}
          onPress={handlePlayPause}
        >
          <View style={styles.playIconContainer}>
            <Ionicons name="play" size={40} color="white" />
          </View>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#000",
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  playButton: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  playIconContainer: {
    backgroundColor: "rgba(242, 196, 0, 0.9)",
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
