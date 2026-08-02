/* ==========================================================================
   AcquaVitta — product data, cart, and simulated checkout
   No real payment processing occurs anywhere in this file. Swap the
   `placeOrder` handler for a real payment provider (e.g. Stripe Elements)
   before using this in production.
   ========================================================================== */

/* ---------- Product catalogue ---------- */
const PRODUCTS = [
  {
    id: "cu-ghk-serum",
    name: "Copper Tripeptide Renewal Serum",
    tag: "Cu-GHK · 2% complex",
    desc: "A carrier-peptide serum built around copper tripeptide-1, dosed to support the skin's own repair signaling.",
    price: 68,
    glass: ["#F1D28C", "#8C6D2E"],
    bottle: "dropper"
  },
  {
    id: "matrixyl-cream",
    name: "Matrixyl Firming Complex",
    tag: "Palmitoyl pentapeptide-4 · 3%",
    desc: "A night cream formulated around a stabilized penta-peptide, designed to support visible firmness over time.",
    price: 74,
    glass: ["#F3ECD9", "#B79A6B"],
    bottle: "jar"
  },
  {
    id: "snap8-fluid",
    name: "Snap-8 Smoothing Fluid",
    tag: "Acetyl octapeptide-3 · 10%",
    desc: "A lightweight fluid modeled on neurotransmitter-inhibiting peptides, aimed at the look of expression lines.",
    price: 59,
    glass: ["#D6DFC9", "#6B7F63"],
    bottle: "dropper"
  },
  {
    id: "barrier-repair",
    name: "Ceramide-Peptide Barrier Repair",
    tag: "Palmitoyl tripeptide-1 · fragrance-free",
    desc: "A carrier-oil-based repair balm combining ceramides with a signal peptide, for compromised or reactive barriers.",
    price: 52,
    glass: ["#F6EEDD", "#D8C39B"],
    bottle: "jar"
  },
  {
    id: "eye-complex",
    name: "Hexapeptide Eye Complex",
    tag: "Hexapeptide-11 · ophthalmologist tested",
    desc: "A concentrated eye-area formula pairing hexapeptide-11 with caffeine, for the thinner skin around the eyes.",
    price: 64,
    glass: ["#E4DAEA", "#8F79A8"],
    bottle: "small-dropper"
  },
  {
    id: "starter-set",
    name: "Formulation Starter Set",
    tag: "3 travel-size serums",
    desc: "A curated trio of our best-selling peptide serums in travel sizes, with the full concentration data included.",
    price: 89,
    glass: ["#F1E4C4", "#C2A667"],
    bottle: "trio"
  }
];

/* ---------- Illustration builder: single bottle, minimal marble line ---------- */
function buildIllustration(product){
  const id = product.id;
  const [top, bottom] = product.glass;

  const defs = `
    <linearGradient id="glass-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${top}"/>
      <stop offset="1" stop-color="${bottom}"/>
    </linearGradient>
    <linearGradient id="capGold-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#EFD79B"/>
      <stop offset="1" stop-color="#A9832F"/>
    </linearGradient>
    <radialGradient id="shadow-${id}" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="rgba(28,35,31,0.14)"/>
      <stop offset="1" stop-color="rgba(28,35,31,0)"/>
    </radialGradient>
  `;

  const ledge = `
    <line x1="18" y1="140" x2="202" y2="140" stroke="#D8CDB6" stroke-width="1"/>
    <ellipse cx="110" cy="141" rx="42" ry="5" fill="url(#shadow-${id})"/>
  `;

  let bottleMarkup = "";
  if (product.bottle === "dropper"){
    bottleMarkup = `
      <g transform="translate(80,30)">
        <rect x="0" y="30" width="40" height="82" rx="5" fill="url(#glass-${id})"/>
        <rect x="6" y="36" width="4" height="68" fill="#fff" opacity="0.16"/>
        <path d="M8 0 L32 0 L27 30 L13 30 Z" fill="url(#capGold-${id})"/>
        <rect x="6" y="-7" width="28" height="8" rx="2" fill="url(#capGold-${id})"/>
      </g>`;
  } else if (product.bottle === "small-dropper"){
    bottleMarkup = `
      <g transform="translate(88,48)">
        <rect x="0" y="20" width="30" height="62" rx="5" fill="url(#glass-${id})"/>
        <rect x="4" y="25" width="4" height="50" fill="#fff" opacity="0.16"/>
        <path d="M6 0 L24 0 L20 20 L10 20 Z" fill="url(#capGold-${id})"/>
        <rect x="4" y="-6" width="22" height="7" rx="2" fill="url(#capGold-${id})"/>
      </g>`;
  } else if (product.bottle === "jar"){
    bottleMarkup = `
      <g transform="translate(62,50)">
        <rect x="0" y="18" width="64" height="52" rx="8" fill="url(#glass-${id})"/>
        <rect x="0" y="0" width="64" height="20" rx="6" fill="url(#capGold-${id})"/>
        <rect x="8" y="28" width="10" height="30" rx="4" fill="#fff" opacity="0.3"/>
      </g>`;
  } else if (product.bottle === "trio"){
    bottleMarkup = `
      <g transform="translate(48,44)">
        <rect x="0" y="34" width="20" height="48" rx="4" fill="url(#glass-${id})" opacity="0.75"/>
        <rect x="-2" y="24" width="24" height="12" rx="3" fill="url(#capGold-${id})" opacity="0.85"/>
        <rect x="32" y="0" width="24" height="82" rx="5" fill="url(#glass-${id})"/>
        <rect x="29" y="-10" width="30" height="12" rx="3" fill="url(#capGold-${id})"/>
        <rect x="66" y="34" width="20" height="48" rx="4" fill="url(#glass-${id})" opacity="0.75"/>
        <rect x="64" y="24" width="24" height="12" rx="3" fill="url(#capGold-${id})" opacity="0.85"/>
      </g>`;
  }

  return `
    <svg viewBox="0 0 220 150" class="product-illustration" preserveAspectRatio="xMidYMax meet">
      <defs>${defs}</defs>
      ${ledge}
      ${bottleMarkup}
    </svg>
  `;
}

/* ---------- Cart state (in-memory only) ---------- */
let cart = []; // [{id, qty}]

const fmt = (n) => `$${n.toFixed(2)}`;

function findProduct(id){ return PRODUCTS.find(p => p.id === id); }

/* ---------- Render products ---------- */
function renderProducts(){
  const grid = document.getElementById("productGrid");
  grid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card">
      <div class="product-card-inner">
        <div class="product-visual">
          ${buildIllustration(p)}
        </div>
        <p class="product-tag">${p.tag}</p>
        <h3>${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <span class="product-price">${fmt(p.price)}</span>
          <button class="add-to-cart" data-id="${p.id}">Add to bag</button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.id);
      btn.textContent = "Added ✓";
      btn.classList.add("added");
      setTimeout(() => {
        btn.textContent = "Add to bag";
        btn.classList.remove("added");
      }, 1200);
    });
  });
}

/* ---------- Cart logic ---------- */
function addToCart(id){
  const line = cart.find(l => l.id === id);
  if (line) line.qty += 1;
  else cart.push({ id, qty: 1 });
  renderCart();
  openCart();
}

function changeQty(id, delta){
  const line = cart.find(l => l.id === id);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) cart = cart.filter(l => l.id !== id);
  renderCart();
}

function removeFromCart(id){
  cart = cart.filter(l => l.id !== id);
  renderCart();
}

function cartTotal(){
  return cart.reduce((sum, line) => {
    const p = findProduct(line.id);
    return sum + (p ? p.price * line.qty : 0);
  }, 0);
}

function cartCount(){
  return cart.reduce((sum, line) => sum + line.qty, 0);
}

function renderCart(){
  const itemsEl = document.getElementById("cartItems");
  const emptyEl = document.getElementById("cartEmpty");
  const subtotalEl = document.getElementById("cartSubtotal");
  const countEl = document.getElementById("cartCount");
  const checkoutBtn = document.getElementById("checkoutBtn");

  countEl.textContent = cartCount();

  if (cart.length === 0){
    itemsEl.innerHTML = "";
    itemsEl.appendChild(emptyEl);
    checkoutBtn.disabled = true;
  } else {
    checkoutBtn.disabled = false;
    itemsEl.innerHTML = cart.map(line => {
      const p = findProduct(line.id);
      const [top, bottom] = p.glass;
      return `
        <div class="cart-item">
          <div class="cart-item-visual" style="background:linear-gradient(160deg, ${top}, ${bottom})"></div>
          <div>
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-price">${fmt(p.price)} each</div>
            <div class="cart-item-qty">
              <button class="qty-btn" data-action="dec" data-id="${p.id}" aria-label="Decrease quantity">−</button>
              <span class="mono">${line.qty}</span>
              <button class="qty-btn" data-action="inc" data-id="${p.id}" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button class="cart-item-remove" data-id="${p.id}">Remove</button>
        </div>
      `;
    }).join("");

    itemsEl.querySelectorAll(".qty-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        changeQty(btn.dataset.id, btn.dataset.action === "inc" ? 1 : -1);
      });
    });
    itemsEl.querySelectorAll(".cart-item-remove").forEach(btn => {
      btn.addEventListener("click", () => removeFromCart(btn.dataset.id));
    });
  }

  subtotalEl.textContent = fmt(cartTotal());
}

/* ---------- Cart drawer open/close ---------- */
const cartDrawer = document.getElementById("cartDrawer");
const cartScrim = document.getElementById("cartScrim");

function openCart(){
  cartDrawer.classList.add("open");
  cartScrim.classList.add("active");
}
function closeCart(){
  cartDrawer.classList.remove("open");
  cartScrim.classList.remove("active");
}

document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
cartScrim.addEventListener("click", closeCart);

/* ---------- Checkout modal ---------- */
const checkoutScrim = document.getElementById("checkoutScrim");
const checkoutStep = document.getElementById("checkoutStep");
const checkoutSuccess = document.getElementById("checkoutSuccess");

function openCheckout(){
  if (cart.length === 0) return;
  renderOrderSummary();
  checkoutScrim.classList.add("active");
  closeCart();
}
function closeCheckout(){
  checkoutScrim.classList.remove("active");
}

document.getElementById("checkoutBtn").addEventListener("click", openCheckout);
document.getElementById("checkoutClose").addEventListener("click", closeCheckout);
checkoutScrim.addEventListener("click", (e) => {
  if (e.target === checkoutScrim) closeCheckout();
});

function renderOrderSummary(){
  const summary = document.getElementById("orderSummary");
  const shipping = cart.length ? 6.5 : 0;
  const subtotal = cartTotal();
  const total = subtotal + shipping;

  summary.innerHTML = cart.map(line => {
    const p = findProduct(line.id);
    return `<div class="order-summary-row"><span>${p.name} × ${line.qty}</span><span>${fmt(p.price * line.qty)}</span></div>`;
  }).join("") + `
    <div class="order-summary-row"><span>Shipping</span><span>${fmt(shipping)}</span></div>
    <div class="order-summary-row total"><span>Total</span><span>${fmt(total)}</span></div>
  `;

  document.getElementById("checkoutTotal").textContent = fmt(total);
}

/* Format card number with spaces as the user types (cosmetic only) */
const cardInput = document.getElementById("cardNumberInput");
cardInput.addEventListener("input", () => {
  const digits = cardInput.value.replace(/\D/g, "").slice(0, 16);
  cardInput.value = digits.replace(/(.{4})/g, "$1 ").trim();
});

/* Simulated order placement — no network request, no real payment */
document.getElementById("checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const orderNumber = "AV-" + Math.floor(100000 + Math.random() * 900000);
  document.getElementById("orderNumber").textContent = orderNumber;

  checkoutStep.hidden = true;
  checkoutSuccess.hidden = false;

  cart = [];
  renderCart();
});

document.getElementById("continueShoppingBtn").addEventListener("click", () => {
  closeCheckout();
  setTimeout(() => {
    checkoutStep.hidden = false;
    checkoutSuccess.hidden = true;
    document.getElementById("checkoutForm").reset();
  }, 300);
});

/* ---------- Newsletter (simulated) ---------- */
document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("newsletterMsg").textContent = "You're on the list — thanks for subscribing.";
  e.target.reset();
});

/* ---------- Mobile menu ---------- */
document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.top = "100%";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.background = "#F5F2EC";
  nav.style.padding = "1.2rem 1.5rem";
  nav.style.borderTop = "1px solid #DCD3C2";
  nav.style.gap = "1rem";
});

/* ---------- Init ---------- */
renderProducts();
renderCart();
