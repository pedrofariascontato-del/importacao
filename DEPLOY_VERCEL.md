# 🚀 Guia de Deploy no Vercel

## ✅ O Projeto Está Pronto!

Seu projeto agora funciona em:
- 📱 **Mobile**: App nativo via Vibecode/Expo
- 🌐 **Web**: Site responsivo publicável no Vercel

## 🎯 Passo a Passo para Publicar no Vercel

### Opção 1: Deploy via GitHub (Recomendado)

1. **Suba o projeto para o GitHub:**
```bash
git add .
git commit -m "Preparado para deploy no Vercel"
git push origin main
```

2. **Acesse o Vercel:**
   - Vá em [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub

3. **Importe o Projeto:**
   - Clique em "Add New..." → "Project"
   - Selecione seu repositório
   - Clique em "Import"

4. **Configurações (Vercel vai detectar automaticamente):**
   - Framework Preset: **Other**
   - Build Command: `bun run build:web`
   - Output Directory: `dist`
   - Install Command: `bun install`

5. **Deploy:**
   - Clique em "Deploy"
   - Aguarde 2-3 minutos
   - ✅ Seu site estará no ar!

### Opção 2: Deploy via Vercel CLI

1. **Instale o Vercel CLI:**
```bash
npm i -g vercel
```

2. **Faça login:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Deploy para produção:**
```bash
vercel --prod
```

## 🌐 URL do Seu Site

Após o deploy, você receberá uma URL tipo:
- `https://seu-projeto.vercel.app`

Você pode:
- Conectar um domínio customizado
- Configurar variáveis de ambiente
- Ver analytics e logs

## 📱 Versões do Projeto

### Mobile (App Nativo)
- Funciona via Vibecode/Expo Go
- Video player com expo-video
- Performance otimizada para iOS/Android

### Web (Site Responsivo)
- Video player com iframe do YouTube
- Layout responsivo para desktop/tablet/mobile
- SEO otimizado
- Performance web otimizada

## 🎨 Responsividade Web

O site é 100% responsivo:
- **Mobile** (< 640px): Layout vertical, textos menores
- **Tablet** (640px - 1024px): Layout intermediário
- **Desktop** (> 1024px): Centralizado com max-width 1200px

## ⚙️ Arquivos de Configuração

### `vercel.json`
Configuração do Vercel com:
- Build command
- Output directory
- Rewrites para SPA
- Headers de segurança

### `package.json`
Script adicionado:
```json
"build:web": "expo export --platform web"
```

## 🔧 Troubleshooting

### Se o build falhar:

1. **Erro de tipagem:**
```bash
bun run typecheck
```

2. **Erro de build local:**
```bash
bun run build:web
```

3. **Limpar cache:**
```bash
rm -rf node_modules .expo dist
bun install
```

### Ajustar configurações do Vercel:

Se precisar mudar algo, edite `vercel.json`:
- `buildCommand`: comando de build
- `outputDirectory`: pasta de saída
- `framework`: framework usado

## 📊 Após Deploy

Você pode:
- ✅ Compartilhar link da landing page
- ✅ Rodar campanhas de anúncios
- ✅ Captar leads pelo formulário
- ✅ Analytics e conversões
- ✅ Integrar com backend
- ✅ Conectar domínio próprio

## 🎯 Próximos Passos

1. **Deploy no Vercel** ← Você está aqui!
2. **Conectar domínio customizado**
3. **Integrar formulário com API/backend**
4. **Adicionar Google Analytics**
5. **Configurar Pixel do Facebook**
6. **Otimizar SEO**

---

**Dúvidas?** A documentação completa do Vercel está em: https://vercel.com/docs
