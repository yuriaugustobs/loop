# 🏠 Reni Corretor - Site Imobiliária

Site institucional para imobiliária desenvolvido com **Jigsaw**, **TailwindCSS** e **JavaScript**.

## 📁 Estrutura do Projeto

```
source/
├── _layouts/
│   ├── main.blade.php      # Layout principal
│   ├── header.blade.php    # Cabeçalho do site
│   └── footer.blade.php    # Rodapé do site
├── _partials/
│   ├── 1-hero.blade.php    # Seção hero/banner
│   ├── 2-sobre.blade.php   # Seção sobre o corretor
│   ├── 3-servicos.blade.php # Seção de serviços
│   ├── 4-imoveis.blade.php # Seção de imóveis (dinâmica)
│   └── 5-contato.blade.php # Seção de contato
├── _assets/
│   ├── css/
│   │   └── main.css        # Estilos principais + Tailwind
│   └── js/
│       └── main.js         # JavaScript principal
├── index.blade.php         # Página inicial
└── contato.blade.php       # Página de contato
```

## 🚀 Funcionalidades Implementadas

### ✅ Layout e Estrutura
- [x] Layout base com header e footer
- [x] Sistema de seções organizadas numericamente
- [x] Design responsivo com TailwindCSS
- [x] Tipografia moderna (Inter)

### ✅ Navegação
- [x] Menu desktop e mobile
- [x] Scroll suave para âncoras internas
- [x] Botão "Voltar ao topo"
- [x] Efeito de transparência no header ao rolar

### ✅ Animações
- [x] **Scroll Reveal** com classes:
  - `reveal-up` - Aparece de baixo para cima
  - `reveal-down` - Aparece de cima para baixo
  - `reveal-left` - Aparece da esquerda
  - `reveal-right` - Aparece da direita

### ✅ Seções Implementadas

#### 1. **Hero Section** (`1-hero.blade.php`)
- Banner principal com call-to-action
- Estatísticas da empresa
- Design atrativo com gradientes

#### 2. **Sobre** (`2-sobre.blade.php`)
- Informações sobre o corretor
- Diferenciais da empresa
- Card de perfil profissional

#### 3. **Serviços** (`3-servicos.blade.php`)
- Grid de 6 serviços principais
- Ícones SVG personalizados
- Call-to-action final

#### 4. **Imóveis** (`4-imoveis.blade.php`)
- Sistema de filtros funcionais
- Placeholder para API do WordPress
- Cards de imóveis com informações completas

#### 5. **Contato** (`5-contato.blade.php`)
- Formulário completo com validação
- Informações de contato
- Conformidade com LGPD
- Placeholder para mapa

### ✅ JavaScript Features

#### Scroll Reveal
```javascript
// Classes suportadas automaticamente:
<div class="reveal-up">Aparece de baixo</div>
<div class="reveal-down">Aparece de cima</div>
<div class="reveal-left">Aparece da esquerda</div>
<div class="reveal-right">Aparece da direita</div>
```

#### Smooth Scroll
```html
<!-- Qualquer link com âncora interna -->
<a href="#contato" class="smooth-scroll">Ir para contato</a>
```

#### Menu Mobile
- Toggle automático
- Fechamento ao clicar em links
- Animação do ícone

#### Formulário de Contato
- Validação HTML5
- Estados de loading
- Mensagens de sucesso/erro
- Conformidade LGPD

## 🎨 Customização

### Cores Principais
- **Azul Primário**: `#2563eb` (blue-600)
- **Amarelo Destaque**: `#fbbf24` (yellow-400)
- **Verde Sucesso**: `#059669` (green-600)
- **Cinza Texto**: `#374151` (gray-700)

### Fontes
- **Principal**: Inter (Google Fonts)
- **Tamanhos**: Base 16px, responsivo

## 🔧 Para Desenvolvedores

### Comandos Jigsaw
```bash
# Desenvolvimento
npm run dev
npm run watch

# Produção
npm run production
```

### Adicionando Nova Seção
1. Crie arquivo em `_partials/` com prefixo numérico
2. Use classes `reveal-*` para animações
3. Inclua no `index.blade.php`:
```php
@include('_partials.6-nova-secao')
```

### Conectando API de Imóveis
Edite a função em `main.js`:
```javascript
async function loadPropertiesFromAPI() {
    const response = await fetch('https://sua-api.com/imoveis');
    const properties = await response.json();
    renderProperties(properties);
}
```

## 📱 Contatos Configurados

- **Telefone**: (11) 99999-9999
- **WhatsApp**: Link direto com mensagem pré-definida
- **E-mail**: contato@renicorretor.com.br
- **Endereço**: Rua das Flores, 123 - Centro, São Paulo/SP

## 🎯 Próximos Passos

### Para Implementação
1. **Imagens Reais**: Substituir placeholders por fotos profissionais
2. **API WordPress**: Conectar sistema de imóveis
3. **Formulário Backend**: Configurar envio real de e-mails
4. **SEO**: Adicionar meta tags específicas
5. **Analytics**: Configurar Google Analytics
6. **Mapa**: Integrar Google Maps na seção contato

### Melhorias Futuras
- [ ] Sistema de busca de imóveis
- [ ] Galeria de fotos com lightbox
- [ ] Blog/notícias imobiliárias
- [ ] Calculadora de financiamento
- [ ] Área do cliente
- [ ] Chat online
- [ ] Integração com CRM

## 📄 Licença

Este projeto foi desenvolvido para Reni Corretor. Todos os direitos reservados.

---

**Desenvolvido com ❤️ usando Jigsaw + TailwindCSS + JavaScript**
