# Configuração do Sistema de Email para Leads

## 📧 Visão Geral

O sistema de email está **100% implementado e pronto** para receber os leads do formulário! Você só precisa configurar suas credenciais.

## 🚀 Opções de Configuração

Você tem **3 opções** para receber os leads por email:

### Opção 1: EmailJS (Recomendado - Mais Fácil) ⭐

**Por que usar?**
- ✅ Gratuito até 200 emails/mês
- ✅ Configuração em 5 minutos
- ✅ Não precisa de backend
- ✅ Funciona direto do app

**Como configurar:**

1. **Crie uma conta gratuita**
   - Acesse: https://www.emailjs.com/
   - Clique em "Sign Up"
   - Use seu email do Gmail/Outlook

2. **Adicione seu serviço de email**
   - No dashboard, vá em "Email Services"
   - Clique em "Add New Service"
   - Escolha seu provedor (Gmail, Outlook, etc)
   - Siga as instruções para conectar sua conta
   - **Copie o Service ID** (ex: "service_abc123")

3. **Crie um template de email**
   - Vá em "Email Templates"
   - Clique em "Create New Template"
   - Use este template:

```
Assunto: Novo Lead - {{from_name}}

Corpo:
{{message}}

---
Email: {{from_email}}
WhatsApp: {{whatsapp}}
```

   - Salve e **copie o Template ID** (ex: "template_xyz789")

4. **Pegue sua Public Key**
   - Vá em "Account" → "General"
   - **Copie a Public Key** (ex: "user_123456")

5. **Configure no app**
   - Abra o arquivo: `src/api/email-service.ts`
   - Substitua as credenciais:

```typescript
const EMAIL_CONFIG: EmailConfig = {
  serviceId: "service_abc123",        // Cole aqui
  templateId: "template_xyz789",      // Cole aqui
  publicKey: "user_123456",           // Cole aqui
  recipientEmail: "seu-email@gmail.com", // Seu email
};
```

✅ **Pronto! Os leads já vão chegar no seu email!**

---

### Opção 2: Webhook (Zapier, Make, n8n)

**Por que usar?**
- ✅ Integra com Google Sheets, CRM, etc
- ✅ Automações poderosas
- ✅ Sem limites de emails

**Como configurar:**

1. **Crie um webhook:**
   - **Zapier**: Crie um Zap → Trigger: Webhooks → Copy URL
   - **Make**: Crie um Scenario → Add Webhook → Copy URL
   - **n8n**: Adicione Webhook node → Copy URL

2. **Configure a ação:**
   - Enviar email
   - Salvar no Google Sheets
   - Adicionar no CRM
   - Enviar notificação no Slack/Discord

3. **Use no app:**

Abra `src/screens/FormScreen.tsx` e substitua a linha 70:

```typescript
// Antes:
const result = await sendLeadEmail(formData);

// Depois:
import { sendLeadToWebhook } from "../api/email-service";
const result = await sendLeadToWebhook(
  formData,
  "https://hooks.zapier.com/hooks/catch/123456/abcdef/"
);
```

---

### Opção 3: Seu Próprio Backend

Se você tem um backend próprio, pode enviar os dados diretamente:

```typescript
const response = await fetch("https://sua-api.com/leads", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

---

## 📋 O Que Você Vai Receber

Quando alguém preencher o formulário, você receberá um email com:

```
🎯 NOVO LEAD - IMERSÃO CHINA

📅 Data: 25/11/2025 14:32

👤 DADOS PESSOAIS
━━━━━━━━━━━━━━━━━━━━
Nome: João Silva
Email: joao@email.com
WhatsApp: (11) 99999-9999

💼 PERFIL EMPRESARIAL
━━━━━━━━━━━━━━━━━━━━
Já importa da China: Sim, já importo regularmente
Objetivo: Expandir negócio existente
Nicho de produtos: Eletrônicos
Possui CNPJ: Sim, tenho CNPJ ativo
Investimento disponível: De R$ 30.000 a R$ 50.000

✈️ DISPONIBILIDADE
━━━━━━━━━━━━━━━━━━━━
Pode viajar: Sim, tenho disponibilidade total

📞 CONTATO
━━━━━━━━━━━━━━━━━━━━
Melhor horário: Tarde
Forma preferida: WhatsApp

💭 MOTIVAÇÃO
━━━━━━━━━━━━━━━━━━━━
Quero conhecer novos fornecedores e expandir minha linha de produtos...

📍 ORIGEM
━━━━━━━━━━━━━━━━━━━━
Como nos encontrou: Instagram

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 Entre em contato o mais rápido possível!
```

---

## 🎨 Recursos Implementados

✅ **Validação de campos obrigatórios**
✅ **Validação de formato de email**
✅ **Loading durante o envio**
✅ **Mensagens de sucesso/erro visuais**
✅ **Feedback em tempo real**
✅ **Design profissional**
✅ **Experiência mobile otimizada**

---

## 🔧 Testando o Sistema

1. Configure suas credenciais no `email-service.ts`
2. Abra o app
3. Clique em qualquer botão de "Quero garantir minha pré-inscrição"
4. Preencha o formulário
5. Clique em "Enviar"
6. ✅ Você receberá o email em segundos!

---

## ❓ FAQ

**P: Posso mudar o design do email?**
R: Sim! Edite o template no EmailJS ou a função `formatLeadData()` em `email-service.ts`

**P: E se o email não chegar?**
R: Verifique:
- Credenciais corretas no `email-service.ts`
- Spam/lixeira do seu email
- Cota de emails do EmailJS não excedida

**P: Posso enviar para múltiplos emails?**
R: Sim! Configure isso no template do EmailJS ou adicione múltiplos destinatários

**P: É seguro?**
R: Sim! O EmailJS só permite enviar emails pré-configurados, não é possível enviar spam

---

## 🎯 Próximos Passos Recomendados

1. ✅ Configure o EmailJS (5 minutos)
2. 📧 Teste o formulário
3. 📊 Configure integração com Google Sheets (opcional)
4. 🔔 Configure notificações no WhatsApp via Zapier (opcional)
5. 📈 Configure analytics para tracking de conversões (opcional)

---

**Dúvidas?** Chame o Claude para ajudar! 🚀
