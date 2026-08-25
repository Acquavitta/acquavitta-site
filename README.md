# AcquaVitta — Research Peptides

Site institucional/e-commerce (front-end estático) para a AcquaVitta.

## O que tem aqui
- `index.html` — página única (HTML + CSS + JS embutidos), pronta para GitHub Pages.
- `assets/` — logos e imagens dos rótulos dos produtos.

## Antes de publicar, edite:

1. **Preços** — no `index.html`, procure `const PRODUCTS = [` e ajuste o campo `price` de cada peptídeo (são valores de exemplo).
2. **WhatsApp** — procure `const WHATSAPP_NUMBER = "15618323456"` e troque pelo número real (formato internacional, só números, sem `+`).
3. **E-mail / telefone / endereço** — no rodapé (`<footer>`), ajuste `info@acquavitta.com`, o telefone e a localização.
4. **Redes sociais** — os ícones `◎ 𝕏 in ▶` no rodapé são placeholders; troque por links reais (`<a href="...">`).

## Como o carrinho funciona
Não há backend nem gateway de pagamento integrado. O botão "Adicionar" guarda os itens no navegador do visitante (localStorage) e abre a gaveta do carrinho. No checkout, o site monta uma mensagem com o resumo do pedido e abre o WhatsApp (`wa.me`) com o número configurado. É a forma mais simples de vender sem precisar de um backend — se no futuro você quiser um checkout com pagamento online, isso exigirá integrar um gateway (Stripe, Mercado Pago etc.) e sai do escopo de um site puramente estático.

## Publicar no GitHub Pages
1. Crie um repositório novo no GitHub.
2. Suba o conteúdo desta pasta (incluindo `assets/`) para a raiz do repositório (branch `main`).
3. Em *Settings → Pages*, selecione a branch `main` e a pasta `/root`.
4. Aguarde alguns minutos — o site fica disponível em `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.

## Aviso importante
Os textos de "benefícios" de cada peptídeo são resumos genéricos baseados em literatura de pesquisa (in vitro / pré-clínica) e usam linguagem de "estudado por" / "associado a" — não são alegações médicas nem recomendações de uso. Mantenha o selo "Research Use Only — Not for human or veterinary use" visível em todas as páginas e materiais, como já está no rodapé e em cada card de produto.
