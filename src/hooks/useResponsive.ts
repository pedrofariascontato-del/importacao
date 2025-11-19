import { useEffect, useState } from "react";
import { Dimensions, Platform } from "react-native";

export const useResponsive = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get("window"));

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(window);
    });

    return () => subscription?.remove();
  }, []);

  const width = dimensions.width;

  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
    isWeb: Platform.OS === "web",
    width,
    height: dimensions.height,
  };
};
