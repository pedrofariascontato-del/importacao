import React from "react";
import { View, Platform } from "react-native";

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = "",
}) => {
  if (Platform.OS === "web") {
    return (
      <View
        style={{
          width: "100%",
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className={className}
      >
        {children}
      </View>
    );
  }

  return <View className={className}>{children}</View>;
};
