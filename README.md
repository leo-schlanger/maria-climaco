# Maria Climaco - Website Profissional

> Website profissional para Maria Climaco - Fisioterapeuta & Terapeuta do Feminino

**Amor que cura. Energia que transforma. Feminino que desperta.**

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Desenvolvimento Local](#instalação-e-desenvolvimento-local)
- [Build e Deploy](#build-e-deploy)
- [Configuração de Domínio](#configuração-de-domínio)
- [E-commerce (Gumroad, Stripe, Snipcart)](#e-commerce)
- [Formulário de Contato (Netlify Forms)](#formulário-de-contato)
- [SEO e Analytics](#seo-e-analytics)
- [Customização de Conteúdo](#customização-de-conteúdo)
- [Checklist Final](#checklist-final)

---

## 🎨 Sobre o Projeto

Site completo e responsivo desenvolvido com React + Vite + TailwindCSS + shadcn/ui para Maria Climaco, profissional com 28 anos de experiência em fisioterapia, estética e terapias energéticas.

### Paleta de Cores

- **Roxo Lavanda**: `#A78BFA` - Primário
- **Rosa Queimado**: `#D8A7A7` - Secundário
- **Dourado Suave**: `#D4AF37` - Destaques/CTAs
- **Off-White**: `#F7F5F2` - Backgrounds
- **Ameixa Escura**: `#4B2C3A` - Texto/Dark

### Tipografias

- **Títulos**: Playfair Display (serif)
- **Corpo**: Inter (sans-serif)

---

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **TailwindCSS 3** - Utility-first CSS framework
- **shadcn/ui** - Componentes reutilizáveis
- **React Router DOM** - Roteamento
- **React Hook Form** - Gerenciamento de formulários
- **Lucide React** - Ícones
- **Embla Carousel** - Carrossel de imagens

---

## 🚀 Instalação e Desenvolvimento Local

### Pré-requisitos

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** ou **yarn**

### Passo a Passo

1. **Clone ou navegue até o diretório do projeto**

```bash
cd c:\Users\leosc\Projetos\maria-climaco
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**

O site estará disponível em: `http://localhost:3000`

---

## 📦 Build e Deploy

### Build para Produção

```bash
npm run build
# ou
yarn build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview do Build

```bash
npm run preview
```

---

## ☁️ Deploy na Vercel

### Método 1: Via Interface Web (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em **"Add New Project"**
4. Importe o repositório do projeto
5. Configurações automáticas:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Clique em **"Deploy"**

### Método 2: Via CLI

```bash
# Instale Vercel CLI (apenas uma vez)
npm install -g vercel

# No diretório do projeto, execute:
vercel

# Para deploy em produção:
vercel --prod
```

### Configurar Domínio na Vercel

1. Na dashboard do projeto na Vercel
2. Acesse **"Settings" → "Domains"**
3. Adicione seu domínio: `mariaclimaco.com.br` ou `espacoclimaco.com.br`
4. Siga as instruções para configurar DNS:
   - Tipo: `A` → Valor: `76.76.21.21`
   - Tipo: `CNAME` → `www` → `cname.vercel-dns.com`

---

## ☁️ Deploy na Netlify

### Via Interface Web

1. Acesse [netlify.com](https://netlify.com)
2. Faça login
3. Clique em **"Add new site" → "Import an existing project"**
4. Conecte ao GitHub e selecione o repositório
5. Configurações:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Clique em **"Deploy site"**

### Configurar Domínio na Netlify

1. Na dashboard do site
2. **"Domain settings" → "Add custom domain"**
3. Adicione `mariaclimaco.com.br`
4. Configure DNS:
   - `A` record → `104.248.0.0` (IP do Netlify)
   - `CNAME` → `www` → `[seu-site].netlify.app`

### Ativar Netlify Forms

O formulário de contato já está configurado! Ele funcionará automaticamente após o deploy na Netlify.

---

## 🛒 E-commerce

### Gumroad (Recomendado para Produtos Digitais)

1. **Criar conta**: [gumroad.com](https://gumroad.com)
2. **Adicionar produtos** (e-books)
3. **Copiar Product ID** de cada produto
4. **Atualizar no código**: `src/data/products.js`

```javascript
{
  id: 'encantos-mulher-poderosa',
  gumroadId: 'SEU_PRODUCT_ID_AQUI', // ← Substituir
  // ...
}
```

### Stripe (Opcional)

1. **Criar conta**: [stripe.com](https://stripe.com)
2. **Obter chaves API** (Dashboard → Developers → API keys)
3. **Criar arquivo `.env`** na raiz do projeto:

```env
VITE_STRIPE_PUBLIC_KEY=pk_live_xxxxxxxxxxxxx
```

4. **Instalar Stripe**:

```bash
npm install @stripe/stripe-js
```

5. **Implementar checkout** (consultar [documentação Stripe](https://stripe.com/docs))

### Snipcart (Opcional)

1. **Criar conta**: [snipcart.com](https://snipcart.com)
2. **Obter API Key**
3. **Adicionar script** em `index.html`:

```html
<script async src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"></script>
<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css" />
<div hidden id="snipcart" data-api-key="SEU_API_KEY_AQUI"></div>
```

---

## 📧 Formulário de Contato

### Netlify Forms (Já Configurado!)

O formulário em `src/pages/Contact.jsx` está configurado para Netlify Forms:

```jsx
<form name="contact" method="POST" data-netlify="true">
```

**Após deploy na Netlify:**
1. Acesse **"Forms"** no dashboard
2. Veja submissões recebidas
3. Configure notificações por e-mail em **"Form notifications"**

### Alternativa: EmailJS (se hospedar fora da Netlify)

1. Criar conta: [emailjs.com](https://emailjs.com)
2. Configurar service e template
3. Instalar: `npm install @emailjs/browser`
4. Implementar no formulário

---

## 📊 SEO e Analytics

### Google Analytics

1. Criar propriedade: [analytics.google.com](https://analytics.google.com)
2. Copiar **Measurement ID** (formato: `G-XXXXXXXXXX`)
3. Adicionar em `index.html` (antes de `</head>`):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Meta Pixel (Facebook/Instagram)

1. Criar pixel: [business.facebook.com](https://business.facebook.com)
2. Copiar **Pixel ID**
3. Adicionar em `index.html`:

```html
<!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID_AQUI');
  fbq('track', 'PageView');
</script>
```

### SEO - Arquivos Incluídos

- ✅ `sitemap.xml` - Já configurado
- ✅ `robots.txt` - Já configurado
- ✅ Meta tags Open Graph - Já configurado
- ✅ JSON-LD Schema - Já configurado

---

## ✏️ Customização de Conteúdo

### 1. Informações de Contato

**Arquivo**: `src/components/layout/Header.jsx` e `src/pages/Contact.jsx`

```javascript
const WHATSAPP_NUMBER = '5511999999999' // ← Substituir
const INSTAGRAM_URL = 'https://instagram.com/mariaclimaco' // ← Atualizar
const EMAIL = 'contato@mariaclimaco.com.br' // ← Atualizar
const ADDRESS = 'Rua Exemplo, 123 - Bairro - São Paulo, SP' // ← Atualizar
```

### 2. Adicionar/Editar Serviços

**Arquivo**: `src/data/services.js`

### 3. Adicionar/Editar Produtos (E-books)

**Arquivo**: `src/data/products.js`

### 4. Adicionar/Editar Posts do Blog

**Arquivo**: `src/data/blog-posts.js`

### 5. Substituir Imagens Placeholder

**Diretórios**:
- `public/assets/hero/` - Imagem principal da home
- `public/assets/about/` - Foto profissional
- `public/assets/services/` - Fotos de serviços
- `public/assets/blog/` - Imagens dos posts
- `public/assets/ebook-covers/` - Capas dos e-books

**Formatos recomendados**:
- `.jpg` ou `.webp` (otimizados)
- Tamanhos: 1920x1080 (hero), 800x600 (cards)

### 6. Atualizar Cores da Marca

**Arquivo**: `tailwind.config.js` (procurar por "Maria Climaco Brand Colors")

---

## ✅ Checklist Final - Pré-Deploy

### Conteúdo
- [ ] Substituir todas as imagens placeholder
- [ ] Atualizar número de WhatsApp
- [ ] Atualizar e-mail de contato
- [ ] Atualizar endereço físico
- [ ] Atualizar link do Instagram
- [ ] Revisar todos os textos
- [ ] Adicionar Bio completa em "Sobre Mim"
- [ ] Configurar Product IDs do Gumroad

### E-commerce
- [ ] Criar produtos no Gumroad
- [ ] Testar links de compra
- [ ] Configurar preços finais
- [ ] Adicionar termos de venda

### Formulários
- [ ] Testar formulário de contato
- [ ] Configurar notificações de e-mail (Netlify)
- [ ] Adicionar mensagem de confirmação personalizada

### SEO
- [ ] Atualizar meta descriptions de cada página
- [ ] Adicionar Google Analytics
- [ ] Adicionar Meta Pixel (se usar Facebook Ads)
- [ ] Verificar sitemap.xml com domínio correto
- [ ] Submeter site ao Google Search Console

### Domínio e SSL
- [ ] Configurar DNS do domínio
- [ ] Verificar SSL (HTTPS) ativo
- [ ] Testar em diferentes dispositivos
- [ ] Testar em diferentes navegadores

### LGPD e Privacidade
- [ ] Adicionar política de privacidade completa
- [ ] Adicionar aviso de cookies (se necessário)
- [ ] Revisar termos de uso
- [ ] Política de reembolso para e-books

### Performance
- [ ] Otimizar imagens (compressão, webp)
- [ ] Testar velocidade (Lighthouse - meta: 90+)
- [ ] Testar acessibilidade (WCAG AA)
- [ ] Verificar responsividade mobile

---

## 📂 Estrutura do Projeto

```
maria-climaco/
├── public/
│   ├── logo.svg                 # Logo principal
│   ├── favicon.svg              # Favicon
│   ├── sitemap.xml             # Sitemap SEO
│   ├── robots.txt              # Robots SEO
│   └── assets/                 # Imagens e arquivos estáticos
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx      # Cabeçalho/Navegação
│   │   │   └── Footer.jsx      # Rodapé
│   │   └── ui/                 # Componentes shadcn/ui
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Input.jsx
│   │       ├── Textarea.jsx
│   │       └── Label.jsx
│   ├── data/
│   │   ├── services.js         # Dados dos serviços
│   │   ├── products.js         # Dados dos produtos
│   │   ├── blog-posts.js       # Posts do blog
│   │   └── testimonials.js     # Depoimentos
│   ├── lib/
│   │   └── utils.js            # Funções utilitárias
│   ├── pages/
│   │   ├── Home.jsx            # Página inicial
│   │   ├── About.jsx           # Sobre Mim
│   │   ├── Services.jsx        # Serviços
│   │   ├── EnergyTherapies.jsx # Terapias Energéticas
│   │   ├── Shop.jsx            # Loja
│   │   ├── ProductDetail.jsx   # Detalhe do Produto
│   │   ├── Blog.jsx            # Blog
│   │   ├── BlogPost.jsx        # Post Individual
│   │   ├── Contact.jsx         # Contato
│   │   ├── PrivacyPolicy.jsx   # Política de Privacidade
│   │   ├── Terms.jsx           # Termos de Uso
│   │   └── RefundPolicy.jsx    # Política de Reembolso
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Entry point
│   └── index.css               # Estilos globais
├── index.html                  # HTML principal
├── package.json                # Dependências
├── vite.config.js              # Configuração Vite
├── tailwind.config.js          # Configuração Tailwind
├── postcss.config.js           # Config PostCSS
├── LICENSE                     # Licença MIT
└── README.md                   # Este arquivo
```

---

## 🔒 Segurança e Privacidade

- **HTTPS obrigatório** (Vercel/Netlify fornecem SSL grátis)
- **Variáveis de ambiente** para chaves sensíveis (`.env` NÃO fazer commit)
- **Validação de formulários** client-side e server-side
- **LGPD compliance** - adicionar política de privacidade

---

## 📞 Suporte

Para dúvidas sobre o código ou implementação:
- Documentação React: [reactjs.org](https://reactjs.org)
- Documentação Vite: [vitejs.dev](https://vitejs.dev)
- Documentação TailwindCSS: [tailwindcss.com](https://tailwindcss.com)
- Documentação shadcn/ui: [ui.shadcn.com](https://ui.shadcn.com)

---

## 📄 Licença

MIT License - Veja arquivo [LICENSE](LICENSE) para detalhes.

---

**Desenvolvido com ❤️ para Maria Climaco**

*Amor que cura. Energia que transforma. Feminino que desperta.*
