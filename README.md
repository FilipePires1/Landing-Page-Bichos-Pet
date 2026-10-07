# Bichos Pet — Landing Page

Landing page institucional/comercial da **Bichos Pet** (pet shop em Ipatinga - MG), focada em conversão para **WhatsApp** e localização no **Google Maps**.

## Como abrir

Basta abrir o arquivo `index.html` no navegador (duplo clique). Não é necessário instalar nada, build ou servidor.

Para publicar, envie toda a pasta para qualquer hospedagem estática (Hostinger, Netlify, Vercel, GitHub Pages, servidor próprio etc.).

## Estrutura

```
index.html        → página única com todas as seções
css/style.css     → identidade visual + layout responsivo (mobile-first)
js/script.js      → menu, header fixo, animações de entrada e FAQ
assets/img/       → imagens da página + logo (`logo.png`, fundo transparente)
assets/favicon.png → ícone da aba (gerado a partir da logo)
```

## Conteúdo oficial usado na página

| Item | Informação |
|---|---|
| Nome | Bichos Pet |
| Endereço | Av. Altina Gonçalves, 109 - Iguaçu, Ipatinga - MG, 35162-016 |
| WhatsApp | (31) 98242-1586 → `https://api.whatsapp.com/send?phone=5531982421586` |
| Horário | Aberto até 19:00 |
| Avaliação | 4,9 • 225 avaliações |

Todos os botões de WhatsApp já usam esse número. A mensagem inicial pode ser trocada
buscando o trecho `text=` nos links dentro de `index.html`.

## Como trocar as imagens

Substitua os arquivos em `assets/img/` mantendo os mesmos nomes:

| Arquivo | Uso |
|---|---|
| `hero.jpg` | imagem de fundo do topo |
| `destaque.jpg` | seção "Seu pet merece cuidado de verdade" |
| `galeria-loja.jpg` | galeria - loja |
| `galeria-produtos.jpg` | galeria - produtos |
| `galeria-brinquedos.jpg` | galeria - brinquedos |
| `galeria-cachorros.jpg` | galeria - cachorros |
| `galeria-gatos.jpg` | galeria - gatos |
| `galeria-atendimento.jpg` | galeria - atendimento |
| `galeria-higiene.jpg` | galeria - higiene e cuidados |
| `cta-final.jpg` | bloco final antes do rodapé |

As imagens atuais são fotos de banco de imagens usadas como referência visual.
Ao receber as fotos reais da loja, basta substituir os arquivos — o layout se ajusta sozinho.

## Onde trocar textos e links

- **Endereço / mapa:** seção `Localização` no `index.html` (link `maps/search` e o `iframe`).
- **Avaliações:** seção `Prova social` (os textos das avaliações estão ali).
- **FAQ:** seção `FAQ`, cada pergunta é um bloco `accordion__item`.
- **Cores:** variáveis no topo de `css/style.css` (`:root`) — paleta `--brand-*` vinda da logo (vermelho/marrom).
- **SEO:** `<title>`, meta description e JSON-LD no `<head>` do `index.html`.

## Acessibilidade e desempenho

- Imagens com `alt`, menu com `aria-expanded`, links com foco visível.
- Animações respeitam `prefers-reduced-motion`.
- Se o JavaScript falhar, o conteúdo continua visível.
- Layout testado em desktop (1440px), tablet (820px) e mobile (390px).

---
© 2026 Bichos Pet. Todos os direitos reservados.
