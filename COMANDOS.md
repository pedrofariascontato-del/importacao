# 🚀 Comandos Rápidos

## Desenvolvimento

```bash
# Mobile (Expo/Vibecode)
bun start

# Web (navegador)
bun web

# Verificar tipos
bun typecheck

# Lint
bun lint
```

## Build e Deploy

```bash
# Build para web
bun run build:web

# Testar build localmente
cd dist && python3 -m http.server 8000

# Deploy no Vercel
vercel

# Deploy em produção
vercel --prod
```

## URLs

- **Desenvolvimento Mobile**: App Vibecode
- **Desenvolvimento Web**: http://localhost:8081
- **Produção**: https://seu-projeto.vercel.app

## Estrutura de Deploy

```
workspace/
├── dist/              # Output do build (gerado)
├── src/               # Código fonte
├── vercel.json        # Config do Vercel
├── .vercelignore      # Ignorar no deploy
└── DEPLOY_VERCEL.md   # Guia completo
```

## Troubleshooting

### Erro no build:
```bash
rm -rf .expo dist node_modules
bun install
bun run build:web
```

### Erro de tipos:
```bash
bun typecheck
```

### Limpar tudo:
```bash
git clean -fdx
bun install
```

## Próximo Deploy

1. Faça suas alterações
2. Commit: `git commit -am "suas mudanças"`
3. Push: `git push`
4. O Vercel faz deploy automaticamente! 🎉
