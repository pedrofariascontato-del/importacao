import React from "react";
import { View, StyleSheet, Platform } from "react-native";

interface VideoPlayerWebProps {
  videoUrl: string;
}

export const VideoPlayerWeb: React.FC<VideoPlayerWebProps> = ({ videoUrl }) => {
  // Se já for uma URL embed completa (YouTube ou Vimeo), usar direto
  if (videoUrl.includes("/embed/") || videoUrl.includes("player.vimeo.com")) {
    return (
      <View style={styles.container}>
        <iframe
          src={videoUrl}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: 16,
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </View>
    );
  }

  // Extrair ID do YouTube se for URL do YouTube normal
  const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeId = getYouTubeId(videoUrl);
  const embedUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}`
    : videoUrl;

  if (Platform.OS === "web") {
    return (
      <View style={styles.container}>
        <iframe
          src={embedUrl}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: 16,
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </View>
    );
  }

  // Fallback para mobile (não deveria chegar aqui)
  return (
    <View style={styles.container}>
      <View style={styles.placeholder} />
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
  },
  placeholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1a1a1a",
  },
});
