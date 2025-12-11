# Landing Page - Imersão China
## Zaveno Trading

## 🎯 Visão Geral

Landing page profissional e moderna para captar leads qualificados para uma imersão de 30 dias na China focada em importação direta.

**Domínio**: imersaochina.com
**Negócio**: Zaveno Trading - Viagem imersiva na China para encontrar fornecedores

## 📊 Meta Pixel Integrado

### ✅ Pixel ID: `2671738819859416`

O Meta Pixel (Facebook Pixel) está completamente integrado usando a Conversions API para mobile:

#### 🎯 Eventos Rastreados:
- ✅ **PageView** - Visualizações de tela (Home, etc)
- ✅ **Lead** - Cadastros de formulário (**evento principal**)
- ✅ **ViewContent** - Visualização de conteúdo específico
- ✅ **Todos os eventos padrão do Meta Pixel disponíveis**

#### 📱 Implementação Atual:

**Home Screen** (`src/screens/HomeScreen.tsx`):
```typescript
// Rastreia visualização da página inicial
useEffect(() => {
  trackPageView("Home - Imersão China");
}, []);
```

**Form Screen** (`src/screens/FormScreen.tsx`):
```typescript
// Rastreia quando um lead é capturado com sucesso
if (result.success) {
  await trackLead("Zaveno Trading - Imersão China");
}
```

#### 🔧 Arquivos de Tracking:

- **`src/config/meta-pixel.ts`** - Configuração e credenciais do Pixel
- **`src/utils/meta-pixel.ts`** - Serviço completo com Conversions API
- **`src/utils/facebook-pixel.ts`** - Implementação ativa no app

#### 📊 Eventos Disponíveis:

Você pode rastrear qualquer evento padrão do Meta:

```typescript
import { trackPixelEvent, PixelEvents } from './src/utils/facebook-pixel';

// Lead (já implementado no formulário)
await trackLead("Nome do Lead");

// PageView (já implementado na Home)
await trackPageView("Nome da Página");

// Outros eventos disponíveis
await trackPixelEvent(PixelEvents.Purchase, { value: 100, currency: "BRL" });
await trackPixelEvent(PixelEvents.InitiateCheckout, { value: 100 });
await trackPixelEvent(PixelEvents.Search, { search_string: "termo" });
await trackPixelEvent(PixelEvents.ViewContent, { content_name: "produto" });
```

#### ⚙️ Configuração:

As credenciais estão configuradas diretamente em `src/utils/facebook-pixel.ts`:
- **Pixel ID**: `2671738819859416`
- **Access Token**: Configurado e funcionando
- **API Version**: `v21.0`

#### 🧪 Tela de Teste:

O app inclui uma tela de teste (`PixelTestScreen`) para validar o funcionamento:
- Mostra credenciais configuradas
- Botões para testar cada tipo de evento
- Log em tempo real dos resultados
- Acesse via navegação: `navigation.navigate("PixelTest")`

#### 🎯 Como Usar em Novas Telas:

Para adicionar tracking em qualquer tela:

```typescript
import { trackPageView, trackLead } from '../utils/facebook-pixel';

// No useEffect para PageView
useEffect(() => {
  trackPageView("Nome da Tela");
}, []);

// Ao capturar um lead
const handleAction = async () => {
  await trackLead("Descrição do Lead");
};
```

### 📱 Multi-Plataforma
- **Mobile**: App nativo via Vibecode/Expo (iOS/Android)
- **Web**: Site responsivo publicável no Vercel
- **Código único** que funciona em ambas plataformas

## 🚀 Deploy no Vercel

✅ **O projeto está 100% pronto para deploy no Vercel!**

### Quick Start:
```bash
# 1. Build local (testar)
bun run build:web

# 2. Deploy no Vercel
vercel

# 3. Deploy em produção
vercel --prod
```

📖 **Guia completo**: Veja o arquivo `DEPLOY_VERCEL.md` para instruções detalhadas.

## Estrutura do Projeto

### Navegação

- **RootNavigator** (`src/navigation/RootNavigator.tsx`)
  - Stack Navigator com 2 telas
  - Home (tela principal da landing page)
  - Form (modal de formulário de pré-inscrição)

### Componentes Criados

- **CountdownTimer** (`src/components/CountdownTimer.tsx`)
  - Contador regressivo até 7 de abril de 2026
  - Atualiza em tempo real a cada segundo
  - Design premium com blocos destacados

- **AccordionItem** (`src/components/AccordionItem.tsx`)
  - Componente accordion com animação nativa (LayoutAnimation)
  - Funcional e testado - expande/colapsa corretamente
  - Usado para exibir cronograma detalhado dia a dia

- **VideoPlayer** (`src/components/VideoPlayer.tsx`)
  - Player de vídeo profissional com expo-video (mobile)
  - Controles customizados e botão de play amarelo
  - Suporte a fullscreen e Picture-in-Picture

- **VideoPlayerWeb** (`src/components/VideoPlayerWeb.tsx`)
  - Player de vídeo para web com iframe
  - Suporta YouTube embed
  - Responsivo e otimizado

- **UnifiedVideoPlayer** (`src/components/UnifiedVideoPlayer.tsx`)
  - Componente unificado que escolhe automaticamente
  - VideoPlayer para mobile, VideoPlayerWeb para web
  - Mesma API em todas plataformas

- **ResponsiveContainer** (`src/components/ResponsiveContainer.tsx`)
  - Container responsivo para web
  - Centraliza conteúdo (max-width 1200px)
  - Transparente no mobile

### Telas

- **HomeScreen** (`src/screens/HomeScreen.tsx`)
  - Tela principal da landing page
  - Contém: VSL placeholder, Hero, Cronograma, Benefícios, Incluso e CTA final
  - CTAs conectados à navegação para FormScreen

- **FormScreen** (`src/screens/FormScreen.tsx`)
  - Modal de formulário completo
  - Aparece quando usuário clica em qualquer CTA de pré-inscrição
  - 13 campos de qualificação
  - Validação e envio

### Dados

- **scheduleData.ts** - Cronograma ATUALIZADO dos 34 dias (VERSÃO FINAL)
  - 11 períodos com informações dia a dia separadas
  - Emojis 📍 para melhor visualização
  - Cronograma detalhado por dia específico quando há atividades especiais
  - **Embarque**: 07/04 - São Paulo → Shanghai
  - **Shanghai**: 10-13/04 - Ambientação e exploração da cidade
  - **Semana 1 Canton Fair**: 14-19/04 - Fase 1 com reunião de alinhamento, jantares especiais, Templo Dafo e shopping eletrônico
  - **Hong Kong**: 20-22/04 - Passeios culturais e apresentação sobre Fase 2
  - **Semana 2 Canton Fair**: 23-27/04 - Fase 2 com passeios e shopping eletrônico
  - **Macau**: 28-30/04 - Descanso e cultura + preparação técnica para Fase 3
  - **Semana 3 Canton Fair**: 01-05/05 - Fase 3 com River Cruise e consolidação
  - **Yiwu**: 06-09/05 - Mercado atacadista com Night Market (dia 7), Restaurante Ariana (dia 8), e Yiwu Temple (dia 9)
  - **Retorno**: 10/05 - Yiwu → Shanghai → Brasil
  - Informações específicas de hotéis (4 e 5 estrelas conforme período)
  - Detalhes de transfers e shuttles inclusos
  - Workshops, apresentações técnicas, reuniões de alinhamento
- **benefitsData.ts** - 9 benefícios principais da imersão
- **includedData.ts** - 16 itens inclusos no pacote

## Paleta de Cores

A landing page utiliza uma identidade visual que mescla Brasil e China:

- **Azul Marinho**: `#0F1B2A` (navy)
- **Vermelho China**: `#D00000` (chinared) - CTAs e destaques
- **Verde Brasil**: `#1A8F5A` (brazilgreen) - ícones e checks
- **Amarelo Destaque**: `#F2C400` (yellowaccent) - badges e detalhes
- **Branco**: `#FFFFFF`
- **Cinza Claro**: `#F5F5F5`

## Seções da Landing Page

### 1. Hero Section com VSL Integrado
- **Background de gate de embarque com transparência** (imagem moderna de aeroporto)
- Badge "Imersão Internacional"
- Headline impactante
- Ícone de avião
- "Direto em Solo Chinês"
- **Vídeo VSL do YouTube integrado** (altura 220px)
- Subtítulo: "Uma experiência completa, guiada por especialistas..."
- Contador regressivo destacado
- CTA principal vermelho
- Overlay com gradiente escuro (92% opacidade) para garantir legibilidade do texto

### 2. Cronograma Completo
- 11 períodos detalhados em accordion
- Expandíveis com animação suave
- Descrição dia a dia de cada fase da viagem
- Informações específicas de atividades noturnas e culturais

### 3. Por Que Participar
- 9 cards de benefícios
- Ícones ilustrativos
- Layout em grid responsivo
- CTA adicional após benefícios

### 4. Mentoria na Volta
- **Nova seção destacada** com design premium em vermelho
- Destaque para 3 meses de acompanhamento pós-imersão
- Encontros 1 a 1 quinzenais inclusos no pacote
- 3 pilares da mentoria:
  - Análise dos dados coletados na China
  - Estratégia de implementação personalizada
  - Suporte contínuo para resolver desafios
- Badge "Já Incluso no Pacote" em amarelo
- Ícones e layout premium

### 5. O Que Está Incluso
- Lista com 18 itens inclusos (incluindo mentoria)
- Checkmarks em verde Brasil
- Fundo azul marinho premium
- CTA antes da seção final

### 6. CTA Final
- Seção com gradient vermelho
- Mensagem urgente e persuasiva
- CTA em branco contrastante
- Mini contador de embarque

## Fluxo do Usuário

1. **Hero com VSL**: Usuário vê headline, vídeo VSL do YouTube integrado e contador
2. **Scroll**: Navega pela landing page conhecendo a imersão
3. **Cronograma**: Expande accordions para ver detalhes
4. **Benefícios**: Conhece vantagens através dos cards
5. **CTAs Estratégicos**: 4 CTAs ao longo da página
6. **Clique no CTA**: Abre modal com formulário
7. **Formulário**: Preenche dados de qualificação
8. **Envio**: Recebe confirmação e retorna para home

## Formulário de Captura (Modal)

Aparece como modal quando usuário clica em qualquer CTA. Coleta:

- **Dados Básicos**: Nome*, email*, WhatsApp*
- **Experiência**: Já importa da China?
- **Objetivo**: Qual objetivo com a imersão?
- **Nicho**: Nicho de produtos de interesse
- **CNPJ**: Possui CNPJ ativo?
- **Investimento**: Nível de investimento disponível
- **Motivação**: Por que quer participar? (texto longo)
- **Disponibilidade**: Disponível para viajar nas datas?
- **Contato**: Melhor horário e forma preferida
- **Origem**: Como nos encontrou?

*Campos obrigatórios com validação

### 📧 Sistema de Email Integrado

✅ **Os leads são enviados automaticamente por email!**

Recursos:
- ✅ Envio automático via EmailJS
- ✅ Validação de campos obrigatórios
- ✅ Validação de formato de email
- ✅ Loading durante envio
- ✅ Mensagens de sucesso/erro
- ✅ Feedback visual em tempo real
- ✅ Email formatado profissionalmente

**Configure em 5 minutos**: Veja o arquivo `EMAIL_SETUP.md` para instruções completas.

## Características Técnicas

- **Navegação**: React Navigation Native Stack
- **Modal**: Apresentação modal para formulário
- **Responsivo**: Layout otimizado para mobile
- **Animações**: Accordion suave com Reanimated v3
- **Safe Area**: Respeitando áreas seguras do dispositivo
- **Keyboard Avoiding**: Teclado não obstrui campos
- **TypeScript**: 100% tipado sem erros
- **Tailwind**: Estilização com Nativewind

## CTAs Estratégicos

A landing page possui 4 CTAs estrategicamente posicionados:

1. **Hero Section**: "Quero garantir minha pré-inscrição"
2. **Após Benefícios**: "Quero me pré-inscrever agora"
3. **Seção Incluso**: "Garantir minha vaga"
4. **CTA Final**: "Quero garantir minha pré-inscrição agora"

Todos abrem o modal de formulário.

## Vídeo VSL Profissional com Expo Video

O vídeo VSL agora usa **expo-video** para uma experiência nativa de alta qualidade!

**Localização**: Entre "Direto em Solo Chinês" e "Uma experiência completa..."

### Recursos do Player:
✅ Controles nativos de reprodução
✅ Suporte a fullscreen
✅ Picture-in-Picture
✅ Botão de play personalizado (amarelo)
✅ Loading indicator elegante
✅ Performance superior ao WebView

### Para adicionar seu vídeo VSL:

**Opção 1: Vídeo Hospedado (Recomendado)**
Faça upload do seu vídeo VSL para um servidor (Vimeo, AWS S3, etc.) e obtenha a URL direta do arquivo MP4.

Edite `HomeScreen.tsx` (linha 101):
```typescript
<VideoPlayer videoUrl="https://seu-servidor.com/seu-video.mp4" />
```

**Opção 2: Vídeo Local**
1. Coloque o arquivo de vídeo em `assets/vsl.mp4`
2. Crie um novo componente ou modifique o VideoPlayer para aceitar vídeos locais:
```typescript
const videoSource = require('../../assets/vsl.mp4');
```

**Nota sobre YouTube**:
O YouTube não permite embed direto em apps nativos via MP4. Para usar vídeos do YouTube, você precisará:
- Baixar o vídeo e hospedar em outro lugar, OU
- Usar a API oficial do YouTube (mais complexo)

**Vídeo atual**: Vídeo oficial da Imersão China (YouTube: Uh_qFypldYY)

## Próximos Passos Sugeridos

- [x] ~~Adicionar vídeo VSL real~~ ✅ Concluído!
- [x] ~~Integrar formulário com backend/API~~ ✅ Sistema de email implementado!
- [x] ~~Adicionar pixel de conversão~~ ✅ Meta Pixel completamente integrado!
- [ ] Configurar credenciais do EmailJS (veja EMAIL_SETUP.md)
- [ ] Adicionar analytics extras (tracking de eventos customizados)
- [ ] Implementar compartilhamento social
- [ ] Adicionar depoimentos de participantes anteriores
- [ ] Criar galeria de fotos das edições passadas
- [ ] Implementar chat/FAQ
- [ ] Integrar com Google Sheets via Zapier (opcional)

## Personalização

### Cores
Edite `tailwind.config.js` (linhas 14-19)

### Data do Embarque
Edite `CountdownTimer.tsx` (linha 16)

### Cronograma
Edite `src/data/scheduleData.ts`

### Benefícios
Edite `src/data/benefitsData.ts`

### Itens Inclusos
Edite `src/data/includedData.ts`

### Textos
Edite `HomeScreen.tsx` e `FormScreen.tsx`

## Estrutura de Arquivos

```
src/
├── components/
│   ├── CountdownTimer.tsx
│   ├── AccordionItem.tsx
│   ├── VideoPlayer.tsx (mobile)
│   ├── VideoPlayerWeb.tsx (web)
│   ├── UnifiedVideoPlayer.tsx (universal)
│   └── ResponsiveContainer.tsx (web responsive)
├── data/
│   ├── scheduleData.ts
│   ├── benefitsData.ts
│   └── includedData.ts
├── navigation/
│   └── RootNavigator.tsx
└── screens/
    ├── HomeScreen.tsx
    └── FormScreen.tsx
```

## Observações Importantes

- Os leads são enviados automaticamente por email via EmailJS
- Configure suas credenciais em `src/api/email-service.ts` (veja EMAIL_SETUP.md)
- Validação completa de campos obrigatórios e formato de email
- Feedback visual com mensagens de sucesso/erro
- Todas as cores seguem a identidade visual Brasil + China
- Layout otimizado para iOS (conforme especificação Vibecode)
- VSL placeholder pronto para receber vídeo real
- Modal de formulário com apresentação nativa

---

**Última atualização**: 11/12/2025
**Versão**: 7.0 ✨
**Mudanças recentes**:
- ✅ Meta Pixel completamente integrado com Conversions API
- ✅ Pixel ID configurado: 2671738819859416
- ✅ Tracking de PageView na Home Screen
- ✅ Tracking de Lead no Form Screen
- ✅ Tela de teste para validação do Pixel (PixelTestScreen)
- ✅ Documentação completa no README
- ✅ Todos os eventos padrão do Meta Pixel disponíveis

