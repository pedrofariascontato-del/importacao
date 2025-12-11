/**
 * Zaveno Trading - Lead Tracking
 * Rastreamento específico para leads de viagem/imersão na China
 */

import { trackPixelEvent, trackLead } from "./facebook-pixel";
import { trackWebPixelEvent, trackWebLead } from "./facebook-pixel-web";
import { Platform } from "react-native";

/**
 * Tipos de Lead para Zaveno Trading
 */
export const ZavenoLeadTypes = {
  INTERESSE_VIAGEM: "Interesse em Viagem",
  CADASTRO_FORMULARIO: "Cadastro no Formulário",
  SOLICITACAO_INFO: "Solicitação de Informações",
  CONTATO_WHATSAPP: "Contato via WhatsApp",
  AGENDAMENTO_CONSULTA: "Agendamento de Consulta",
  INSCRICAO_IMERSAO: "Inscrição na Imersão",
};

/**
 * Rastreia um lead da Zaveno Trading
 * Funciona tanto na web quanto no app mobile
 */
export async function trackZavenoLead(
  leadType: string,
  customData?: {
    nome?: string;
    email?: string;
    telefone?: string;
    interesse?: string;
    origem?: string;
  }
): Promise<boolean> {
  const eventData = {
    content_name: leadType,
    content_category: "Viagem - Imersão China",
    business_name: "Zaveno Trading",
    domain: "imersaochina.com",
    ...customData,
  };

  if (Platform.OS === "web") {
    trackWebPixelEvent("Lead", eventData);
    return true;
  } else {
    return await trackPixelEvent("Lead", eventData);
  }
}

/**
 * Rastreia quando alguém demonstra interesse na viagem
 */
export async function trackInteresseViagem(
  origem?: string
): Promise<boolean> {
  return trackZavenoLead(ZavenoLeadTypes.INTERESSE_VIAGEM, {
    origem: origem || "App",
  });
}

/**
 * Rastreia quando alguém preenche um formulário
 */
export async function trackCadastroFormulario(dados: {
  nome?: string;
  email?: string;
  telefone?: string;
}): Promise<boolean> {
  return trackZavenoLead(ZavenoLeadTypes.CADASTRO_FORMULARIO, dados);
}

/**
 * Rastreia quando alguém solicita mais informações
 */
export async function trackSolicitacaoInfo(
  interesse?: string
): Promise<boolean> {
  return trackZavenoLead(ZavenoLeadTypes.SOLICITACAO_INFO, {
    interesse: interesse || "Informações Gerais",
  });
}

/**
 * Rastreia quando alguém entra em contato via WhatsApp
 */
export async function trackContatoWhatsApp(
  telefone?: string
): Promise<boolean> {
  return trackZavenoLead(ZavenoLeadTypes.CONTATO_WHATSAPP, {
    telefone,
    origem: "WhatsApp",
  });
}

/**
 * Rastreia quando alguém agenda uma consulta
 */
export async function trackAgendamentoConsulta(dados?: {
  nome?: string;
  email?: string;
  telefone?: string;
}): Promise<boolean> {
  return trackZavenoLead(ZavenoLeadTypes.AGENDAMENTO_CONSULTA, dados);
}

/**
 * Rastreia quando alguém se inscreve na imersão
 */
export async function trackInscricaoImersao(dados?: {
  nome?: string;
  email?: string;
  telefone?: string;
}): Promise<boolean> {
  const customData = {
    ...(dados || {}),
    interesse: "Inscrição Confirmada",
  };
  return trackZavenoLead(ZavenoLeadTypes.INSCRICAO_IMERSAO, customData);
}

/**
 * Rastreia visualização de página específica
 */
export async function trackZavenoPageView(
  pageName: string
): Promise<boolean> {
  const eventData = {
    content_name: pageName,
    content_category: "Viagem - Imersão China",
    business_name: "Zaveno Trading",
    domain: "imersaochina.com",
  };

  if (Platform.OS === "web") {
    trackWebPixelEvent("ViewContent", eventData);
    return true;
  } else {
    return await trackPixelEvent("ViewContent", eventData);
  }
}
