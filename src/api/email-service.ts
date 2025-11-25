/**
 * Email Service
 *
 * Envia os dados do formulário de leads para o email configurado.
 * Usando EmailJS para envio direto do app (sem necessidade de backend).
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

interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
  recipientEmail: string;
}

/**
 * Configuração do EmailJS
 *
 * Para configurar:
 * 1. Crie uma conta em https://www.emailjs.com/
 * 2. Adicione um serviço de email (Gmail, Outlook, etc)
 * 3. Crie um template de email
 * 4. Copie suas credenciais para cá
 */
const EMAIL_CONFIG: EmailConfig = {
  // Credenciais do EmailJS configuradas
  serviceId: "service_byal1ui",
  templateId: "template_n5pddyd",
  publicKey: "qseqXXY6lRC21VKp5",
  recipientEmail: "seu-email@exemplo.com", // Substitua pelo seu email
};

/**
 * Envia email com os dados do lead
 */
export async function sendLeadEmail(leadData: LeadData): Promise<{
  success: boolean;
  message: string;
}> {
  try {
    // Formata os dados do lead em texto legível
    const formattedData = formatLeadData(leadData);

    // Prepara o corpo do email
    const emailBody = {
      to_email: EMAIL_CONFIG.recipientEmail,
      from_name: leadData.fullName,
      from_email: leadData.email,
      subject: `Novo Lead - ${leadData.fullName}`,
      message: formattedData,
      ...leadData, // Envia todos os campos individualmente também
    };

    // Envia via EmailJS
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: EMAIL_CONFIG.serviceId,
        template_id: EMAIL_CONFIG.templateId,
        user_id: EMAIL_CONFIG.publicKey,
        template_params: emailBody,
      }),
    });

    if (response.ok) {
      return {
        success: true,
        message: "Lead enviado com sucesso!",
      };
    } else {
      throw new Error("Falha ao enviar email");
    }
  } catch (error) {
    console.error("Erro ao enviar lead por email:", error);
    return {
      success: false,
      message: "Erro ao enviar. Por favor, tente novamente.",
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
  return (
    EMAIL_CONFIG.serviceId !== "SEU_SERVICE_ID" &&
    EMAIL_CONFIG.templateId !== "SEU_TEMPLATE_ID" &&
    EMAIL_CONFIG.publicKey !== "SEU_PUBLIC_KEY"
  );
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
