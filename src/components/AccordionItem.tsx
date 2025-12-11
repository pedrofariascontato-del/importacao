import React, { useState } from "react";
import { View, Text, Pressable, LayoutAnimation, Platform, UIManager } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// Habilitar LayoutAnimation no Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AccordionItemProps {
  title: string;
  content: string;
  icon?: keyof typeof Ionicons.glyphMap;
  color?: string;
  dates?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  icon = "calendar-outline",
  color = "#0F1B2A",
  dates,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  // Parse content para identificar dias e ícones
  const formatContent = (text: string) => {
    const sections = text.split(/(?=📍)/);

    return sections.map((section, index) => {
      if (!section.trim()) return null;

      // Extrair data do formato "📍 DIA XX/XX:"
      const dateMatch = section.match(/📍\s*DIA[S]?\s*([\d\-\/\s]+):/);
      const dayText = dateMatch ? dateMatch[1].trim() : null;

      // Extrair conteúdo após a data
      const contentText = section.replace(/📍\s*DIA[S]?\s*[\d\-\/\s]+:/, "").trim();

      return (
        <View key={index} className="mb-4">
          {dayText && (
            <View className="flex-row items-center mb-2">
              <View className="bg-chinared rounded-full px-3 py-1">
                <Text className="text-white text-xs font-bold">
                  DIA {dayText}
                </Text>
              </View>
            </View>
          )}

          {contentText.split("\n").map((line, lineIndex) => {
            const trimmedLine = line.trim();
            if (!trimmedLine) return null;

            // Detectar bullet points
            const isBullet = trimmedLine.startsWith("•");
            const isSubBullet = trimmedLine.startsWith("  -");

            return (
              <View
                key={lineIndex}
                className="flex-row items-start mb-1.5"
                style={{ paddingLeft: isSubBullet ? 20 : isBullet ? 8 : 0 }}
              >
                {(isBullet || isSubBullet) && (
                  <View className="mt-1.5 mr-2">
                    <View
                      className="rounded-full"
                      style={{
                        width: isSubBullet ? 4 : 6,
                        height: isSubBullet ? 4 : 6,
                        backgroundColor: "#1A8F5A",
                      }}
                    />
                  </View>
                )}
                <Text
                  className={`flex-1 leading-6 ${
                    trimmedLine.includes("Workshop") || trimmedLine.includes("Manhã:") || trimmedLine.includes("Tarde:") || trimmedLine.includes("Noite:")
                      ? "text-navy font-semibold text-sm"
                      : "text-gray-700 text-sm"
                  }`}
                >
                  {trimmedLine.replace(/^•\s*/, "").replace(/^-\s*/, "")}
                </Text>
              </View>
            );
          })}
        </View>
      );
    });
  };

  return (
    <View className="mb-4 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
      <Pressable
        onPress={toggleAccordion}
        className="active:opacity-80"
      >
        <LinearGradient
          colors={isExpanded ? ["#0F1B2A", "#1A2B3D"] : ["#F8FAFC", "#F1F5F9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            padding: 16,
          }}
        >
          <View className="flex-row items-center">
            <View
              className="rounded-full p-3 mr-4"
              style={{
                backgroundColor: isExpanded ? "rgba(242, 196, 0, 0.2)" : "rgba(15, 27, 42, 0.1)"
              }}
            >
              <Ionicons
                name={icon}
                size={24}
                color={isExpanded ? "#F2C400" : color}
              />
            </View>

            <View className="flex-1 pr-3">
              {dates && (
                <View className="mb-1">
                  <Text className={`text-xs font-semibold ${isExpanded ? "text-yellowaccent" : "text-chinared"}`}>
                    {dates}
                  </Text>
                </View>
              )}
              <Text
                className={`font-bold text-base leading-6 ${
                  isExpanded ? "text-white" : "text-navy"
                }`}
              >
                {title}
              </Text>
            </View>

            <View
              className="rounded-full p-2"
              style={{
                backgroundColor: isExpanded ? "rgba(242, 196, 0, 0.2)" : "rgba(15, 27, 42, 0.1)"
              }}
            >
              <Ionicons
                name={isExpanded ? "chevron-up" : "chevron-down"}
                size={20}
                color={isExpanded ? "#F2C400" : "#0F1B2A"}
              />
            </View>
          </View>
        </LinearGradient>
      </Pressable>

      {isExpanded && (
        <View className="bg-white p-5">
          {formatContent(content)}
        </View>
      )}
    </View>
  );
};
