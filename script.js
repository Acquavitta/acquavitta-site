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
    bg: "linear-gradient(160deg, #E9D8B8, #C9A24B)",
    icon: "bottle"
  },
  {
    id: "matrixyl-cream",
    name: "Matrixyl Firming Complex",
    tag: "Palmitoyl pentapeptide-4 · 3%",
    desc: "A night cream formulated around a stabilized penta-peptide, designed to support visible firmness over time.",
    price: 74,
    bg: "linear-gradient(160deg, #EDE3CE, #B79A6B)",
    icon: "jar"
  },
  {
    id: "snap8-fluid",
    name: "Snap-8 Smoothing Fluid",
    tag: "Acetyl octapeptide-3 · 10%",
    desc: "A lightweight fluid modeled on neurotransmitter-inhibiting peptides, aimed at the look of expression lines.",
    price: 59,
    bg: "linear-gradient(160deg, #E4E7DA, #93A583)",
    icon: "dropper"
  },
  {
    id: "barrier-repair",
    name: "Ceramide-Peptide Barrier Repair",
    tag: "Palmitoyl tripeptide-1 · fragrance-free",
    desc: "A carrier-oil-based repair balm combining ceramides with a signal peptide, for compromised or reactive barriers.",
    price: 52,
    bg: "linear-gradient(160deg, #F1E9DC, #D8C39B)",
    icon: "jar"
  },
  {
    id: "eye-complex",
    name: "Hexapeptide Eye Complex",
    tag: "Hexapeptide-11 · ophthalmologist tested",
    desc: "A concentrated eye-area formula pairing hexapeptide-11 with caffeine, for the thinner skin around the eyes.",
    price: 64,
    bg: "linear-gradient(160deg, #EAE2EE, #A995BE)",
    icon: "dropper"
  },
  {
    id: "starter-set",
    name: "Formulation Starter Set",
    tag: "3 travel-size serums",
    desc: "A curated trio of our best-selling peptide serums in travel sizes, with the full concentration data included.",
    price: 89,
    bg: "linear-gradient(160deg, #EFE6D6, #C2A667)",
    icon: "set"
  }
];

const ICONS = {
  bottle: `<svg viewBox="0 0 40 60" fill="none"><rect x="12" y="16" width="16" height="38" rx="4" fill="#fff" fill-opacity="0.85" stroke="#8C6D2E" stroke-width="1.2"/><rect x="15" y="4" width="10" height="14" rx="2" fill="#fff" fill-opacity="0.7" stroke="#8C6D2E" stroke-width="1.2"/><rect x="13" y="30" width="14" height="18" rx="2" fill="#C9A24B" fill-opacity="0.35"/></svg>`,
  jar: `<svg viewBox="0 0 44 52" fill="none"><rect x="8" y="14" width="28" height="34" rx="6" fill="#fff" fill-opacity="0.85" stroke="#8C6D2E" stroke-width="1.2"/><rect x="10" y="4" width="24" height="12" rx="4" fill="#C9A24B" fill-opacity="0.5" stroke="#8C6D2E" stroke-width="1.2"/></svg>`,
  dropper: `<svg viewBox="0 0 30 60" fill="none"><rect x="9" y="18" width="12" height="34" rx="3" fill="#fff" fill-opacity="0.85" stroke="#8C6D2E" stroke-width="1.2"/><path d="M11 18 L15 2 L19 18 Z" fill="#C9A24B" fill-opacity="0.5" stroke="#8C6D2E" stroke-width="1.2"/><circle cx="15" cy="2" r="2.4" fill="#8C6D2E"/></svg>`,
  set: `<svg viewBox="0 0 60 44" fill="none"><rect x="4" y="12" width="12" height="28" rx="3" fill="#fff" fill-opacity="0.85" stroke="#8C6D2E" stroke-width="1.1"/><rect x="24" y="4" width="12" height="36" rx="3" fill="#fff" fill-opacity="0.9" stroke="#8C6D2E" stroke-width="1.1"/><rect x="44" y="12" width="12" height="28" rx="3" fill="#fff" fill-opacity="0.85" stroke="#8C6D2E" stroke-width="1.1"/></svg>`
};

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
        <div class="product-visual" style="--pv-bg:${p.bg}">
          ${ICONS[p.icon]}
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
      return `
        <div class="cart-item">
          <div class="cart-item-visual" style="--pv-bg:${p.bg}">${ICONS[p.icon]}</div>
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
