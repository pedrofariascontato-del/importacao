import React, { useEffect } from "react";
import { View, Text, ScrollView, Pressable, Platform, ImageBackground } from "react-native";
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
import { useResponsive } from "../hooks/useResponsive";
import { trackPageView } from "../utils/facebook-pixel";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
  const { isDesktop, isTablet } = useResponsive();

  // Track PageView when the screen loads
  useEffect(() => {
    trackPageView("Home - Imersão China");
  }, []);

  const handleCTAPress = () => {
    navigation.navigate("Form");
  };

  const CTAButton = ({ text }: { text: string }) => (
    <Pressable
      onPress={handleCTAPress}
      className="bg-chinared rounded-xl py-4 px-8 shadow-lg active:opacity-80"
      style={isDesktop ? { maxWidth: 400, alignSelf: "center" } : {}}
    >
      <Text className="text-white text-center text-lg font-bold uppercase tracking-wide">
        {text}
      </Text>
    </Pressable>
  );

  const BenefitCard = ({
    icon,
    title,
    highlight,
  }: {
    icon: string;
    title: string;
    highlight?: string;
  }) => (
    <View
      className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden"
      style={
        isDesktop
          ? { flex: 1, minWidth: 200, maxWidth: 250, margin: 8 }
          : { marginBottom: 16 }
      }
    >
      <LinearGradient
        colors={["#1A8F5A", "#157A4D"]}
        style={{
          padding: 20,
          alignItems: "center",
        }}
      >
        <View className="bg-white rounded-full p-4 mb-3">
          <Ionicons name={icon as any} size={36} color="#1A8F5A" />
        </View>
        {highlight && (
          <View className="bg-yellowaccent rounded-full px-3 py-1 mb-2">
            <Text className="text-navy text-xs font-bold uppercase tracking-wide">
              {highlight}
            </Text>
          </View>
        )}
        <Text className="text-white text-center text-base font-bold leading-5">
          {title}
        </Text>
      </LinearGradient>
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

  const DesktopContainer = ({ children }: { children: React.ReactNode }) => (
    <View
      style={
        isDesktop
          ? {
              maxWidth: 1200,
              marginHorizontal: "auto",
              width: "100%",
              paddingHorizontal: 40,
            }
          : isTablet
          ? { paddingHorizontal: 32 }
          : {}
      }
    >
      {children}
    </View>
  );

  return (
    <ScrollView
      className="flex-1 bg-gray-50"
      showsVerticalScrollIndicator={false}
    >
      {/* HERO SECTION */}
      <ImageBackground
        source={require("../../assets/background-1763590359806.png")}
        resizeMode="cover"
        style={{ width: "100%" }}
      >
        <LinearGradient
          colors={["rgba(15, 27, 42, 0.92)", "rgba(26, 43, 61, 0.88)", "rgba(15, 27, 42, 0.92)"]}
          style={{
            paddingTop: Platform.OS === "web" ? 40 : insets.top + 20,
            paddingBottom: 60,
          }}
        >
          <DesktopContainer>
            <View className={isDesktop ? "" : "px-4"}>
              {/* Logo/Badge */}
              <View className="items-center mb-6">
                <View className="bg-yellowaccent rounded-full px-6 py-2">
                  <Text className="text-navy text-xs font-bold uppercase tracking-wider">
                    Imersão Internacional
                  </Text>
                </View>
              </View>

              {/* Headline */}
              <Text
                className="text-white font-bold text-center mb-4 leading-tight"
                style={{ fontSize: isDesktop ? 48 : 32 }}
              >
                A Imersão Definitiva para Aprender a Importar da China em 30 Dias
              </Text>

              <View className="items-center mb-2">
                <Ionicons name="airplane" size={isDesktop ? 32 : 24} color="#F2C400" />
              </View>

              <Text
                className="text-white font-bold text-center mb-8"
                style={{ fontSize: isDesktop ? 28 : 20 }}
              >
                Direto em Solo Chinês
              </Text>

              {/* Layout Desktop: Video e Countdown lado a lado */}
              {isDesktop ? (
                <View style={{ flexDirection: "row", gap: 32, marginBottom: 32 }}>
                  {/* VSL */}
                  <View style={{ flex: 1.5 }}>
                    <UnifiedVideoPlayer videoUrl="https://player.vimeo.com/video/1143682982?badge=0&autopause=0&player_id=0&app_id=58479" />
                  </View>

                  {/* Countdown e Subtitle */}
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <Text className="text-gray-300 text-lg text-center mb-6 leading-7">
                      Uma experiência completa, guiada por especialistas, visitando
                      fábricas, fornecedores e as maiores feiras do mundo.
                    </Text>
                    <CountdownTimer />
                  </View>
                </View>
              ) : (
                <>
                  {/* VSL SECTION - Mobile/Tablet */}
                  <View className="mb-6">
                    <UnifiedVideoPlayer videoUrl="https://player.vimeo.com/video/1143682982?badge=0&autopause=0&player_id=0&app_id=58479" />
                  </View>

                  {/* Subtitle */}
                  <Text className="text-gray-300 text-base text-center mb-6 leading-6 px-2">
                    Uma experiência completa, guiada por especialistas, visitando
                    fábricas, fornecedores e as maiores feiras do mundo.
                  </Text>

                  {/* Countdown */}
                  <CountdownTimer />
                </>
              )}

              {/* CTA */}
              <View className={isDesktop ? "mt-8" : "mt-6 px-4"}>
                <CTAButton text="Quero garantir minha pré-inscrição" />
              </View>
            </View>
          </DesktopContainer>
        </LinearGradient>
      </ImageBackground>

      {/* SCHEDULE SECTION */}
      <View className={isDesktop ? "py-16 bg-white" : "px-4 py-10 bg-white"}>
        <DesktopContainer>
          <View className="items-center mb-8">
            <View className="bg-navy rounded-full p-3 mb-3">
              <Ionicons name="calendar" size={32} color="white" />
            </View>
            <Text
              className="text-navy font-bold text-center mb-2"
              style={{ fontSize: isDesktop ? 36 : 24 }}
            >
              Cronograma Completo
            </Text>
            <Text className="text-gray-600 text-base text-center max-w-2xl">
              30 dias que vão transformar seu futuro profissional
            </Text>
          </View>

          {scheduleData.map((item) => (
            <AccordionItem
              key={item.id}
              title={item.title}
              content={item.content}
              icon={item.icon as any}
              color={item.color}
              dates={item.dates}
            />
          ))}
        </DesktopContainer>
      </View>

      {/* BENEFITS SECTION */}
      <ImageBackground
        source={require("../../assets/background-1763595075294.png")}
        resizeMode="cover"
        style={{ width: "100%" }}
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.60)", "rgba(0, 0, 0, 0.55)", "rgba(0, 0, 0, 0.60)"]}
          style={{
            paddingVertical: isDesktop ? 64 : 40,
            paddingHorizontal: isDesktop ? 0 : 16,
          }}
        >
          <DesktopContainer>
            <View className="items-center mb-8">
              <View className="bg-brazilgreen rounded-full p-3 mb-3">
                <Ionicons name="star" size={32} color="white" />
              </View>
              <Text
                className="text-white font-bold text-center mb-2"
                style={{ fontSize: isDesktop ? 36 : 24 }}
              >
                Por Que Participar
              </Text>
              <Text className="text-white/90 text-base text-center max-w-2xl px-4">
                Vantagens exclusivas desta imersão internacional
              </Text>
            </View>

            {/* Grid Desktop */}
            {isDesktop ? (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginHorizontal: -8,
                }}
              >
                {benefitsData.map((benefit) => (
                  <BenefitCard
                    key={benefit.id}
                    icon={benefit.icon}
                    title={benefit.title}
                    highlight={benefit.highlight}
                  />
                ))}
              </View>
            ) : (
              <View>
                {benefitsData.map((benefit) => (
                  <BenefitCard
                    key={benefit.id}
                    icon={benefit.icon}
                    title={benefit.title}
                    highlight={benefit.highlight}
                  />
                ))}
              </View>
            )}

            {/* CTA after benefits */}
            <View className="mt-8">
              <CTAButton text="Quero me pré-inscrever agora" />
            </View>
          </DesktopContainer>
        </LinearGradient>
      </ImageBackground>

      {/* MENTORSHIP SECTION */}
      <ImageBackground
        source={require("../../assets/background-1763595493982.png")}
        resizeMode="cover"
        style={{ width: "100%" }}
      >
        <LinearGradient
          colors={["rgba(255, 255, 255, 0.50)", "rgba(248, 250, 252, 0.45)", "rgba(255, 255, 255, 0.50)"]}
          style={{
            paddingVertical: isDesktop ? 64 : 40,
            paddingHorizontal: isDesktop ? 0 : 16,
          }}
        >
          <DesktopContainer>
            <View className="items-center mb-8">
              <View className="bg-chinared rounded-full p-3 mb-3">
                <Ionicons name="people" size={32} color="white" />
              </View>
              <Text
                className="text-navy font-bold text-center mb-2"
                style={{ fontSize: isDesktop ? 36 : 24 }}
              >
                Mentoria na Volta
              </Text>
              <Text className="text-gray-600 text-base text-center max-w-2xl px-4">
                Seu sucesso não termina quando você volta para casa
              </Text>
            </View>

            <View
              style={
                isDesktop
                  ? { maxWidth: 900, marginHorizontal: "auto" }
                  : { marginHorizontal: 0 }
              }
            >
              <LinearGradient
                colors={["#D00000", "#A00000"]}
                style={{
                  borderRadius: 20,
                  padding: isDesktop ? 40 : 24,
                }}
              >
                {/* Header com Badge */}
                <View className="items-center mb-8">
                  <View className="bg-yellowaccent rounded-full px-5 py-2 mb-4">
                    <Text className="text-navy text-sm font-bold uppercase tracking-wider">
                      Bônus Exclusivo
                    </Text>
                  </View>
                  <View className="bg-white/20 rounded-full p-5 mb-4">
                    <Ionicons name="calendar-outline" size={isDesktop ? 56 : 48} color="white" />
                  </View>
                  <Text
                    className="text-white font-bold text-center mb-3"
                    style={{ fontSize: isDesktop ? 32 : 26 }}
                  >
                    3 Meses de Acompanhamento
                  </Text>
                  <Text
                    className="text-yellowaccent text-center font-semibold"
                    style={{ fontSize: isDesktop ? 20 : 18 }}
                  >
                    Encontros 1 a 1 Quinzenais
                  </Text>
                </View>

                {/* Cards Grid */}
                <View
                  style={
                    isDesktop
                      ? { flexDirection: "row", gap: 16, marginBottom: 24 }
                      : { marginBottom: 24 }
                  }
                >
                  {/* Card 1 */}
                  <View
                    className="bg-white/10 rounded-2xl p-5 backdrop-blur"
                    style={
                      isDesktop
                        ? { flex: 1 }
                        : { marginBottom: 16 }
                    }
                  >
                    <View className="bg-yellowaccent rounded-full p-3 mb-3 self-start">
                      <Ionicons name="analytics" size={28} color="#0F1B2A" />
                    </View>
                    <Text className="text-white font-bold text-lg mb-2">
                      Análise dos Dados
                    </Text>
                    <Text className="text-white/80 text-sm leading-6">
                      Revise e organize informações de fornecedores e produtos
                    </Text>
                  </View>

                  {/* Card 2 */}
                  <View
                    className="bg-white/10 rounded-2xl p-5 backdrop-blur"
                    style={
                      isDesktop
                        ? { flex: 1 }
                        : { marginBottom: 16 }
                    }
                  >
                    <View className="bg-yellowaccent rounded-full p-3 mb-3 self-start">
                      <Ionicons name="bulb" size={28} color="#0F1B2A" />
                    </View>
                    <Text className="text-white font-bold text-lg mb-2">
                      Estratégia de Implementação
                    </Text>
                    <Text className="text-white/80 text-sm leading-6">
                      Planeje seus próximos passos com orientação especializada
                    </Text>
                  </View>

                  {/* Card 3 */}
                  <View
                    className="bg-white/10 rounded-2xl p-5 backdrop-blur"
                    style={isDesktop ? { flex: 1 } : {}}
                  >
                    <View className="bg-yellowaccent rounded-full p-3 mb-3 self-start">
                      <Ionicons name="headset" size={28} color="#0F1B2A" />
                    </View>
                    <Text className="text-white font-bold text-lg mb-2">
                      Suporte Personalizado
                    </Text>
                    <Text className="text-white/80 text-sm leading-6">
                      Tire dúvidas e receba feedback durante sua jornada
                    </Text>
                  </View>
                </View>

                {/* Badge Final */}
                <View className="bg-yellowaccent rounded-2xl p-5">
                  <Text className="text-navy font-bold text-center text-lg">
                    ✨ Já Incluso no Pacote!
                  </Text>
                  <Text className="text-navy text-center text-sm mt-1 font-semibold">
                    Sem Custo Adicional
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </DesktopContainer>
        </LinearGradient>
      </ImageBackground>

      {/* INCLUDED SECTION */}
      <ImageBackground
        source={require("../../assets/background-1763596499273.png")}
        resizeMode="cover"
        style={{ width: "100%" }}
      >
        <LinearGradient
          colors={["rgba(15, 27, 42, 0.88)", "rgba(26, 43, 61, 0.85)", "rgba(15, 27, 42, 0.88)"]}
          style={{
            paddingVertical: isDesktop ? 64 : 40,
            paddingHorizontal: isDesktop ? 0 : 16,
          }}
        >
          <DesktopContainer>
            <View className="items-center mb-8">
              <View className="bg-yellowaccent rounded-full p-3 mb-3">
                <Ionicons name="gift" size={32} color="#0F1B2A" />
              </View>
              <Text
                className="text-white font-bold text-center mb-2"
                style={{ fontSize: isDesktop ? 36 : 24 }}
              >
                O Que Está Incluso
              </Text>
              <Text className="text-gray-300 text-base text-center max-w-2xl px-4">
                Tudo que você precisa para uma experiência completa
              </Text>
            </View>

            {isDesktop ? (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  maxWidth: 900,
                  marginHorizontal: "auto",
                }}
              >
                <View
                  className="bg-white rounded-2xl p-6"
                  style={{ flex: 1, minWidth: 400, margin: 8 }}
                >
                  {includedItems.slice(0, 8).map((item) => (
                    <IncludedItem key={item.id} text={item.text} />
                  ))}
                </View>
                <View
                  className="bg-white rounded-2xl p-6"
                  style={{ flex: 1, minWidth: 400, margin: 8 }}
                >
                  {includedItems.slice(8).map((item) => (
                    <IncludedItem key={item.id} text={item.text} />
                  ))}
                </View>
              </View>
            ) : (
              <View className="bg-white rounded-2xl p-5 mb-6">
                {includedItems.map((item) => (
                  <IncludedItem key={item.id} text={item.text} />
                ))}
              </View>
            )}

            <View className="mt-6">
              <CTAButton text="Garantir minha vaga" />
            </View>
          </DesktopContainer>
        </LinearGradient>
      </ImageBackground>

      {/* FINAL CTA SECTION */}
      <LinearGradient
        colors={["#D00000", "#A00000"]}
        style={{
          paddingVertical: isDesktop ? 80 : 50,
          paddingHorizontal: isDesktop ? 40 : 16,
        }}
      >
        <DesktopContainer>
          <View className="items-center">
            <Ionicons name="airplane" size={isDesktop ? 64 : 48} color="#F2C400" />
            <Text
              className="text-white font-bold text-center mt-6 mb-4 leading-tight"
              style={{
                fontSize: isDesktop ? 42 : 28,
                maxWidth: isDesktop ? 800 : "100%",
              }}
            >
              Pronto para viver 30 dias que podem mudar seu futuro profissional?
            </Text>
            <Text
              className="text-white/90 text-center mb-8 px-4"
              style={{
                fontSize: isDesktop ? 18 : 16,
                maxWidth: isDesktop ? 600 : "100%",
              }}
            >
              As vagas são limitadas. Garanta sua pré-inscrição agora!
            </Text>

            <View style={{ width: isDesktop ? 400 : "100%" }}>
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
            <View className="mt-8 bg-navy/30 rounded-xl p-4">
              <Text className="text-white text-center text-sm font-semibold">
                Embarque em 7 de abril de 2026
              </Text>
            </View>
          </View>
        </DesktopContainer>
      </LinearGradient>

      {/* Footer */}
      <View
        className="bg-navy py-8 px-4"
        style={{
          paddingBottom: Platform.OS === "web" ? 40 : insets.bottom + 20,
        }}
      >
        <Text className="text-gray-400 text-xs text-center">
          © 2026 Imersão China - Todos os direitos reservados
        </Text>
      </View>
    </ScrollView>
  );
};
