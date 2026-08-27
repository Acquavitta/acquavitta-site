# AcquaVitta — Research Peptides

Site institucional/e-commerce (front-end estático) para a AcquaVitta.

## ⚠️ Antes de publicar — pendências com placeholder
Estes arquivos têm campos marcados em destaque (fundo laranja claro) que você precisa preencher com os dados reais da sua empresa:
- `refund-policy.html`, `privacy-policy.html`, `shipping-policy.html`, `terms.html` — procure por `[Your LLC / company legal name]`, `[Company mailing address]` e, no `terms.html`, `[Your state, e.g. Florida]`.
- `index.html` — no rodapé, `<span id="footerCompanyName">AcquaVitta LLC</span>` (troque pelo nome legal exato) e `<span id="footerAddress">[Company mailing address — pending]</span>`.
- `shipping-policy.html` também tem placeholders sobre prazo de processamento, transportadora e se você envia internacionalmente — preencha com a sua operação real.

Assim que tiver o endereço comercial resolvido (endereço virtual, não caixa postal — como conversamos), é só me mandar que eu atualizo tudo de uma vez.

## O que tem aqui
- `index.html` — página única (HTML + CSS + JS embutidos), pronta para GitHub Pages.
- `refund-policy.html`, `privacy-policy.html`, `shipping-policy.html`, `terms.html` — páginas de política jurídica exigidas por processadores de pagamento de alto risco, linkadas no rodapé do site e no checkbox de confirmação do carrinho.
- `assets/logo-icon.png`, `assets/logo-full.png` — seus logos oficiais.
- `assets/products/*.jpg` — fotos reais de estúdio (frasco sobre pedestal de mármore) para os 19 produtos do catálogo, exibidas no menu lateral de produtos.
- `assets/story/*.jpg` — as duas fotos de laboratório usadas na seção "Nossa história".

## Páginas de política (novo)
Criei 4 páginas separadas, no mesmo estilo visual do site, linkadas no rodapé ("Legal") e também dentro do checkbox de confirmação do carrinho ("termos de venda" e "política de privacidade" agora são links de verdade):
- **Refund & Return Policy** — política de reembolso adaptada para produtos de pesquisa laboratorial (venda final em produtos abertos, RMA para itens lacrados, etc.)
- **Privacy Policy** — o que o site coleta (localStorage do carrinho, formulário de contato via Formspree) e o que não faz (não vende dados, não usa cookies de rastreamento)
- **Shipping Policy** — prazos, transportadora, embalagem discreta (preencha os placeholders com sua operação real)
- **Terms of Service** — elegibilidade (21+, uso exclusivo de pesquisa), isenção de responsabilidade, lei aplicável. **Recomendo revisão por um advogado antes de publicar** — deixei um aviso nesse sentido na própria página.

## Navegação e catálogo
O ícone ☰ no cabeçalho abre um **menu de navegação simples** (Home, Produtos, Ciência, Sobre, Contato) — não é mais o catálogo em si. Ao clicar em "Produtos" (no menu, no cabeçalho, no rodapé ou no botão principal do hero), abre uma **página de catálogo em tela cheia**, com os produtos numa **grade alinhada de 2 colunas** (1 coluna no celular): foto, dose, descrição curta, preço e botão de adicionar ao carrinho direto no card — sem precisar entrar em uma tela de detalhe separada. A página central do site mostra a seção **"A ciência por trás dos peptídeos"**, com um resumo simples e baseado em evidências sobre o que são peptídeos.

## Banner de entrada (idade + declaração de pesquisa)
Assim que o site carrega, aparece um cartão pedindo que o visitante confirme que tem 21 anos ou mais e que entende que os produtos são exclusivamente para pesquisa — no estilo comum a outros sites do nicho (ex. Prime Peptides). Depois de clicar em "Entendi", essa confirmação fica salva no navegador do visitante e não aparece de novo nas próximas visitas. Os textos desse banner ficam em `age.title`, `age.text`, `age.age` e `age.cta` (nas 3 línguas) dentro do `index.html`, caso queira ajustar a redação.

## Catálogo atual (22 itens)
BPC-157 · CJC-1295 · Epithalon (10mg e 50mg) · GHK-Cu · Glow Blend (GHK-Cu + BPC-157 + TB-500) · Ipamorelin · MOTS-c · Selank · Semax · TB-500 · Tesamorelin · PT-141 · Glutathione · NAD+ · Vitamin B12 · IGF-1 LR3 · Oxytocin · AOD-9604 · Água Bacteriostática · Start Kit Água Bacteriostática (15 seringas) · Kit Água Bacteriostática (60 seringas).

## Idiomas
O site abre em **inglês** por padrão, com uma aba no topo para trocar entre 🇧🇷 Português (Brasil), 🇺🇸 English e 🇪🇸 Español — as bandeiras são desenhadas direto no código (SVG), sem depender de nenhum servidor externo, então aparecem sempre, em qualquer navegador. A preferência do visitante fica salva no navegador.

## Preços
Os preços estão em **USD**, definidos por você diretamente (última atualização: Epithalon $79,90/$140,90, GHK-Cu $49,90, Glow Blend $149,90, Ipamorelin $59,90, MOTS-c $79,90, Selank $68,90, Semax $64,90, TB-500 $129,90, NAD+ $139,90, Vitamin B12 $45,90, IGF-1 LR3 $69,90, Oxytocin $49,90, AOD-9604 $119,90, Água $14,90, Start Kit $19,90, Kit 60 seringas $49,90). Para alterar, edite `const PRODUCTS = [` no `index.html`.

## Compliance no checkout
Antes de finalizar o pedido, o carrinho exige que o visitante marque uma caixa de confirmação (idade 21+, profissional qualificado, uso exclusivo de pesquisa, concordância com termos) — o botão "Finalizar pedido" fica bloqueado até isso ser marcado. O rodapé do site também tem um bloco de texto jurídico reforçado (mesma linguagem usada por outros sites do nicho, como a Tydes) — mas agora em texto discreto, sem caixas coloridas de alerta, para não parecer um erro do site. O código já tem um comentário (`PONTO DE INTEGRAÇÃO FUTURO: GATEWAY NMI`) explicando onde plugar um gateway de pagamento real quando você escolher um processador de alto risco.

## Acessibilidade (auditoria WAVE)
Depois de rodar o site no [wave.webaim.org](https://wave.webaim.org), corrigi os pontos reais que apareceram:
- **9 erros de contraste muito baixo** — os selos de dose dos produtos (ex. "10mg / 3mL") tinham texto branco sobre fundo colorido, e algumas cores (dourado, laranja, azul) não passavam no mínimo de 4,5:1. Redesenhei o selo: agora é um fundo escuro fixo com um pontinho colorido identificando o produto — mantém a identidade visual sem falhar o contraste em nenhuma cor. Também escurecidos: os textos "Science that drives results" / "Data and Analytics" / etc. sobre fundo claro, e o texto pequeno do rodapé.
- **Nível de título pulado** — o "Research Use Only" do banner de entrada (H2) aparecia antes do "AcquaVitta" (H1) na ordem do código; reordenei para H1 vir primeiro.
- **Texto alternativo redundante** — a logo do cabeçalho tinha `alt="AcquaVitta"` bem ao lado do texto visível "AcquaVitta", duplicando a leitura pra quem usa leitor de tela; corrigido.
- **"Texto muito pequeno" (70 ocorrências)** — a maioria eram os textos pequenos em caixa alta (rótulos, selos, chips) que fazem parte do estilo visual do site. Aumentei o que estava abaixo de 10px para pelo menos 10-11px em todo o site, sem descaracterizar o visual.

## Aviso "apenas para pesquisa"
O aviso "For research use only — not for human or veterinary use" segue um único visual (caixa âmbar com ícone ⚠, sem tom de alerta vermelho) e aparece de forma consistente em: logo abaixo do título no topo do site, no rodapé do menu de produtos, no rodapé do carrinho, na tela de detalhe de cada produto, e no selo do rodapé do site. Mantenha esse padrão em qualquer novo material que você criar.

## Antes de publicar, edite:

1. **Preços** — no `index.html`, procure `const PRODUCTS = [` e ajuste o campo `price` de cada peptídeo.
2. **E-mail de pedidos (carrinho)** — procure `const ORDERS_EMAIL = "sales@acquavitta.com"` caso queira trocar o endereço que recebe os pedidos do carrinho.
3. **E-mail / endereço no rodapé** — ajuste `info@acquavitta.com` e a localização no rodapé (`<footer>`), se necessário.
4. **Redes sociais** — os ícones `◎ 𝕏 in ▶` no rodapé são placeholders; troque por links reais (`<a href="...">`).
5. **Fotos da seção "Nossa história"** — se as fotos em `assets/story/` forem de um banco de imagens pago (Getty/Shutterstock etc.), confirme que você tem a licença de uso comercial antes de publicar o site.

## Formulário de contato (já configurado ✅)
O formulário "Entre em contato" (o modal em formato de frasco) já está ligado ao Formspree (`https://formspree.io/f/mrpgzbzy`) e envia e-mail de verdade para `info@acquavitta.com`. Ele usa o envio HTML padrão do formulário (não JavaScript), porque formulários novos do Formspree bloqueiam por segurança o envio "silencioso" via JS — o campo oculto `_next` traz o visitante de volta ao site depois de enviar, e a página detecta esse retorno para mostrar a tela "Mensagem enviada!". Se um dia precisar trocar de formulário no Formspree, é só atualizar o `action` do `<form id="contactForm">` no `index.html`.

## Como o carrinho funciona
Não há backend nem gateway de pagamento integrado. O botão "Adicionar ao carrinho" guarda os itens no navegador do visitante (localStorage) e abre a gaveta do carrinho. No checkout, o site monta um e-mail (via `mailto:`) com o resumo do pedido e o abre no cliente de e-mail padrão do visitante, endereçado a `sales@acquavitta.com`. Diferente do formulário de contato, esse fluxo depende do visitante ter um programa de e-mail configurado no computador — se quiser o mesmo nível de confiabilidade do formulário de contato (Formspree), me avise que dá para replicar o mesmo esquema no checkout do carrinho.

## Publicar no GitHub Pages
1. Crie um repositório novo no GitHub.
2. Suba o conteúdo desta pasta (incluindo `assets/`) para a raiz do repositório (branch `main`).
3. Em *Settings → Pages*, selecione a branch `main` e a pasta `/root`.
4. Aguarde alguns minutos — o site fica disponível em `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.

## Aviso importante
Os textos de "benefícios" de cada peptídeo são resumos genéricos baseados em literatura de pesquisa (in vitro / pré-clínica) e usam linguagem de "estudado por" / "associado a" — não são alegações médicas nem recomendações de uso. Mantenha o selo "Research Use Only — Not for human or veterinary use" visível em todas as páginas e materiais.
