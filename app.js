// MORROW STUDIO — theme switcher: remembers the visitor's choice on this device (localStorage).
(function setupTheme(){
  const KEY = 'morrowTheme', root = document.documentElement;
  const read = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  const write = v => { try { localStorage.setItem(KEY, v); } catch (e) {} };
  function sync(){
    const dark = root.dataset.theme === 'dark';
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      const icon = button.querySelector('span'); if (icon) icon.textContent = dark ? '☀' : '☾'; else button.textContent = dark ? '☀' : '☾';
      button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    });
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#171620' : '#fff8f0');
  }
  if (read() === 'dark') root.dataset.theme = 'dark';
  document.addEventListener('click', event => {
    if (!event.target.closest('[data-theme-toggle]')) return;
    const dark = root.dataset.theme !== 'dark';
    root.dataset.theme = dark ? 'dark' : 'light';
    write(dark ? 'dark' : 'light'); sync();
  });
  window.addEventListener('storage', e => { if (e.key === KEY) { root.dataset.theme = e.newValue === 'dark' ? 'dark' : 'light'; sync(); } });
  sync();
})();

const PRODUCTS = [{"id": "arc-lamp", "name": "Arc Table Lamp", "category": "Home", "price": 89.0, "tag": "Bestseller", "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=88", "description": "A sculptural table lamp that brings a warm, focused glow to reading corners and bedside tables."}, {"id": "form-vase", "name": "Form Ceramic Vase", "category": "Home", "price": 42.0, "tag": "New arrival", "image": "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1000&q=88", "description": "A softly sculpted ceramic vase designed to look beautiful with or without fresh stems."}, {"id": "curve-chair", "name": "Curve Lounge Chair", "category": "Home", "price": 189.0, "tag": "Studio pick", "image": "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=88", "description": "A comfortable statement chair with a clean silhouette and a timeless feel."}, {"id": "soft-throw", "name": "Soft Knit Throw", "category": "Home", "price": 58.0, "tag": "Bestseller", "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=88", "description": "A cosy textured throw for quiet evenings, reading nooks and relaxed spaces."}, {"id": "stone-tray", "name": "Stone Catchall Tray", "category": "Home", "price": 35.0, "tag": "Everyday essential", "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=88", "description": "A practical tray for keeping small daily essentials beautifully organised."}, {"id": "halo-mirror", "name": "Halo Wall Mirror", "category": "Home", "price": 115.0, "tag": "New arrival", "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=88", "description": "A simple rounded mirror that adds light and a considered finishing touch."}, {"id": "daily-bottle", "name": "Daily Bottle", "category": "Accessories", "price": 28.0, "tag": "Everyday essential", "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=88", "description": "A reusable bottle made for commutes, study days and everyday hydration."}, {"id": "soft-tote", "name": "Everyday Canvas Tote", "category": "Bags", "price": 32.0, "tag": "Popular", "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=88", "description": "A roomy everyday tote with an easy shape for carrying the things you need."}, {"id": "weekender", "name": "City Weekender Bag", "category": "Bags", "price": 96.0, "tag": "Travel edit", "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=88", "description": "A versatile carryall for short trips, busy days and spontaneous plans."}, {"id": "mini-crossbody", "name": "Mini Crossbody Bag", "category": "Bags", "price": 64.0, "tag": "New arrival", "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=88", "description": "A compact crossbody that keeps the essentials close without feeling bulky."}, {"id": "leather-wallet", "name": "Everyday Wallet", "category": "Accessories", "price": 39.0, "tag": "Classic", "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=88", "description": "A neat wallet with a practical layout for cards and everyday essentials."}, {"id": "sunny-shades", "name": "Sculpted Sunglasses", "category": "Accessories", "price": 45.0, "tag": "Summer edit", "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=88", "description": "Modern sunglasses with a confident shape for bright days outdoors."}, {"id": "timepiece-one", "name": "Minimal Wristwatch", "category": "Watches", "price": 129.0, "tag": "Studio pick", "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=88", "description": "A clean everyday timepiece with a simple dial and versatile styling."}, {"id": "timepiece-two", "name": "Classic Steel Watch", "category": "Watches", "price": 159.0, "tag": "Bestseller", "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=88", "description": "A polished steel watch that moves easily from everyday wear to special occasions."}, {"id": "timepiece-three", "name": "Heritage Leather Watch", "category": "Watches", "price": 142.0, "tag": "New arrival", "image": "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=1000&q=88", "description": "A timeless watch pairing a refined face with a warm leather-look strap."}, {"id": "timepiece-four", "name": "Everyday Sport Watch", "category": "Watches", "price": 99.0, "tag": "Daily favourite", "image": "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=1000&q=88", "description": "A versatile sport-inspired watch designed for a busy everyday routine."}, {"id": "studio-notes", "name": "Studio Notebook Set", "category": "Stationery", "price": 24.0, "tag": "Staff pick", "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=1000&q=88", "description": "A set of notebooks for plans, sketches, lists and ideas worth keeping."}, {"id": "daily-planner", "name": "Daily Planner", "category": "Stationery", "price": 21.0, "tag": "Popular", "image": "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=88", "description": "A simple undated planner to make everyday planning feel more manageable."}, {"id": "pen-set", "name": "Essential Pen Set", "category": "Stationery", "price": 16.0, "tag": "Small detail", "image": "https://images.unsplash.com/photo-1782829522362-1375968d0e6a?auto=format&fit=crop&w=1000&q=88", "description": "A considered set of writing tools for notes, lists and creative work."}, {"id": "desk-organiser", "name": "Desk Organiser", "category": "Stationery", "price": 31.0, "tag": "Desk edit", "image": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1000&q=88", "description": "A tidy home for the little things that make a workspace work."}, {"id": "wireless-speaker", "name": "Portable Speaker", "category": "Tech", "price": 79.0, "tag": "New arrival", "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1000&q=88", "description": "A compact speaker for playlists, podcasts and sound around the home."}, {"id": "headphones", "name": "Studio Headphones", "category": "Tech", "price": 110.0, "tag": "Popular", "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=88", "description": "Comfortable over-ear headphones for focused listening and everyday audio."}, {"id": "desk-light", "name": "LED Desk Light", "category": "Tech", "price": 54.0, "tag": "Workday essential", "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=88", "description": "A focused desk light with a minimal profile for late study and work sessions."}, {"id": "phone-stand", "name": "Aluminium Phone Stand", "category": "Tech", "price": 19.0, "tag": "Useful detail", "image": "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1000&q=88", "description": "A clean, sturdy stand that keeps your phone in view while you work."}];
const money = n => '$' + Number(n).toFixed(2);
const byId = id => PRODUCTS.find(p => p.id === id);
const PAGE_SIZE = 8;
let activeCategory = 'All', page = 1, searchTerm = '', sortMode = 'featured';
let cart = readCart();
let lastCartTrigger = null, lastCheckoutTrigger = null;

/* Storage helpers (never throw if storage is blocked) */
function store(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
function readCart() { try { const c = JSON.parse(localStorage.getItem('morrowCart') || '[]'); return Array.isArray(c) ? c : []; } catch { return []; } }
function saveCart() { store('morrowCart', JSON.stringify(cart)); renderCart(); }

/* Image helper: same Unsplash photo, requested at a size that fits its slot */
function imgUrl(url, w, q = 80) { return url.replace(/([?&])w=\d+/, '$1w=' + w).replace(/([?&])q=\d+/, '$1q=' + q); }
function imgSet(url, widths) { return widths.map(w => `${imgUrl(url, w)} ${w}w`).join(', '); }
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* Toast */
function showToast(message) { const toast = document.getElementById('toast'); if (!toast) return; toast.textContent = message; toast.classList.add('show'); clearTimeout(window.morrowToastTimer); window.morrowToastTimer = setTimeout(() => toast.classList.remove('show'), 2200); }

/* Cart drawer: hidden state uses `inert` so nothing inside can receive focus */
const pageRegions = () => document.querySelectorAll('body > header, body > main, body > footer, body > .skip-link');
function setInert(el, on) { if (!el) return; if (on) el.setAttribute('inert', ''); else el.removeAttribute('inert'); }
function openCart() {
  const panel = document.getElementById('cart-panel'); if (!panel) return;
  lastCartTrigger = document.activeElement;
  document.getElementById('cart-shade')?.classList.add('show');
  setInert(panel, false); panel.classList.add('show');
  pageRegions().forEach(el => setInert(el, true));
  document.body.classList.add('locked');
  panel.querySelector('[data-close-cart]')?.focus({ preventScroll: true });
}
function closeCart() {
  const panel = document.getElementById('cart-panel'); if (!panel) return;
  const wasOpen = panel.classList.contains('show');
  document.getElementById('cart-shade')?.classList.remove('show');
  panel.classList.remove('show'); setInert(panel, true);
  pageRegions().forEach(el => setInert(el, false));
  document.body.classList.remove('locked');
  if (wasOpen) { const t = lastCartTrigger && document.contains(lastCartTrigger) ? lastCartTrigger : document.querySelector('[data-open-cart]'); t?.focus({ preventScroll: true }); }
}
function openCheckout() {
  const layer = document.getElementById('checkout-layer'); if (!layer) return;
  lastCheckoutTrigger = document.activeElement;
  document.getElementById('checkout-summary').innerHTML = cart.map(x => { const p = byId(x.id); return p ? `<div>${esc(p.name)} × ${x.qty} — ${money(p.price * x.qty)}</div>` : ''; }).join('') + `<hr><b>Total: ${money(cartTotal())}</b>`;
  setInert(layer, false); layer.classList.add('show');
  setInert(document.getElementById('cart-panel'), true);
  layer.querySelector('[data-close-checkout]')?.focus({ preventScroll: true });
}
function closeCheckout(restoreFocus = true) {
  const layer = document.getElementById('checkout-layer'); if (!layer || !layer.classList.contains('show')) return;
  layer.classList.remove('show'); setInert(layer, true);
  const panel = document.getElementById('cart-panel');
  if (panel?.classList.contains('show')) { setInert(panel, false); if (restoreFocus) (lastCheckoutTrigger && document.contains(lastCheckoutTrigger) ? lastCheckoutTrigger : panel.querySelector('[data-close-cart]'))?.focus({ preventScroll: true }); }
}
const cartTotal = () => cart.reduce((s, x) => s + (byId(x.id)?.price || 0) * x.qty, 0);

function addToCart(id) { const item = cart.find(x => x.id === id); if (item) item.qty++; else cart.push({ id, qty: 1 }); saveCart(); openCart(); showToast('Added to your bag'); }
function changeQty(id, delta) { const item = cart.find(x => x.id === id); if (!item) return; item.qty += delta; if (item.qty < 1) cart = cart.filter(x => x.id !== id); saveCart(); restoreCartFocus(id, delta); }
function removeItem(id) { cart = cart.filter(x => x.id !== id); saveCart(); restoreCartFocus(id, 0); }
function restoreCartFocus(id, delta) {
  const panel = document.getElementById('cart-panel'); if (!panel || !panel.classList.contains('show')) return;
  const sel = delta ? `[data-qty="${delta}"][data-id="${id}"]` : `[data-remove="${id}"]`;
  (panel.querySelector(sel) || panel.querySelector('[data-qty]') || panel.querySelector('#checkout-button') || panel.querySelector('[data-close-cart]'))?.focus({ preventScroll: true });
}
function renderCart() {
  document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = cart.reduce((s, x) => s + x.qty, 0));
  const box = document.getElementById('cart-items'); if (!box) return;
  if (!cart.length) { box.innerHTML = '<div class="empty">Your bag is ready for a little joy.<br><br><a href="index.html#shop">Explore the collection ↗</a></div>'; }
  else {
    box.innerHTML = cart.map(x => { const p = byId(x.id); return p ? `<div class="cart-row"><img src="${imgUrl(p.image, 240, 75)}" width="76" height="82" alt="${esc(p.name)}" loading="lazy" decoding="async"><div><h3>${esc(p.name)}</h3><p>${money(p.price)}</p><div class="qty"><button type="button" data-qty="-1" data-id="${p.id}" aria-label="Decrease quantity of ${esc(p.name)}">−</button><span aria-label="Quantity ${x.qty}">${x.qty}</span><button type="button" data-qty="1" data-id="${p.id}" aria-label="Increase quantity of ${esc(p.name)}">+</button></div><button type="button" class="remove" data-remove="${p.id}">Remove<span class="visually-hidden"> ${esc(p.name)} from bag</span></button></div><b>${money(p.price * x.qty)}</b></div>` : ''; }).join('');
  }
  const t = document.getElementById('cart-total'); if (t) t.textContent = money(cartTotal());
}

/* Product cards */
const CARD_WIDTHS = [400, 640, 900], CARD_SIZES = '(max-width:760px) 50vw, (max-width:1000px) 33vw, 25vw';
function productCard(p) { return `<article class="product-card"><a href="product-details.html?id=${encodeURIComponent(p.id)}" aria-label="View ${esc(p.name)} details"><div class="product-image"><span class="product-tag">${esc(p.tag)}</span><img src="${imgUrl(p.image, 640)}" srcset="${imgSet(p.image, CARD_WIDTHS)}" sizes="${CARD_SIZES}" width="640" height="640" alt="${esc(p.name)}, ${esc(p.category.toLowerCase())} product" loading="lazy" decoding="async"><span class="quick-view" aria-hidden="true">View details ↗</span></div><div class="product-meta"><h3>${esc(p.name)}</h3><p>${money(p.price)}</p></div></a><p class="product-sub">${esc(p.category)}</p><button type="button" class="add-small" data-add="${p.id}">Add to bag +<span class="visually-hidden"> — ${esc(p.name)}</span></button></article>`; }

function renderShop(keepFocus) {
  const grid = document.getElementById('product-grid'); if (!grid) return;
  const focusSel = keepFocus && document.activeElement ? (document.activeElement.dataset.category !== undefined ? `[data-category="${document.activeElement.dataset.category}"]` : document.activeElement.dataset.page !== undefined ? `[data-page="${document.activeElement.dataset.page}"]` : '') : '';
  const cats = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  document.getElementById('category-list').innerHTML = cats.map(c => `<button type="button" class="category-chip ${activeCategory === c ? 'active' : ''}" data-category="${c}" aria-pressed="${activeCategory === c}">${c === 'All' ? 'All products' : c}</button>`).join('');
  let list = PRODUCTS.filter(p => (activeCategory === 'All' || p.category === activeCategory) && (`${p.name} ${p.category} ${p.description}`.toLowerCase().includes(searchTerm)));
  if (sortMode === 'low') list.sort((a, b) => a.price - b.price);
  if (sortMode === 'high') list.sort((a, b) => b.price - a.price);
  if (sortMode === 'az') list.sort((a, b) => a.name.localeCompare(b.name));
  const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE)); page = Math.min(page, pages);
  grid.innerHTML = list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map(productCard).join('') || '<p class="empty">No products found. Try another search.</p>';
  document.getElementById('results-count').textContent = `Showing ${list.length ? (page - 1) * PAGE_SIZE + 1 : 0}–${Math.min(page * PAGE_SIZE, list.length)} of ${list.length} finds`;
  document.getElementById('pagination').innerHTML = pages > 1 ? `<button type="button" class="page-button" data-page="${page - 1}" aria-label="Previous page" ${page === 1 ? 'disabled' : ''}><span aria-hidden="true">←</span></button>${Array.from({ length: pages }, (_, i) => `<button type="button" class="page-button ${page === i + 1 ? 'active' : ''}" data-page="${i + 1}" aria-label="Page ${i + 1}" ${page === i + 1 ? 'aria-current="page"' : ''}>${i + 1}</button>`).join('')}<button type="button" class="page-button" data-page="${page + 1}" aria-label="Next page" ${page === pages ? 'disabled' : ''}><span aria-hidden="true">→</span></button>` : '';
  if (focusSel) { const el = document.querySelector(focusSel); if (el && !el.disabled) el.focus({ preventScroll: true }); }
}

/* Head helpers: canonical + social URLs (only on a real public host, never localhost/file) */
function setMeta(attr, key, value) { let el = document.head.querySelector(`meta[${attr}="${key}"]`); if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); } el.setAttribute('content', value); }
function isPublicHost() { return /^https?:$/.test(location.protocol) && !/^(localhost|127\.|0\.0\.0\.0|\[::1\])/.test(location.hostname) && !/\.local$/.test(location.hostname); }
function setCanonical() {
  if (!isPublicHost()) return;
  const clean = location.origin + location.pathname.replace(/\/index\.html$/, '/') + (document.getElementById('product-detail-page') ? location.search.match(/[?&]id=[^&]+/)?.[0].replace(/^&/, '?') || '' : '');
  let link = document.head.querySelector('link[rel="canonical"]'); if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
  link.href = clean; setMeta('property', 'og:url', clean);
}

function renderDetail() {
  const host = document.getElementById('product-detail-page'); if (!host) return;
  const id = new URLSearchParams(location.search).get('id'); const p = byId(id) || PRODUCTS[0];
  const title = `${p.name} | MORROW STUDIO`, desc = `${p.name}: ${p.description} Explore ${p.category.toLowerCase()} at MORROW STUDIO.`;
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', desc);
  setMeta('property', 'og:title', title); setMeta('property', 'og:description', desc); setMeta('property', 'og:type', 'product');
  setMeta('property', 'og:image', imgUrl(p.image, 1200)); setMeta('property', 'og:image:alt', `${p.name}, product photograph`);
  setMeta('name', 'twitter:title', title); setMeta('name', 'twitter:description', desc); setMeta('name', 'twitter:image', imgUrl(p.image, 1200)); setMeta('name', 'twitter:image:alt', `${p.name}, product photograph`);
  document.getElementById('crumb-name').textContent = p.name;
  let schema = document.getElementById('product-jsonld'); if (!schema) { schema = document.createElement('script'); schema.type = 'application/ld+json'; schema.id = 'product-jsonld'; document.head.appendChild(schema); }
  const base = isPublicHost() ? location.origin + location.pathname.replace(/[^/]*$/, '') : '';
  const graph = [{ '@type': 'Product', name: p.name, description: p.description, image: p.image, category: p.category, brand: { '@type': 'Brand', name: 'MORROW STUDIO' }, offers: { '@type': 'Offer', price: p.price.toFixed(2), priceCurrency: 'USD' } }];
  if (base) graph.push({ '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: base + 'index.html' }, { '@type': 'ListItem', position: 2, name: 'Shop', item: base + 'index.html#shop' }, { '@type': 'ListItem', position: 3, name: p.name }] });
  schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  host.innerHTML = `<div class="product-detail"><img src="${imgUrl(p.image, 900)}" srcset="${imgSet(p.image, [640, 900, 1200])}" sizes="(max-width:760px) 100vw, 52vw" width="1000" height="1000" alt="${esc(p.name)}, product photograph" fetchpriority="high" decoding="async"><div class="detail-copy"><span class="detail-category">${esc(p.category)} / THE MORROW EDIT</span><h1>${esc(p.name)}</h1><div class="detail-price">${money(p.price)}</div><p class="detail-description">${esc(p.description)}</p><p class="detail-description">Selected for its thoughtful design and everyday usefulness, this piece is ready to become part of your routine.</p><div class="detail-actions"><button type="button" class="button button-primary" data-add="${p.id}">Add to bag +<span class="visually-hidden"> — ${esc(p.name)}</span></button><a class="button button-dark" href="index.html#shop">Keep exploring <span aria-hidden="true">↗</span></a></div></div></div>`;
  document.getElementById('related-products').innerHTML = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4).map(productCard).join('');
}

/* Forms */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validName(v) { return /^[A-Za-z][A-Za-z .'-]{1,48}$/.test(v.trim()); }
function validPassword(v) { return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,64}$/.test(v); }
function feedback(el, msg, ok, field) { el.textContent = msg; el.classList.toggle('is-error', !ok); if (!ok && field) { field.setAttribute('aria-invalid', 'true'); field.focus(); } }
function clearInvalid(form) { form.querySelectorAll('[aria-invalid]').forEach(f => f.removeAttribute('aria-invalid')); }
function accountName() { try { const u = JSON.parse(localStorage.getItem('morrowUser') || 'null'); return u?.name || ''; } catch { return ''; } }
function updateAccountLinks() { const name = accountName(); document.querySelectorAll('.main-nav a[href="login.html"]').forEach(a => { if (name) { a.textContent = name.split(' ')[0]; a.href = 'login.html'; } }); }
function handleSignup() {
  const form = document.getElementById('signup-form'); if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault(); clearInvalid(form);
    const $ = id => document.getElementById(id), fb = $('signup-feedback');
    const name = $('signup-name').value.trim(), email = $('signup-email').value.trim(), phone = $('signup-phone').value.trim(), pass = $('signup-password').value, confirm = $('signup-confirm').value;
    if (!validName(name)) return feedback(fb, 'Please enter a valid name using letters and normal punctuation.', false, $('signup-name'));
    if (!EMAIL_RE.test(email)) return feedback(fb, 'Please enter a valid email address.', false, $('signup-email'));
    if (phone && !/^\+?[0-9 ()-]{7,18}$/.test(phone)) return feedback(fb, 'Please enter a valid phone number.', false, $('signup-phone'));
    if (!validPassword(pass)) return feedback(fb, 'Use 8–64 characters with uppercase, lowercase, a number and a symbol.', false, $('signup-password'));
    if (pass !== confirm) return feedback(fb, 'Your passwords do not match.', false, $('signup-confirm'));
    store('morrowUser', JSON.stringify({ name, email, phone }));
    feedback(fb, 'Your account is ready. Welcome to MORROW STUDIO!', true);
    setTimeout(() => location.href = 'index.html', 900);
  });
}
function handleLogin() {
  const form = document.getElementById('login-form'); if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault(); clearInvalid(form);
    const email = document.getElementById('login-email').value.trim(), pass = document.getElementById('login-password').value, fb = document.getElementById('login-feedback');
    let user; try { user = JSON.parse(localStorage.getItem('morrowUser') || 'null'); } catch { user = null; }
    if (!EMAIL_RE.test(email)) return feedback(fb, 'Please enter a valid email and password.', false, document.getElementById('login-email'));
    if (!validPassword(pass)) return feedback(fb, 'Please enter a valid email and password.', false, document.getElementById('login-password'));
    if (!user || user.email.toLowerCase() !== email.toLowerCase()) return feedback(fb, 'No saved account was found for this email. Please sign up first.', false, document.getElementById('login-email'));
    feedback(fb, `Welcome back, ${user.name}!`, true);
    setTimeout(() => location.href = 'index.html', 800);
  });
}
function handleContact() {
  const form = document.getElementById('contact-form'); if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault(); clearInvalid(form);
    const $ = id => document.getElementById(id), fb = $('contact-feedback');
    const name = $('contact-name').value.trim(), email = $('contact-email').value.trim(), msg = $('contact-message').value.trim();
    if (!validName(name)) return feedback(fb, 'Please check your name, email and message.', false, $('contact-name'));
    if (!EMAIL_RE.test(email)) return feedback(fb, 'Please check your name, email and message.', false, $('contact-email'));
    if (msg.length < 10) return feedback(fb, 'Please check your name, email and message.', false, $('contact-message'));
    feedback(fb, 'Thanks! Your message has been received.', true); form.reset();
  });
}

/* Mobile menu */
function setupMenu() {
  const toggle = document.querySelector('.menu-toggle'), nav = document.getElementById('main-nav'); if (!toggle || !nav) return;
  const set = open => { nav.classList.toggle('open', open); toggle.setAttribute('aria-expanded', open); toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
  toggle.addEventListener('click', () => set(!nav.classList.contains('open')));
  nav.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { set(false); toggle.focus(); } });
}

/* Global events */
document.addEventListener('click', e => {
  if (e.target.closest('[data-open-cart]')) { openCart(); return; }
  if (e.target.closest('[data-close-cart]') || e.target.id === 'cart-shade') { closeCart(); return; }
  if (e.target.closest('#cart-panel a')) { closeCart(); return; }
  const cat = e.target.closest('[data-category]'); if (cat) { activeCategory = cat.dataset.category; page = 1; renderShop(true); return; }
  const pg = e.target.closest('[data-page]'); if (pg && !pg.disabled) { page = Number(pg.dataset.page); renderShop(true); document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }); return; }
  const add = e.target.closest('[data-add]'); if (add) { addToCart(add.dataset.add); return; }
  const qty = e.target.closest('[data-qty]'); if (qty) { changeQty(qty.dataset.id, Number(qty.dataset.qty)); return; }
  const rem = e.target.closest('[data-remove]'); if (rem) { removeItem(rem.dataset.remove); return; }
  if (e.target.closest('[data-close-checkout]') || e.target.id === 'checkout-layer') { closeCheckout(); return; }
  if (e.target.closest('#checkout-button')) { if (!cart.length) { showToast('Your bag is empty'); return; } openCheckout(); return; }
  if (e.target.closest('#place-order')) { cart = []; saveCart(); closeCheckout(false); closeCart(); showToast('Thank you! Your order is confirmed.'); }
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (document.getElementById('checkout-layer')?.classList.contains('show')) closeCheckout();
  else if (document.getElementById('cart-panel')?.classList.contains('show')) closeCart();
});
document.addEventListener('input', e => { if (e.target.id === 'product-search') { searchTerm = e.target.value.toLowerCase().trim(); page = 1; renderShop(); } });
document.addEventListener('change', e => { if (e.target.id === 'sort-products') { sortMode = e.target.value; page = 1; renderShop(); } });

document.querySelectorAll('.year').forEach(x => x.textContent = new Date().getFullYear());
setCanonical(); renderShop(); renderDetail(); renderCart(); updateAccountLinks(); handleSignup(); handleLogin(); handleContact(); setupMenu();
