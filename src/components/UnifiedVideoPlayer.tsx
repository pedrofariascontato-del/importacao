import React from "react";
import { Platform } from "react-native";
import { VideoPlayer as VideoPlayerMobile } from "./VideoPlayer";
import { VideoPlayerWeb } from "./VideoPlayerWeb";

interface UnifiedVideoPlayerProps {
  videoUrl: string;
}

export const UnifiedVideoPlayer: React.FC<UnifiedVideoPlayerProps> = ({ videoUrl }) => {
  if (Platform.OS === "web") {
    return <VideoPlayerWeb videoUrl={videoUrl} />;
  }

  return <VideoPlayerMobile videoUrl={videoUrl} />;
};
