# Landing Page - Imersão China

## Visão Geral

Esta é uma landing page profissional e moderna criada para captar leads qualificados para uma imersão de 30 dias na China, focada em ensinar importação direta.

## Estrutura do Projeto

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
  - Contém todas as seções: Hero, Cronograma, Benefícios, Formulário, Incluso e CTA final

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

### 1. Hero Section
- Headline impactante
- Subtítulo de autoridade
- Contador regressivo destacado
- CTA principal vermelho

### 2. Cronograma Completo
- 9 períodos detalhados em accordion
- Expandíveis com animação suave
- Descrição completa de cada fase da viagem

### 3. Por Que Participar
- 9 cards de benefícios
- Ícones ilustrativos
- Layout em grid responsivo

### 4. Formulário de Qualificação
- 13 campos de qualificação
- Campos obrigatórios: nome, email, WhatsApp
- Campos de múltipla escolha
- Campo de texto longo para motivação
- Validação básica implementada

### 5. O Que Está Incluso
- Lista com 16 itens inclusos
- Checkmarks em verde Brasil
- Fundo azul marinho premium

### 6. CTA Final
- Seção com gradient vermelho
- Mensagem urgente e persuasiva
- CTA em branco contrastante
- Mini contador de embarque

## Formulário de Captura

O formulário coleta as seguintes informações:

- **Dados Básicos**: Nome, email, WhatsApp
- **Experiência**: Já importa da China?
- **Objetivo**: Qual objetivo com a imersão?
- **Nicho**: Nicho de produtos de interesse
- **CNPJ**: Possui CNPJ ativo?
- **Investimento**: Nível de investimento disponível
- **Motivação**: Por que quer participar?
- **Disponibilidade**: Disponível para viajar nas datas?
- **Contato**: Melhor horário e forma preferida
- **Origem**: Como nos encontrou?

## Características Técnicas

- **Responsivo**: Layout otimizado para mobile
- **Animações**: Accordion suave com Reanimated v3
- **Safe Area**: Respeitando áreas seguras do dispositivo
- **Keyboard Avoiding**: Teclado não obstrui campos
- **TypeScript**: 100% tipado sem erros
- **Tailwind**: Estilização com Nativewind

## Como Funciona

1. Usuário rola pela landing page e conhece a imersão
2. Visualiza o cronograma detalhado expandindo os accordions
3. Conhece os benefícios através dos cards
4. Preenche o formulário de qualificação
5. Clica nos CTAs para enviar a pré-inscrição

## Próximos Passos Sugeridos

- Integrar formulário com backend/API
- Adicionar analytics (tracking de eventos)
- Implementar compartilhamento social
- Adicionar depoimentos de participantes anteriores
- Criar galeria de fotos das edições passadas
- Implementar chat/FAQ
- Adicionar vídeo de apresentação

## Personalização

Para personalizar a landing page:

1. **Cores**: Edite `tailwind.config.js`
2. **Data do embarque**: Edite `CountdownTimer.tsx`
3. **Cronograma**: Edite `src/data/scheduleData.ts`
4. **Benefícios**: Edite `src/data/benefitsData.ts`
5. **Itens inclusos**: Edite `src/data/includedData.ts`
6. **Textos**: Edite `HomeScreen.tsx`

## Observações Importantes

- O formulário atualmente apenas valida campos obrigatórios
- Um Alert é exibido após o envio (substituir por integração real)
- Todas as cores seguem a identidade visual Brasil + China
- Layout otimizado para iOS (conforme especificação Vibecode)

---

**Última atualização**: Hoje
**Versão**: 1.0
