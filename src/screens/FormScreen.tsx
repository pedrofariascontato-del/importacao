import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { sendLeadEmail } from "../api/email-service";
import { trackLead } from "../utils/facebook-pixel";

type Props = NativeStackScreenProps<RootStackParamList, "Form">;

// Componentes movidos para fora para evitar re-criação
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

export const FormScreen = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Form states - usando estados individuais para evitar re-renders
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [alreadyImports, setAlreadyImports] = useState("");
  const [objective, setObjective] = useState("");
  const [niche, setNiche] = useState("");
  const [hasCNPJ, setHasCNPJ] = useState("");
  const [investmentLevel, setInvestmentLevel] = useState("");
  const [whyParticipate, setWhyParticipate] = useState("");
  const [availableToTravel, setAvailableToTravel] = useState("");
  const [bestTimeToContact, setBestTimeToContact] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [howFoundUs, setHowFoundUs] = useState("");

  const handleSubmit = async () => {
    // Validação básica
    if (!fullName || !email || !whatsapp) {
      setSubmitStatus({
        type: "error",
        message: "Por favor, preencha nome, e-mail e WhatsApp.",
      });
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus({
        type: "error",
        message: "Por favor, insira um e-mail válido.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Monta o objeto com os dados do formulário
      const formData = {
        fullName,
        email,
        whatsapp,
        alreadyImports,
        objective,
        niche,
        hasCNPJ,
        investmentLevel,
        whyParticipate,
        availableToTravel,
        bestTimeToContact,
        preferredContact,
        howFoundUs,
      };

      // Envia o lead por email
      const result = await sendLeadEmail(formData);

      if (result.success) {
        // Rastreia o evento de Lead no Meta Pixel
        await trackLead("Zaveno Trading - Imersão China");

        setSubmitStatus({
          type: "success",
          message:
            "Pré-inscrição enviada com sucesso! Entraremos em contato em breve.",
        });

        // Aguarda 2 segundos para o usuário ver a mensagem
        setTimeout(() => {
          navigation.goBack();
        }, 2000);
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Erro ao enviar. Tente novamente.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Erro ao enviar. Por favor, tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {/* Mensagem de Status */}
          {submitStatus.type && (
            <View
              className={`rounded-xl p-4 mb-4 ${
                submitStatus.type === "success"
                  ? "bg-green-50 border border-green-300"
                  : "bg-red-50 border border-red-300"
              }`}
            >
              <View className="flex-row items-center">
                <Ionicons
                  name={
                    submitStatus.type === "success"
                      ? "checkmark-circle"
                      : "alert-circle"
                  }
                  size={24}
                  color={submitStatus.type === "success" ? "#059669" : "#DC2626"}
                />
                <Text
                  className={`ml-3 flex-1 ${
                    submitStatus.type === "success"
                      ? "text-green-800"
                      : "text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </Text>
              </View>
            </View>
          )}

          <View className="bg-white rounded-2xl p-5 mb-6 shadow-lg">
            <InputField
              label="Nome completo *"
              value={fullName}
              onChangeText={setFullName}
              placeholder="Digite seu nome completo"
            />

            <InputField
              label="E-mail *"
              value={email}
              onChangeText={setEmail}
              placeholder="seu@email.com"
              keyboardType="email-address"
            />

            <InputField
              label="WhatsApp *"
              value={whatsapp}
              onChangeText={setWhatsapp}
              placeholder="(00) 00000-0000"
              keyboardType="phone-pad"
            />

            <SelectField
              label="Você já importa da China?"
              value={alreadyImports}
              onChangeText={setAlreadyImports}
              options={[
                "Sim, já importo regularmente",
                "Já importei algumas vezes",
                "Nunca importei, mas quero começar",
                "Tenho interesse mas não sei por onde começar",
              ]}
            />

            <SelectField
              label="Qual seu objetivo com a imersão?"
              value={objective}
              onChangeText={setObjective}
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
              value={niche}
              onChangeText={setNiche}
              placeholder="Ex: Eletrônicos, moda, decoração..."
            />

            <SelectField
              label="Você tem CNPJ ativo?"
              value={hasCNPJ}
              onChangeText={setHasCNPJ}
              options={[
                "Sim, tenho CNPJ ativo",
                "Não, mas pretendo abrir",
                "Não tenho e não pretendo abrir",
              ]}
            />

            <SelectField
              label="Nível de investimento disponível para importar"
              value={investmentLevel}
              onChangeText={setInvestmentLevel}
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
              value={whyParticipate}
              onChangeText={setWhyParticipate}
              placeholder="Conte-nos suas motivações e objetivos..."
              multiline
            />

            <SelectField
              label="Está disponível para viajar entre 7/04 e 11/05?"
              value={availableToTravel}
              onChangeText={setAvailableToTravel}
              options={[
                "Sim, tenho disponibilidade total",
                "Sim, mas preciso confirmar datas",
                "Não tenho certeza ainda",
                "Não, mas tenho interesse em próximas turmas",
              ]}
            />

            <InputField
              label="Melhor horário para contato"
              value={bestTimeToContact}
              onChangeText={setBestTimeToContact}
              placeholder="Ex: Manhã, tarde ou noite"
            />

            <SelectField
              label="Forma preferida de atendimento"
              value={preferredContact}
              onChangeText={setPreferredContact}
              options={["WhatsApp", "Ligação telefônica", "Video call"]}
            />

            <InputField
              label="Como nos encontrou? (opcional)"
              value={howFoundUs}
              onChangeText={setHowFoundUs}
              placeholder="Ex: Instagram, indicação, Google..."
            />
          </View>

          <Pressable
            onPress={handleSubmit}
            disabled={isSubmitting}
            className={`rounded-xl py-4 px-8 shadow-lg mb-6 ${
              isSubmitting
                ? "bg-gray-400 opacity-70"
                : "bg-chinared active:opacity-80"
            }`}
          >
            <View className="flex-row items-center justify-center">
              {isSubmitting && (
                <ActivityIndicator
                  size="small"
                  color="white"
                  style={{ marginRight: 10 }}
                />
              )}
              <Text className="text-white text-center text-lg font-bold uppercase tracking-wide">
                {isSubmitting
                  ? "Enviando..."
                  : "Enviar e participar da pré-seleção"}
              </Text>
            </View>
          </Pressable>
        </View>

        <View style={{ paddingBottom: insets.bottom + 20 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
