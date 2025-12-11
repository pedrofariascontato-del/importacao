# 📊 Meta Pixel - Configuração para Anúncios

## ✅ Status: ATIVO E FUNCIONANDO

**Pixel ID**: `2671738819859416`
**Objetivo**: Rastrear conversões dos anúncios no Meta (Facebook/Instagram)

---

## 🎯 Eventos Rastreados Automaticamente

### 1. **PageView** - Visitantes da Landing Page
- **Quando dispara**: Quando alguém abre a landing page
- **Uso**: Criar público de remarketing e medir alcance
- **Localização**: `src/screens/HomeScreen.tsx`

### 2. **ViewContent** - Engajamento com CTAs
- **Quando dispara**: Quando clica nos botões de pré-inscrição
- **Uso**: Rastrear intenção de conversão
- **Dados capturados**: Nome do CTA clicado
- **Localização**: `src/screens/HomeScreen.tsx`

### 3. **Lead** - Conversão Principal ⭐ (MAIS IMPORTANTE)
- **Quando dispara**: Quando preenche e envia o formulário
- **Uso**: **Otimizar anúncios para gerar mais leads**
- **Dados capturados**:
  - Nome do lead
  - Nível de investimento
  - Possui CNPJ
- **Localização**: `src/screens/FormScreen.tsx`

### 4. **CompleteRegistration** - Dados Qualificados
- **Quando dispara**: Após lead ser enviado com sucesso
- **Uso**: Enriquecer dados do lead para melhor segmentação
- **Dados capturados**:
  - Nível de investimento
  - Status CNPJ
- **Localização**: `src/screens/FormScreen.tsx`

---

## 📈 Como Usar nos Anúncios do Meta

### Passo 1: Verificar se o Pixel está Recebendo Dados

1. Acesse: https://business.facebook.com/events_manager2
2. Selecione seu Pixel: **2671738819859416**
3. Vá em **"Testar Eventos"** (Test Events)
4. Abra seu site/app
5. Navegue e preencha o formulário
6. Os eventos aparecerão em tempo real:
   - ✅ PageView
   - ✅ ViewContent
   - ✅ Lead
   - ✅ CompleteRegistration

### Passo 2: Criar Campanha Otimizada para Leads

Ao criar seu anúncio no Meta Ads Manager:

1. **Objetivo da Campanha**: Escolha **"Geração de Cadastros"** ou **"Leads"**
2. **Evento de Conversão**: Selecione **"Lead"** (o Pixel rastreará automaticamente)
3. **Público**:
   - Crie público personalizado com quem viu a página (PageView)
   - Crie público Lookalike baseado em quem converteu (Lead)
4. **Otimização**: O Meta otimizará automaticamente para gerar mais leads

### Passo 3: Acompanhar Resultados

No Gerenciador de Anúncios, você verá:
- **PageView**: Quantas pessoas visitaram
- **ViewContent**: Quantas clicaram nos CTAs
- **Lead**: Quantas preencheram o formulário ⭐
- **Custo por Lead (CPL)**
- **Taxa de Conversão**

---

## 🔥 Eventos Importantes para Otimização

### Hierarquia de Eventos (do mais para o menos importante):

1. **Lead** ⭐⭐⭐ - CRÍTICO
   - Este é seu evento de conversão principal
   - Meta otimizará seus anúncios para gerar mais deste evento

2. **CompleteRegistration** ⭐⭐ - Importante
   - Dados enriquecidos do lead
   - Ajuda a qualificar melhor os leads

3. **ViewContent** ⭐ - Útil
   - Indica interesse (clique em CTA)
   - Útil para remarketing

4. **PageView** - Base
   - Todos que visitam
   - Base para público de remarketing

---

## 💡 Recomendações para Seus Anúncios

### Para Maximizar Leads Qualificados:

1. **Objetivo do Anúncio**: Use "Geração de Cadastros" com evento **Lead**
2. **Público Inicial**:
   - Pessoas interessadas em importação
   - Empreendedores
   - Interessados em China/comércio exterior
3. **Após 50+ Leads**: Crie público Lookalike (1%-2%) baseado nos leads
4. **Remarketing**: Anuncie para quem viu a página mas não converteu

### Acompanhar Performance:

- **CPL ideal**: Defina quanto está disposto a pagar por lead
- **Taxa de conversão**: Monitore quantos visitantes viram leads
- **Qualidade dos leads**: Acompanhe quantos leads qualificados (com CNPJ, investimento alto)

---

## 🔧 Arquivos Técnicos

- **Configuração**: `src/utils/facebook-pixel.ts`
- **Eventos Helpers**: `src/utils/pixel-events.ts`
- **Home Screen**: `src/screens/HomeScreen.tsx` (PageView + ViewContent)
- **Form Screen**: `src/screens/FormScreen.tsx` (Lead + CompleteRegistration)

---

## ✅ Checklist de Ativação

- [x] Pixel ID configurado: 2671738819859416
- [x] Access Token ativo
- [x] PageView tracking implementado
- [x] Lead tracking implementado (evento principal)
- [x] ViewContent tracking implementado
- [x] CompleteRegistration tracking implementado
- [ ] Testar eventos no Events Manager
- [ ] Criar campanha com objetivo "Leads"
- [ ] Configurar público de remarketing

---

## 📞 Próximos Passos

1. **Teste o Pixel** (5 min):
   - Acesse o Events Manager
   - Teste os eventos acessando o site e preenchendo o formulário
   - Confirme que todos os 4 eventos disparam

2. **Configure o Anúncio** (15 min):
   - Crie campanha de "Geração de Cadastros"
   - Escolha evento de conversão: **Lead**
   - Defina orçamento e público

3. **Monitore e Otimize** (contínuo):
   - Acompanhe CPL (Custo por Lead)
   - Ajuste público e criativos
   - Após 50 leads, crie Lookalike

---

**Status**: ✅ Pronto para rodar anúncios!
**Última atualização**: 11/12/2025
