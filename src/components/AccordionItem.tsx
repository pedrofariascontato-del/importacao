import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  measure,
  useAnimatedRef,
  runOnUI,
} from "react-native-reanimated";

interface AccordionItemProps {
  title: string;
  content: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const height = useSharedValue(0);
  const animatedRef = useAnimatedRef<Animated.View>();

  const toggleAccordion = () => {
    if (isExpanded) {
      height.value = withTiming(0, { duration: 300 });
    } else {
      runOnUI(() => {
        "worklet";
        const measured = measure(animatedRef);
        if (measured) {
          height.value = withTiming(measured.height, { duration: 300 });
        }
      })();
    }
    setIsExpanded(!isExpanded);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    opacity: withTiming(isExpanded ? 1 : 0, { duration: 300 }),
  }));

  return (
    <View className="mb-3 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <Pressable
        onPress={toggleAccordion}
        className="flex-row items-center justify-between p-4 bg-navy/5"
      >
        <Text className="text-navy text-base font-bold flex-1 pr-3">
          {title}
        </Text>
        <Ionicons
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={24}
          color="#0F1B2A"
        />
      </Pressable>

      <Animated.View style={[animatedStyle, { overflow: "hidden" }]}>
        <Animated.View ref={animatedRef}>
          <View className="p-4 pt-2">
            <Text className="text-gray-700 text-sm leading-6">{content}</Text>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
};
