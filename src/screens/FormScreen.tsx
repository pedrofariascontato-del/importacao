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
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Form">;

export const FormScreen = ({ navigation }: Props) => {
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
      "Entraremos em contato em breve para dar continuidade ao seu processo de seleção.",
      [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

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
        <View className="px-4 py-6">
          <View className="items-center mb-6">
            <View className="bg-chinared rounded-full p-4 mb-4">
              <Ionicons name="document-text" size={40} color="white" />
            </View>
            <Text className="text-navy text-2xl font-bold text-center mb-2">
              Formulário de Qualificação
            </Text>
            <Text className="text-gray-600 text-sm text-center px-4">
              Preencha os dados abaixo para participar da pré-seleção
            </Text>
          </View>

          <View className="bg-white rounded-2xl p-5 mb-6 shadow-lg">
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

          <Pressable
            onPress={handleSubmit}
            className="bg-chinared rounded-xl py-4 px-8 shadow-lg active:opacity-80 mb-6"
          >
            <Text className="text-white text-center text-lg font-bold uppercase tracking-wide">
              Enviar e participar da pré-seleção
            </Text>
          </Pressable>
        </View>

        <View style={{ paddingBottom: insets.bottom + 20 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
