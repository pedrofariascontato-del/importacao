# Landing Page - Imersão China

## Visão Geral

Esta é uma landing page profissional e moderna criada para captar leads qualificados para uma imersão de 30 dias na China, focada em ensinar importação direta.

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
  - Componente accordion animado com React Native Reanimated
  - Usado para exibir o cronograma detalhado dos 30 dias

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

- **scheduleData.ts** - Cronograma completo dos 30 dias (9 períodos)
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

### 1. VSL Section (Topo)
- Espaço reservado para vídeo VSL
- Altura de 280px (250px conteúdo + safe area)
- Placeholder com ícone de play
- Fundo preto para destaque do vídeo

### 2. Hero Section
- Headline impactante
- Subtítulo de autoridade
- Contador regressivo destacado
- CTA principal vermelho

### 3. Cronograma Completo
- 9 períodos detalhados em accordion
- Expandíveis com animação suave
- Descrição completa de cada fase da viagem

### 4. Por Que Participar
- 9 cards de benefícios
- Ícones ilustrativos
- Layout em grid responsivo
- CTA adicional após benefícios

### 5. O Que Está Incluso
- Lista com 16 itens inclusos
- Checkmarks em verde Brasil
- Fundo azul marinho premium
- CTA antes da seção final

### 6. CTA Final
- Seção com gradient vermelho
- Mensagem urgente e persuasiva
- CTA em branco contrastante
- Mini contador de embarque

## Fluxo do Usuário

1. **Página Inicial**: Usuário vê o VSL no topo
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

## Implementando o VSL (Vídeo)

Para adicionar seu vídeo VSL, você tem duas opções:

### Opção 1: Vídeo Hospedado (YouTube, Vimeo)
Substitua o placeholder na HomeScreen.tsx (linhas 70-86) por:
```typescript
import { WebView } from 'react-native-webview';

// No JSX:
<View className="bg-black" style={{ paddingTop: insets.top, height: 280 }}>
  <WebView
    source={{ uri: 'https://www.youtube.com/embed/SEU_VIDEO_ID' }}
    style={{ height: 250 }}
  />
</View>
```

### Opção 2: Vídeo Local
Use expo-video (já instalado):
```typescript
import { VideoView, useVideoPlayer } from 'expo-video';

// Coloque o vídeo em assets/video.mp4 e importe:
const videoSource = require('../../assets/video.mp4');
```

## Próximos Passos Sugeridos

- [ ] Adicionar vídeo VSL real
- [ ] Integrar formulário com backend/API
- [ ] Adicionar analytics (tracking de eventos)
- [ ] Implementar compartilhamento social
- [ ] Adicionar depoimentos de participantes anteriores
- [ ] Criar galeria de fotos das edições passadas
- [ ] Implementar chat/FAQ
- [ ] Adicionar pixel de conversão

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
│   └── AccordionItem.tsx
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

- O formulário atualmente apenas valida campos obrigatórios
- Um Alert é exibido após o envio (substituir por integração real)
- Todas as cores seguem a identidade visual Brasil + China
- Layout otimizado para iOS (conforme especificação Vibecode)
- VSL placeholder pronto para receber vídeo real
- Modal de formulário com apresentação nativa

---

**Última atualização**: Hoje
**Versão**: 2.0
**Mudanças**: Formulário movido para modal, VSL adicionado no topo
