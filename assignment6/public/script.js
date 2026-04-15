// ─── Cart State ──────────────────────────────────────────────
let cart = [];

// ─── Fetch & Render Products from Backend ────────────────────
async function loadProducts() {
  try {
    const res      = await fetch('/api/products');
    const products = await res.json();
    renderProducts(products);
  } catch (err) {
    console.error('Could not load products:', err);
    document.getElementById('product-list').innerHTML =
      '<p class="text-center text-danger">Failed to load products. Is the server running?</p>';
  }
}

function renderProducts(products) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';

  products.forEach(product => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';

    col.innerHTML = `
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.name}" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">$${product.price.toFixed(2)}</p>
          <button
            class="btn btn-cart mt-auto"
            onclick='addToCart(${JSON.stringify(product)})'>
            Add to Cart
          </button>
        </div>
      </div>`;

    container.appendChild(col);
  });
}

// ─── Cart Logic ───────────────────────────────────────────────
function addToCart(product) {
  const existing = cart.find(item => item._id === product._id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
}

function updateCartUI() {
  // Update badge
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').textContent = totalItems;

  // Render items
  const cartItemsEl = document.getElementById('cart-items');
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="text-muted">Your cart is empty.</p>';
  } else {
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="d-flex justify-content-between align-items-center mb-2">
        <span>${item.name} × ${item.quantity}</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
      </div>`).join('');
  }

  // Update total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

// ─── Checkout ────────────────────────────────────────────────
async function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const orderPayload = {
    items: cart.map(item => ({
      name:     item.name,
      price:    item.price,
      quantity: item.quantity
    })),
    total: parseFloat(total.toFixed(2))
  };

  try {
    const res  = await fetch('/api/checkout', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(orderPayload)
    });
    const data = await res.json();

    if (res.ok) {
      alert('🎉 Order placed successfully! Thank you for shopping.');
      cart = [];
      updateCartUI();

      // Close the cart modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
      if (modal) modal.hide();
    } else {
      alert('Checkout failed: ' + data.error);
    }
  } catch (err) {
    console.error('Checkout error:', err);
    alert('Something went wrong. Please try again.');
  }
}

// ─── Init ─────────────────────────────────────────────────────
loadProducts();
