import React, { useState } from "react";
import { View, Text, Pressable, LayoutAnimation, Platform, UIManager } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Habilitar LayoutAnimation no Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AccordionItemProps {
  title: string;
  content: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <View className="mb-3 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <Pressable
        onPress={toggleAccordion}
        className="flex-row items-center justify-between p-4 bg-navy/5 active:bg-navy/10"
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

      {isExpanded && (
        <View className="p-4 pt-3 bg-gray-50">
          <Text className="text-gray-700 text-sm leading-6">{content}</Text>
        </View>
      )}
    </View>
  );
};
