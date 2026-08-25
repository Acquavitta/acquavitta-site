# AcquaVitta — Research Peptides

Site institucional/e-commerce (front-end estático) para a AcquaVitta.

## O que tem aqui
- `index.html` — página única (HTML + CSS + JS embutidos), pronta para GitHub Pages.
- `assets/logo-icon.png`, `assets/logo-full.png` — seus logos oficiais.
- `assets/vials/*.png` — frascos de 3mL renderizados (não são fotos reais; são ilustrações 3D geradas a partir dos seus rótulos, envolvendo o design em torno de um frasco com tampa e batoque). Se um dia você tirar fotos reais dos frascos, é só substituir os arquivos com o mesmo nome.

## Idiomas
O site abre em **inglês** por padrão, com uma aba no topo para trocar entre 🇺🇸 English, 🇧🇷 Português (Brasil) e 🇪🇸 Español. A preferência do visitante fica salva no navegador.

## Preços
Os preços estão em **USD** e foram calibrados com base em uma pesquisa de mercado em lojas do mesmo nicho (Prime Peptides, Tydes e concorrentes similares) para as mesmas dosagens — mas são ainda uma referência inicial, não um preço fixo de custo/margem seu.

## Antes de publicar, edite:

1. **Preços** — no `index.html`, procure `const PRODUCTS = [` e ajuste o campo `price` de cada peptídeo.
2. **E-mail de pedidos** — procure `const ORDERS_EMAIL = "sales@acquavitta.com"` caso queira trocar o endereço que recebe os pedidos.
3. **E-mail / endereço no rodapé** — ajuste `info@acquavitta.com` e a localização no rodapé (`<footer>`), se necessário.
4. **Redes sociais** — os ícones `◎ 𝕏 in ▶` no rodapé são placeholders; troque por links reais (`<a href="...">`).

## Como o carrinho funciona
Não há backend nem gateway de pagamento integrado. O botão "Adicionar" guarda os itens no navegador do visitante (localStorage) e abre a gaveta do carrinho. No checkout, o site monta um e-mail (via `mailto:`) com o resumo do pedido e o abre no cliente de e-mail padrão do visitante, endereçado a `sales@acquavitta.com`. É a forma mais simples de vender sem precisar de um backend — se no futuro você quiser um checkout com pagamento online, isso exigirá integrar um gateway (Stripe, Mercado Pago etc.) e sai do escopo de um site puramente estático.

## Publicar no GitHub Pages
1. Crie um repositório novo no GitHub.
2. Suba o conteúdo desta pasta (incluindo `assets/`) para a raiz do repositório (branch `main`).
3. Em *Settings → Pages*, selecione a branch `main` e a pasta `/root`.
4. Aguarde alguns minutos — o site fica disponível em `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.

## Aviso importante
Os textos de "benefícios" de cada peptídeo são resumos genéricos baseados em literatura de pesquisa (in vitro / pré-clínica) e usam linguagem de "estudado por" / "associado a" — não são alegações médicas nem recomendações de uso. Mantenha o selo "Research Use Only — Not for human or veterinary use" visível em todas as páginas e materiais, como já está no rodapé e em cada card de produto.
