/**
 * Email Service
 *
 * Envia os dados do formulário de leads para o email configurado.
 * Usando FormSubmit.co que funciona perfeitamente em React Native.
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
 * Envia email com os dados do lead usando FormSubmit.co
 */
export async function sendLeadEmail(leadData: LeadData): Promise<{
  success: boolean;
  message: string;
}> {
  try {
    console.log("🚀 Iniciando envio de email via FormSubmit...");

    // Prepara o formulário para o FormSubmit
    const formData = new URLSearchParams();
    formData.append("_subject", `🎯 Novo Lead - ${leadData.fullName}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    // Adiciona todos os campos do lead
    formData.append("Nome", leadData.fullName);
    formData.append("Email", leadData.email);
    formData.append("WhatsApp", leadData.whatsapp);
    formData.append("Já importa da China", leadData.alreadyImports || "Não informado");
    formData.append("Objetivo", leadData.objective || "Não informado");
    formData.append("Nicho de produtos", leadData.niche || "Não informado");
    formData.append("Possui CNPJ", leadData.hasCNPJ || "Não informado");
    formData.append("Investimento disponível", leadData.investmentLevel || "Não informado");
    formData.append("Por que participar", leadData.whyParticipate || "Não informado");
    formData.append("Pode viajar", leadData.availableToTravel || "Não informado");
    formData.append("Melhor horário", leadData.bestTimeToContact || "Não informado");
    formData.append("Forma preferida de contato", leadData.preferredContact || "Não informado");
    formData.append("Como nos encontrou", leadData.howFoundUs || "Não informado");

    console.log("📦 Enviando para FormSubmit...");

    // Envia via FormSubmit.co
    const response = await fetch(`https://formsubmit.co/${RECIPIENT_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
      },
      body: formData.toString(),
    });

    console.log("📬 Resposta recebida:", response.status, response.statusText);

    if (response.ok) {
      console.log("✅ Email enviado com sucesso!");
      return {
        success: true,
        message: "Lead enviado com sucesso!",
      };
    } else {
      const errorText = await response.text();
      console.error("❌ Erro na resposta:", errorText);
      throw new Error(`Falha ao enviar email: ${response.status}`);
    }
  } catch (error) {
    console.error("❌ Erro ao enviar lead por email:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Erro ao enviar. Por favor, tente novamente.",
    };
  }
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
