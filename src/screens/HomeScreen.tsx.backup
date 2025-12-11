import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { UnifiedVideoPlayer } from "../components/UnifiedVideoPlayer";
import { CountdownTimer } from "../components/CountdownTimer";
import { AccordionItem } from "../components/AccordionItem";
import { scheduleData } from "../data/scheduleData";
import { benefitsData } from "../data/benefitsData";
import { includedItems } from "../data/includedData";
import { RootStackParamList } from "../navigation/RootNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();

  const handleCTAPress = () => {
    navigation.navigate("Form");
  };

  const CTAButton = ({ text }: { text: string }) => (
    <Pressable
      onPress={handleCTAPress}
      className="bg-chinared rounded-xl py-4 px-8 shadow-lg active:opacity-80"
    >
      <Text className="text-white text-center text-lg font-bold uppercase tracking-wide">
        {text}
      </Text>
    </Pressable>
  );

  const BenefitCard = ({
    icon,
    title,
    description,
  }: {
    icon: string;
    title: string;
    description: string;
  }) => (
    <View className="bg-white rounded-xl p-5 mb-4 shadow-md border border-gray-100">
      <View className="flex-row items-start">
        <View className="bg-brazilgreen/10 rounded-full p-3 mr-4">
          <Ionicons name={icon as any} size={28} color="#1A8F5A" />
        </View>
        <View className="flex-1">
          <Text className="text-navy text-base font-bold mb-1">{title}</Text>
          <Text className="text-gray-600 text-sm leading-5">{description}</Text>
        </View>
      </View>
    </View>
  );

  const IncludedItem = ({ text }: { text: string }) => (
    <View className="flex-row items-start mb-3">
      <View className="bg-brazilgreen rounded-full p-1 mr-3 mt-1">
        <Ionicons name="checkmark" size={16} color="white" />
      </View>
      <Text className="text-gray-700 text-sm flex-1 leading-6">{text}</Text>
    </View>
  );

  return (
    <ScrollView
      className="flex-1 bg-gray-50"
      showsVerticalScrollIndicator={false}
    >
      {/* HERO SECTION */}
      <LinearGradient
        colors={["#0F1B2A", "#1A2B3D", "#0F1B2A"]}
        style={{ paddingTop: insets.top + 20, paddingBottom: 30 }}
      >
        <View className="px-4">
          {/* Logo/Badge */}
          <View className="items-center mb-6">
            <View className="bg-yellowaccent rounded-full px-6 py-2">
              <Text className="text-navy text-xs font-bold uppercase tracking-wider">
                Imersão Internacional
              </Text>
            </View>
          </View>

          {/* Headline */}
          <Text className="text-white text-3xl font-bold text-center mb-4 leading-10">
            A Imersão Definitiva para Aprender a Importar da China em 30 Dias
          </Text>

          <View className="items-center mb-2">
            <Ionicons name="airplane" size={24} color="#F2C400" />
          </View>

          <Text className="text-white text-xl font-bold text-center mb-6">
            Direto em Solo Chinês
          </Text>

          {/* VSL SECTION */}
          <View className="mb-6">
            <UnifiedVideoPlayer videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
          </View>

          {/* Subtitle */}
          <Text className="text-gray-300 text-base text-center mb-6 leading-6 px-2">
            Uma experiência completa, guiada por especialistas, visitando
            fábricas, fornecedores e as maiores feiras do mundo.
          </Text>

          {/* Countdown */}
          <CountdownTimer />

          {/* CTA */}
          <View className="mt-6 px-4">
            <CTAButton text="Quero garantir minha pré-inscrição" />
          </View>
        </View>
      </LinearGradient>

      {/* SCHEDULE SECTION */}
      <View className="px-4 py-10 bg-white">
        <View className="items-center mb-6">
          <View className="bg-navy rounded-full p-3 mb-3">
            <Ionicons name="calendar" size={32} color="white" />
          </View>
          <Text className="text-navy text-2xl font-bold text-center mb-2">
            Cronograma Completo
          </Text>
          <Text className="text-gray-600 text-sm text-center">
            30 dias que vão transformar seu futuro profissional
          </Text>
        </View>

        {scheduleData.map((item) => (
          <AccordionItem
            key={item.id}
            title={item.title}
            content={item.content}
          />
        ))}
      </View>

      {/* BENEFITS SECTION */}
      <View className="px-4 py-10 bg-gray-50">
        <View className="items-center mb-6">
          <View className="bg-brazilgreen rounded-full p-3 mb-3">
            <Ionicons name="star" size={32} color="white" />
          </View>
          <Text className="text-navy text-2xl font-bold text-center mb-2">
            Por Que Participar
          </Text>
          <Text className="text-gray-600 text-sm text-center px-4">
            Vantagens exclusivas desta imersão internacional
          </Text>
        </View>

        {benefitsData.map((benefit) => (
          <BenefitCard
            key={benefit.id}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}

        {/* CTA after benefits */}
        <View className="mt-4">
          <CTAButton text="Quero me pré-inscrever agora" />
        </View>
      </View>

      {/* INCLUDED SECTION */}
      <View className="px-4 py-10 bg-navy">
        <View className="items-center mb-6">
          <View className="bg-yellowaccent rounded-full p-3 mb-3">
            <Ionicons name="gift" size={32} color="#0F1B2A" />
          </View>
          <Text className="text-white text-2xl font-bold text-center mb-2">
            O Que Está Incluso
          </Text>
          <Text className="text-gray-300 text-sm text-center px-4">
            Tudo que você precisa para uma experiência completa
          </Text>
        </View>

        <View className="bg-white rounded-2xl p-5 mb-6">
          {includedItems.map((item) => (
            <IncludedItem key={item.id} text={item.text} />
          ))}
        </View>

        <CTAButton text="Garantir minha vaga" />
      </View>

      {/* FINAL CTA SECTION */}
      <LinearGradient
        colors={["#D00000", "#A00000"]}
        style={{ paddingVertical: 50, paddingHorizontal: 16 }}
      >
        <View className="items-center">
          <Ionicons name="airplane" size={48} color="#F2C400" />
          <Text className="text-white text-3xl font-bold text-center mt-4 mb-3 leading-10">
            Pronto para viver 30 dias que podem mudar seu futuro profissional?
          </Text>
          <Text className="text-white/90 text-base text-center mb-6 px-4">
            As vagas são limitadas. Garanta sua pré-inscrição agora!
          </Text>

          <View className="w-full">
            <Pressable
              onPress={handleCTAPress}
              className="bg-white rounded-xl py-5 px-8 shadow-xl active:opacity-80"
            >
              <Text className="text-chinared text-center text-lg font-bold uppercase tracking-wide">
                Quero garantir minha pré-inscrição agora
              </Text>
            </Pressable>
          </View>

          {/* Mini countdown */}
          <View className="mt-6 bg-navy/30 rounded-xl p-4">
            <Text className="text-white text-center text-sm font-semibold">
              Embarque em 7 de abril de 2026
            </Text>
          </View>
        </View>
      </LinearGradient>

      {/* Footer */}
      <View
        className="bg-navy py-8 px-4"
        style={{ paddingBottom: insets.bottom + 20 }}
      >
        <Text className="text-gray-400 text-xs text-center">
          © 2026 Imersão China - Todos os direitos reservados
        </Text>
      </View>
    </ScrollView>
  );
};
