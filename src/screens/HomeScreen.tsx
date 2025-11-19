import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CountdownTimer } from "../components/CountdownTimer";
import { AccordionItem } from "../components/AccordionItem";
import { scheduleData } from "../data/scheduleData";
import { benefitsData } from "../data/benefitsData";
import { includedItems } from "../data/includedData";

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    alreadyImports: "",
    objective: "",
    niche: "",
    hasCNPJ: "",
    investmentLevel: "",
    whyParticipate: "",
    availableToTravel: "",
    bestTimeToContact: "",
    preferredContact: "",
    howFoundUs: "",
  });

  const handleSubmit = () => {
    // Validação básica
    if (!formData.fullName || !formData.email || !formData.whatsapp) {
      Alert.alert(
        "Campos obrigatórios",
        "Por favor, preencha nome, e-mail e WhatsApp."
      );
      return;
    }

    // Aqui você pode adicionar lógica para enviar os dados
    Alert.alert(
      "Pré-inscrição enviada!",
      "Entraremos em contato em breve para dar continuidade ao seu processo de seleção."
    );
  };

  const CTAButton = ({ text, onPress }: { text: string; onPress?: () => void }) => (
    <Pressable
      onPress={onPress}
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

  const InputField = ({
    label,
    value,
    onChangeText,
    placeholder,
    multiline = false,
    keyboardType = "default",
  }: {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    multiline?: boolean;
    keyboardType?: "default" | "email-address" | "phone-pad";
  }) => (
    <View className="mb-4">
      <Text className="text-navy text-sm font-semibold mb-2">{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        multiline={multiline}
        numberOfLines={multiline ? 4 : 1}
        keyboardType={keyboardType}
        className="bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-800"
        style={
          multiline
            ? { height: 100, textAlignVertical: "top" }
            : { height: 50 }
        }
      />
    </View>
  );

  const SelectField = ({
    label,
    value,
    onChangeText,
    options,
  }: {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    options: string[];
  }) => (
    <View className="mb-4">
      <Text className="text-navy text-sm font-semibold mb-2">{label}</Text>
      {options.map((option, index) => (
        <Pressable
          key={index}
          onPress={() => onChangeText(option)}
          className="flex-row items-center mb-2 bg-white border border-gray-300 rounded-xl px-4 py-3"
        >
          <View
            className={`w-5 h-5 rounded-full border-2 mr-3 items-center justify-center ${
              value === option
                ? "border-brazilgreen bg-brazilgreen"
                : "border-gray-400"
            }`}
          >
            {value === option && (
              <Ionicons name="checkmark" size={14} color="white" />
            )}
          </View>
          <Text className="text-gray-800 text-sm flex-1">{option}</Text>
        </Pressable>
      ))}
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
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
        </View>

        {/* FORM SECTION */}
        <View className="px-4 py-10 bg-white">
          <View className="items-center mb-6">
            <View className="bg-chinared rounded-full p-3 mb-3">
              <Ionicons name="document-text" size={32} color="white" />
            </View>
            <Text className="text-navy text-2xl font-bold text-center mb-2">
              Formulário de Qualificação
            </Text>
            <Text className="text-gray-600 text-sm text-center px-4">
              Preencha os dados abaixo para participar da pré-seleção
            </Text>
          </View>

          <View className="bg-gray-50 rounded-2xl p-5 mb-6">
            <InputField
              label="Nome completo *"
              value={formData.fullName}
              onChangeText={(text) =>
                setFormData({ ...formData, fullName: text })
              }
              placeholder="Digite seu nome completo"
            />

            <InputField
              label="E-mail *"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              placeholder="seu@email.com"
              keyboardType="email-address"
            />

            <InputField
              label="WhatsApp *"
              value={formData.whatsapp}
              onChangeText={(text) =>
                setFormData({ ...formData, whatsapp: text })
              }
              placeholder="(00) 00000-0000"
              keyboardType="phone-pad"
            />

            <SelectField
              label="Você já importa da China?"
              value={formData.alreadyImports}
              onChangeText={(text) =>
                setFormData({ ...formData, alreadyImports: text })
              }
              options={[
                "Sim, já importo regularmente",
                "Já importei algumas vezes",
                "Nunca importei, mas quero começar",
                "Tenho interesse mas não sei por onde começar",
              ]}
            />

            <SelectField
              label="Qual seu objetivo com a imersão?"
              value={formData.objective}
              onChangeText={(text) =>
                setFormData({ ...formData, objective: text })
              }
              options={[
                "Iniciar um negócio de importação",
                "Expandir negócio existente",
                "Conhecer fornecedores confiáveis",
                "Aprender sobre importação na prática",
                "Networking com outros empresários",
              ]}
            />

            <InputField
              label="Qual seu nicho de produtos?"
              value={formData.niche}
              onChangeText={(text) => setFormData({ ...formData, niche: text })}
              placeholder="Ex: Eletrônicos, moda, decoração..."
            />

            <SelectField
              label="Você tem CNPJ ativo?"
              value={formData.hasCNPJ}
              onChangeText={(text) =>
                setFormData({ ...formData, hasCNPJ: text })
              }
              options={[
                "Sim, tenho CNPJ ativo",
                "Não, mas pretendo abrir",
                "Não tenho e não pretendo abrir",
              ]}
            />

            <SelectField
              label="Nível de investimento disponível para importar"
              value={formData.investmentLevel}
              onChangeText={(text) =>
                setFormData({ ...formData, investmentLevel: text })
              }
              options={[
                "Até R$ 10.000",
                "De R$ 10.000 a R$ 30.000",
                "De R$ 30.000 a R$ 50.000",
                "De R$ 50.000 a R$ 100.000",
                "Acima de R$ 100.000",
              ]}
            />

            <InputField
              label="Por que você quer participar da imersão?"
              value={formData.whyParticipate}
              onChangeText={(text) =>
                setFormData({ ...formData, whyParticipate: text })
              }
              placeholder="Conte-nos suas motivações e objetivos..."
              multiline
            />

            <SelectField
              label="Está disponível para viajar entre 7/04 e 11/05?"
              value={formData.availableToTravel}
              onChangeText={(text) =>
                setFormData({ ...formData, availableToTravel: text })
              }
              options={[
                "Sim, tenho disponibilidade total",
                "Sim, mas preciso confirmar datas",
                "Não tenho certeza ainda",
                "Não, mas tenho interesse em próximas turmas",
              ]}
            />

            <InputField
              label="Melhor horário para contato"
              value={formData.bestTimeToContact}
              onChangeText={(text) =>
                setFormData({ ...formData, bestTimeToContact: text })
              }
              placeholder="Ex: Manhã, tarde ou noite"
            />

            <SelectField
              label="Forma preferida de atendimento"
              value={formData.preferredContact}
              onChangeText={(text) =>
                setFormData({ ...formData, preferredContact: text })
              }
              options={["WhatsApp", "Ligação telefônica", "Video call"]}
            />

            <InputField
              label="Como nos encontrou? (opcional)"
              value={formData.howFoundUs}
              onChangeText={(text) =>
                setFormData({ ...formData, howFoundUs: text })
              }
              placeholder="Ex: Instagram, indicação, Google..."
            />
          </View>

          <CTAButton text="Enviar e participar da pré-seleção" onPress={handleSubmit} />
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

          <View className="bg-white rounded-2xl p-5">
            {includedItems.map((item) => (
              <IncludedItem key={item.id} text={item.text} />
            ))}
          </View>
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
              <Pressable className="bg-white rounded-xl py-5 px-8 shadow-xl active:opacity-80">
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
        <View className="bg-navy py-8 px-4" style={{ paddingBottom: insets.bottom + 20 }}>
          <Text className="text-gray-400 text-xs text-center">
            © 2026 Imersão China - Todos os direitos reservados
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
