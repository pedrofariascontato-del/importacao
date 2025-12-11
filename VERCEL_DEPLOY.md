# Deploy no Vercel com Facebook Pixel

## Facebook Pixel Configurado ✅

O Facebook Pixel foi completamente integrado no app:

### ID do Pixel: `2671738819859416`

## Arquivos Criados:

1. **`web/index.html`** - HTML customizado com o código do Facebook Pixel
2. **`src/utils/facebook-pixel-web.ts`** - Funções helper para rastrear eventos na web
3. **`src/utils/facebook-pixel.ts`** - Funções helper para rastrear eventos no app mobile

## Como fazer Deploy no Vercel:

### 1. Preparar o projeto para web
```bash
bun run build:web
```

### 2. No Vercel Dashboard:

1. Acesse https://vercel.com
2. Clique em "Add New Project"
3. Importe o repositório: `pedrofariascontato-del/importacao`
4. Configure o projeto:
   - **Framework Preset**: Other
   - **Build Command**: `bun run build:web`
   - **Output Directory**: `dist`
   - **Install Command**: `bun install`

### 3. Adicione as Variáveis de Ambiente:

Na aba "Environment Variables" do Vercel, adicione:

```
EXPO_PUBLIC_VIBECODE_META_PIXEL_ID=2671738819859416
EXPO_PUBLIC_VIBECODE_META_ACCESS_TOKEN=EAAUTMl9TE88BQEZBdK336WubrQ9Rk1HyhgPUHCZCoNkGdcNX49OZAXZB94tI4ABCRcmwccxBsLsm2buCuU6QKeyJZBR0gtVkXZAmXRKV6kWeZBqIXR6V5OVtZCEoGFYwMn1hcJeJdomXRLBWF3yuZBEjLjvIc9Tt9s21sPDObU7PjS8NzJkc3TZB21q1M47nYZCN6IElAZDZD
```

E todas as outras chaves de API que estão no arquivo `.env`:
- `EXPO_PUBLIC_VIBECODE_OPENAI_API_KEY`
- `EXPO_PUBLIC_VIBECODE_ANTHROPIC_API_KEY`
- `EXPO_PUBLIC_VIBECODE_GROK_API_KEY`
- `EXPO_PUBLIC_VIBECODE_GOOGLE_API_KEY`
- `EXPO_PUBLIC_VIBECODE_ELEVENLABS_API_KEY`

### 4. Deploy

Clique em "Deploy" e aguarde o build finalizar.

### 5. Configurar Domínio GoDaddy (Opcional)

Se você quiser usar seu domínio da GoDaddy:

1. No Vercel, vá em "Settings" > "Domains"
2. Adicione seu domínio customizado
3. No GoDaddy, adicione os registros DNS que o Vercel fornecer:
   - Tipo: `A` ou `CNAME`
   - Apontando para os servidores do Vercel

## Deploy Automático ✅

Depois da primeira configuração, toda vez que você fizer push para o GitHub, o Vercel vai:
1. Detectar as mudanças automaticamente
2. Fazer build do projeto
3. Fazer deploy da nova versão

## Rastreamento de Eventos na Web

O Facebook Pixel está integrado no HTML e rastreia automaticamente:
- **PageView** - Sempre que alguém acessa o site
- **Eventos customizados** - Use as funções em `src/utils/facebook-pixel-web.ts`

### Exemplo de uso:

```typescript
import { trackWebPurchase, trackWebAddToCart } from './src/utils/facebook-pixel-web';

// Rastrear compra
trackWebPurchase(99.90, "BRL", ["produto123"]);

// Rastrear adicionar ao carrinho
trackWebAddToCart("produto123", "Nome do Produto", 49.90, "BRL");
```

## Verificar se o Pixel está funcionando:

1. Instale a extensão "Facebook Pixel Helper" no Chrome
2. Acesse seu site no Vercel
3. A extensão vai mostrar se o pixel está ativo e quais eventos estão sendo disparados
