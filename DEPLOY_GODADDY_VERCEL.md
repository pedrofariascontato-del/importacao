# 🚀 Deploy no Vercel + Domínio GoDaddy

Guia completo para fazer deploy da Landing Page da Imersão China no Vercel e configurar seu domínio da GoDaddy.

---

## 📋 Pré-requisitos

Antes de começar, você precisa ter:

1. ✅ Conta no Vercel (grátis) - https://vercel.com
2. ✅ Domínio registrado na GoDaddy
3. ✅ Git instalado no seu computador
4. ✅ Node.js ou Bun instalado

---

## PARTE 1: Deploy no Vercel

### Opção A: Deploy via GitHub (Recomendado)

#### Passo 1: Conectar Vercel ao GitHub

1. Acesse https://vercel.com e faça login
2. Clique em "Add New Project"
3. Selecione "Import Git Repository"
4. Conecte sua conta do GitHub
5. Selecione o repositório: `pedrofariascontato-del/importacao`
6. Clique em "Import"

#### Passo 2: Configurar o Projeto no Vercel

Quando aparecer a tela de configuração:

**Framework Preset:** Deixe em "Other" ou "Create React App"

**Build and Output Settings:**
- Build Command: `bun run build:web`
- Output Directory: `dist`
- Install Command: `bun install`

**Root Directory:** Deixe em branco (raiz do projeto)

#### Passo 3: Variáveis de Ambiente (se necessário)

Se você estiver usando EmailJS ou outras APIs:

1. Clique em "Environment Variables"
2. Adicione suas variáveis:
   ```
   VITE_EMAILJS_SERVICE_ID=seu_service_id
   VITE_EMAILJS_TEMPLATE_ID=seu_template_id
   VITE_EMAILJS_PUBLIC_KEY=sua_public_key
   ```

#### Passo 4: Deploy

1. Clique em "Deploy"
2. Aguarde o build finalizar (2-5 minutos)
3. Você receberá uma URL temporária do Vercel: `https://seu-projeto.vercel.app`

---

### Opção B: Deploy via Vercel CLI (Alternativa)

Se preferir usar a linha de comando:

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Fazer login
vercel login

# 3. Deploy do projeto
cd /caminho/do/seu/projeto
vercel

# 4. Deploy em produção
vercel --prod
```

---

## PARTE 2: Configurar Domínio GoDaddy no Vercel

### Passo 1: Adicionar Domínio no Vercel

1. Acesse seu projeto no Vercel Dashboard
2. Clique em "Settings" (configurações)
3. Clique em "Domains" no menu lateral
4. Clique em "Add" para adicionar um domínio
5. Digite seu domínio (exemplo: `imersaochina.com.br`)
6. Clique em "Add"

O Vercel mostrará as configurações de DNS que você precisa adicionar.

---

### Passo 2: Configurar DNS na GoDaddy

#### A. Acesse o Painel DNS da GoDaddy

1. Faça login em https://godaddy.com
2. Vá em "Meus Produtos"
3. Encontre seu domínio e clique em "DNS"
4. Você verá a página de "Gerenciamento de DNS"

#### B. Configurar para Domínio Principal (sem www)

**Exemplo: imersaochina.com.br**

1. **Adicionar registro A:**
   - Tipo: `A`
   - Nome: `@`
   - Valor: `76.76.21.21`
   - TTL: `600 segundos` (ou padrão)

2. **Adicionar registro CNAME para www:**
   - Tipo: `CNAME`
   - Nome: `www`
   - Valor: `cname.vercel-dns.com`
   - TTL: `600 segundos`

#### C. Configurar para Subdomínio

**Exemplo: app.imersaochina.com.br**

1. **Adicionar registro CNAME:**
   - Tipo: `CNAME`
   - Nome: `app` (ou o subdomínio que você escolher)
   - Valor: `cname.vercel-dns.com`
   - TTL: `600 segundos`

---

### Passo 3: Configurações Específicas do Vercel

O Vercel pode solicitar configurações específicas. Aqui estão os valores padrão:

#### Registros DNS Principais:

| Tipo | Nome | Valor |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

#### Se o Vercel solicitar verificação:

Às vezes o Vercel pede um registro TXT para verificação:

- Tipo: `TXT`
- Nome: `_vercel`
- Valor: (valor fornecido pelo Vercel)
- TTL: `600 segundos`

---

### Passo 4: Aguardar Propagação DNS

⏰ **Tempo de propagação:** 5 minutos a 48 horas (geralmente 1-2 horas)

**Como verificar se está funcionando:**

```bash
# No terminal/cmd do seu computador:
nslookup seu-dominio.com.br

# Ou use ferramentas online:
# https://dnschecker.org
# https://www.whatsmydns.net
```

---

## PARTE 3: Configurações Finais no Vercel

### 1. Certificado SSL (HTTPS)

O Vercel gera automaticamente um certificado SSL gratuito:

1. Vá em "Settings" > "Domains"
2. Aguarde o status mudar para "Valid" com um ícone de cadeado verde
3. Isso pode levar alguns minutos após a propagação do DNS

### 2. Redirecionamentos

Configure redirecionamentos úteis:

1. Vá em "Settings" > "Domains"
2. Configure para redirecionar `www` para domínio principal (ou vice-versa)
   - Exemplo: `www.imersaochina.com.br` → `imersaochina.com.br`

### 3. Configurar Build Automático

Com a integração GitHub ativa:

- ✅ Todo commit na branch `main` gera deploy automático
- ✅ Pull requests geram preview deployments
- ✅ Você pode reverter para versões anteriores

---

## 📊 Checklist Final

Use este checklist para garantir que tudo está configurado:

### Vercel
- [ ] Projeto importado do GitHub
- [ ] Build configurado corretamente (`bun run build:web`)
- [ ] Output directory definido (`dist`)
- [ ] Variáveis de ambiente adicionadas
- [ ] Deploy inicial bem-sucedido
- [ ] URL temporária do Vercel funcionando

### GoDaddy
- [ ] Registro A apontando para `76.76.21.21`
- [ ] Registro CNAME para www apontando para `cname.vercel-dns.com`
- [ ] Registro TXT de verificação (se solicitado)
- [ ] DNS propagado (testado com nslookup ou dnschecker)

### Domínio no Vercel
- [ ] Domínio adicionado no Vercel
- [ ] Status do domínio: "Valid"
- [ ] Certificado SSL ativo (cadeado verde)
- [ ] Redirecionamento www configurado
- [ ] Site acessível via domínio customizado

---

## 🔧 Configurações Avançadas (Opcional)

### Configurar Múltiplos Domínios

Você pode ter múltiplos domínios apontando para o mesmo projeto:

```
imersaochina.com.br (principal)
www.imersaochina.com.br (redireciona)
imersao-china.com.br (alternativo)
```

### Analytics

Ativar Vercel Analytics (grátis):

1. Vá em "Analytics" no dashboard
2. Clique em "Enable"
3. Adicione o script no seu projeto (opcional, já vem integrado)

### Speed Insights

Monitorar performance:

1. Vá em "Speed Insights"
2. Clique em "Enable"

---

## 🚨 Solução de Problemas

### Problema: "Domain not verified"

**Solução:**
- Aguarde até 48h para propagação DNS
- Verifique se os registros DNS estão corretos na GoDaddy
- Use https://dnschecker.org para verificar propagação

### Problema: "Invalid Configuration"

**Solução:**
- Certifique-se de que o registro A está exatamente: `76.76.21.21`
- Certifique-se de que o CNAME está exatamente: `cname.vercel-dns.com`
- Não adicione `http://` ou `https://` nos valores

### Problema: Site não carrega / Erro 404

**Solução:**
- Verifique se o build foi bem-sucedido no Vercel
- Confirme que o Output Directory está correto: `dist`
- Verifique os logs de build no Vercel

### Problema: Certificado SSL não ativo

**Solução:**
- Aguarde até 24h após DNS propagar
- Clique em "Refresh" no domínio do Vercel
- Se persistir, remova e adicione o domínio novamente

---

## 📱 Testar o Site

Depois de tudo configurado, teste:

1. **Acesso direto:** `https://seu-dominio.com.br`
2. **Com www:** `https://www.seu-dominio.com.br`
3. **Certificado SSL:** Deve aparecer cadeado verde
4. **Responsivo:** Teste em mobile e desktop
5. **Formulário:** Teste o envio de pré-inscrição

---

## 🎉 Pronto!

Seu site da Imersão China está no ar!

**Próximos passos sugeridos:**

1. Configure Google Analytics
2. Adicione Facebook Pixel
3. Configure Search Console do Google
4. Teste o formulário de captura de leads
5. Compartilhe o link nas redes sociais

---

## 📞 Suporte

**Vercel:**
- Documentação: https://vercel.com/docs
- Suporte: https://vercel.com/support

**GoDaddy:**
- Suporte DNS: https://br.godaddy.com/help
- Telefone: (Veja no site da GoDaddy)

---

**Última atualização:** 09/12/2025
**Versão:** 1.0
