# AcquaVitta — Research Peptides

Site institucional/e-commerce (front-end estático) para a AcquaVitta.

## O que tem aqui
- `index.html` — página única (HTML + CSS + JS embutidos), pronta para GitHub Pages.
- `assets/logo-icon.png`, `assets/logo-full.png` — seus logos oficiais.
- `assets/products/*.jpg` — fotos reais de estúdio (frasco sobre pedestal de mármore) para os 16 produtos do catálogo, exibidas no menu lateral de produtos.
- `assets/story/*.jpg` — as duas fotos de laboratório usadas na seção "Nossa história".

## Navegação e catálogo
O catálogo completo não fica mais numa grade na página inicial — ele vive num **menu lateral (hambúrguer)**, acessível pelo ícone ☰ no cabeçalho, pelo link "Produtos" (menu e rodapé) e pelo botão principal do hero. Isso deixa a página inicial mais limpa, especialmente no celular. No lugar da antiga grade de produtos, a página central agora mostra a seção **"Nossa história"**, com um resumo simples e baseado em evidências sobre o que são peptídeos.

## Catálogo atual (16 itens)
BPC-157 · CJC-1295 · Epitalon · GHK-Cu · Glow Blend (GHK-Cu + BPC-157 + TB-500) · Ipamorelin · MOTS-c · Retatrutide · Selank · Semax · TB-500 · Tesamorelin · Tirzepatide (15mg, 20mg e 30mg) · Água Bacteriostática.

## Idiomas
O site abre em **inglês** por padrão, com uma aba no topo para trocar entre 🇺🇸 English, 🇧🇷 Português (Brasil) e 🇪🇸 Español. A preferência do visitante fica salva no navegador.

## Preços
Os preços estão em **USD** e foram calibrados com base em pesquisa de mercado em lojas do mesmo nicho (Prime Peptides, Tydes, Factor Peptides, American Peptides e concorrentes similares) para as mesmas dosagens dos rótulos — mas são ainda uma referência inicial, não um preço fixo de custo/margem seu.

## Aviso "apenas para pesquisa"
O aviso "For research use only — not for human or veterinary use" agora aparece em vários pontos: logo abaixo do título no topo do site, dentro do menu lateral de produtos (faixa fixa no topo da lista), no rodapé da gaveta do carrinho, e no selo do rodapé do site. Mantenha esse aviso em qualquer novo material que você criar.

## Antes de publicar, edite:

1. **Preços** — no `index.html`, procure `const PRODUCTS = [` e ajuste o campo `price` de cada peptídeo.
2. **E-mail de pedidos** — procure `const ORDERS_EMAIL = "sales@acquavitta.com"` caso queira trocar o endereço que recebe os pedidos.
3. **E-mail / endereço no rodapé** — ajuste `info@acquavitta.com` e a localização no rodapé (`<footer>`), se necessário.
4. **Redes sociais** — os ícones `◎ 𝕏 in ▶` no rodapé são placeholders; troque por links reais (`<a href="...">`).
5. **Fotos da seção "Nossa história"** — se as fotos em `assets/story/` forem de um banco de imagens pago (Getty/Shutterstock etc.), confirme que você tem a licença de uso comercial antes de publicar o site.

## Como o carrinho funciona
Não há backend nem gateway de pagamento integrado. O botão "Adicionar" guarda os itens no navegador do visitante (localStorage) e abre a gaveta do carrinho. No checkout, o site monta um e-mail (via `mailto:`) com o resumo do pedido e o abre no cliente de e-mail padrão do visitante, endereçado a `sales@acquavitta.com`. É a forma mais simples de vender sem precisar de um backend — se no futuro você quiser um checkout com pagamento online, isso exigirá integrar um gateway (Stripe, Mercado Pago etc.) e sai do escopo de um site puramente estático.

## Publicar no GitHub Pages
1. Crie um repositório novo no GitHub.
2. Suba o conteúdo desta pasta (incluindo `assets/`) para a raiz do repositório (branch `main`).
3. Em *Settings → Pages*, selecione a branch `main` e a pasta `/root`.
4. Aguarde alguns minutos — o site fica disponível em `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.

## Aviso importante
Os textos de "benefícios" de cada peptídeo são resumos genéricos baseados em literatura de pesquisa (in vitro / pré-clínica) e usam linguagem de "estudado por" / "associado a" — não são alegações médicas nem recomendações de uso. Mantenha o selo "Research Use Only — Not for human or veterinary use" visível em todas as páginas e materiais, como já está no rodapé e em cada card de produto.
