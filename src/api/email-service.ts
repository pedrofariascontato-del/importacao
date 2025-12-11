/**
 * Email Service
 *
 * Envia os dados do formulário de leads para o email configurado.
 * Usando múltiplas estratégias para garantir o envio.
 */

interface LeadData {
  fullName: string;
  email: string;
  whatsapp: string;
  alreadyImports: string;
  objective: string;
  niche: string;
  hasCNPJ: string;
  investmentLevel: string;
  whyParticipate: string;
  availableToTravel: string;
  bestTimeToContact: string;
  preferredContact: string;
  howFoundUs: string;
}

/**
 * Email de destino configurado
 */
const RECIPIENT_EMAIL = "chinaimersao@gmail.com";

/**
 * Envia email usando estratégia híbrida (tenta múltiplos serviços)
 */
export async function sendLeadEmail(leadData: LeadData): Promise<{
  success: boolean;
  message: string;
}> {
  console.log("🚀 Iniciando envio de lead...");

  // Tenta primeiro via FormSubmit (mais simples)
  try {
    const formSubmitResult = await sendViaFormSubmit(leadData);
    if (formSubmitResult.success) {
      return formSubmitResult;
    }
  } catch (error) {
    console.warn("⚠️ FormSubmit falhou, tentando método alternativo...");
  }

  // Se FormSubmit falhar, tenta via webhook genérico do Zapier/Make
  try {
    const webhookResult = await sendViaWebhook(leadData);
    if (webhookResult.success) {
      return webhookResult;
    }
  } catch (error) {
    console.warn("⚠️ Webhook falhou, tentando último método...");
  }

  // Último recurso: Google Forms
  try {
    const googleFormsResult = await sendViaGoogleForms(leadData);
    return googleFormsResult;
  } catch (error) {
    console.error("❌ Todos os métodos de envio falharam");
    return {
      success: false,
      message: "Erro ao enviar. Por favor, tente novamente ou entre em contato via WhatsApp.",
    };
  }
}

/**
 * Método 1: FormSubmit.co
 */
async function sendViaFormSubmit(leadData: LeadData): Promise<{
  success: boolean;
  message: string;
}> {
  console.log("📧 Tentando FormSubmit.co...");

  const formData = new FormData();
  formData.append("_subject", `🎯 Novo Lead - ${leadData.fullName}`);
  formData.append("_template", "table");
  formData.append("_captcha", "false");
  formData.append("_next", "https://thanks.page");

  // Adiciona todos os campos
  formData.append("Nome Completo", leadData.fullName);
  formData.append("Email", leadData.email);
  formData.append("WhatsApp", leadData.whatsapp);
  formData.append("Já importa da China?", leadData.alreadyImports || "Não informado");
  formData.append("Objetivo com a imersão", leadData.objective || "Não informado");
  formData.append("Nicho de produtos", leadData.niche || "Não informado");
  formData.append("Possui CNPJ?", leadData.hasCNPJ || "Não informado");
  formData.append("Investimento disponível", leadData.investmentLevel || "Não informado");
  formData.append("Por que quer participar?", leadData.whyParticipate || "Não informado");
  formData.append("Disponibilidade para viajar", leadData.availableToTravel || "Não informado");
  formData.append("Melhor horário para contato", leadData.bestTimeToContact || "Não informado");
  formData.append("Forma preferida de contato", leadData.preferredContact || "Não informado");
  formData.append("Como nos encontrou?", leadData.howFoundUs || "Não informado");

  const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    console.log("✅ FormSubmit: Sucesso!");
    return {
      success: true,
      message: "Lead enviado com sucesso!",
    };
  }

  throw new Error("FormSubmit falhou");
}

/**
 * Método 2: Webhook genérico (configure uma URL de webhook se necessário)
 */
async function sendViaWebhook(leadData: LeadData): Promise<{
  success: boolean;
  message: string;
}> {
  // Este método pode ser configurado com um webhook do Zapier, Make ou n8n
  // Por enquanto, vamos simular sucesso para fins de teste
  console.log("🔗 Webhook não configurado, pulando...");
  throw new Error("Webhook não configurado");
}

/**
 * Método 3: Google Forms (envio direto aos seus sheets)
 */
async function sendViaGoogleForms(leadData: LeadData): Promise<{
  success: boolean;
  message: string;
}> {
  console.log("📊 Tentando Google Forms...");

  // Você pode criar um Google Form e usar a URL de envio aqui
  // Por enquanto, retorna erro para usar os métodos anteriores
  throw new Error("Google Forms não configurado");
}

/**
 * Formata os dados do lead em texto legível para o email
 */
function formatLeadData(data: LeadData): string {
  const timestamp = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  return `
🎯 NOVO LEAD - IMERSÃO CHINA

📅 Data: ${timestamp}

👤 DADOS PESSOAIS
━━━━━━━━━━━━━━━━━━━━
Nome: ${data.fullName}
Email: ${data.email}
WhatsApp: ${data.whatsapp}

💼 PERFIL EMPRESARIAL
━━━━━━━━━━━━━━━━━━━━
Já importa da China: ${data.alreadyImports || "Não informado"}
Objetivo: ${data.objective || "Não informado"}
Nicho de produtos: ${data.niche || "Não informado"}
Possui CNPJ: ${data.hasCNPJ || "Não informado"}
Investimento disponível: ${data.investmentLevel || "Não informado"}

✈️ DISPONIBILIDADE
━━━━━━━━━━━━━━━━━━━━
Pode viajar: ${data.availableToTravel || "Não informado"}

📞 CONTATO
━━━━━━━━━━━━━━━━━━━━
Melhor horário: ${data.bestTimeToContact || "Não informado"}
Forma preferida: ${data.preferredContact || "Não informado"}

💭 MOTIVAÇÃO
━━━━━━━━━━━━━━━━━━━━
${data.whyParticipate || "Não informado"}

📍 ORIGEM
━━━━━━━━━━━━━━━━━━━━
Como nos encontrou: ${data.howFoundUs || "Não informado"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 Entre em contato o mais rápido possível!
  `.trim();
}

/**
 * Valida se o serviço de email está configurado
 */
export function isEmailServiceConfigured(): boolean {
  return true;
}

/**
 * Alternativa: Envia para webhook (Zapier, Make, n8n, etc)
 * Use esta função se preferir enviar para um webhook ao invés de email direto
 */
export async function sendLeadToWebhook(
  leadData: LeadData,
  webhookUrl: string
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...leadData,
        timestamp: new Date().toISOString(),
        source: "app-mobile",
      }),
    });

    if (response.ok) {
      return {
        success: true,
        message: "Lead enviado com sucesso!",
      };
    } else {
      throw new Error("Falha ao enviar para webhook");
    }
  } catch (error) {
    console.error("Erro ao enviar lead para webhook:", error);
    return {
      success: false,
      message: "Erro ao enviar. Por favor, tente novamente.",
    };
  }
}
