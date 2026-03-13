let cart = [];
let cartCount = 0;

// Product Data (Dynamic)
const products = [
    {
        id: 1,
        name: "Men Jacket",
        price: 1999,
        image: "https://m.media-amazon.com/images/I/81efct0r2iL._AC_UY1100_.jpg"
    },
    {
        id: 2,
        name: "Women Dress",
        price: 1499,
        image: "https://m.media-amazon.com/images/I/814TU2aLEUL._AC_UY1100_.jpg"
    },
    {
        id: 3,
        name: "Sneakers",
        price: 2999,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 20,
        name: "Classic Leather Boots",
        price: 2799,
        image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Casual Shirt",
        price: 999,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Designer Handbag",
        price: 2499,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "Sunglasses",
        price: 799,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Wrist Watch",
        price: 1599,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        name: "Jeans",
        price: 1299,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        name: "Blue Denim Jeans",
        price: 1299,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 12,
        name: "Casual White T-Shirt",
        price: 499,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 23,
        name: "Black Biker Leather Jacket",
        price: 3499,
        image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 21,
        name: "Black Leather Jacket",
        price: 3499,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 15,
        name: "Women's Handbag",
        price: 1899,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 24,
        name: "Laptop",
        price: 3999,
        image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 25,
        name: "Wireless Headphones",
        price: 2499,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 18,
        name: "Stylish Sunglasses",
        price: 899,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
    }
];

const productList = document.getElementById("product-list");
const cartDisplay = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Display products dynamically
products.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
        <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text text-muted mb-4">₹${product.price}</p>
                <button class="btn btn-cart mt-auto" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
    productList.appendChild(col);
});

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    cartCount++;
    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    cartDisplay.innerText = cartCount;
    renderCart();
}

// Render cart items
function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div>
                    <strong>${item.name}</strong> (x${item.quantity}) - ₹${item.price * item.quantity}
                </div>
                <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
    });
    cartTotal.innerText = total;
}

// Remove from cart
function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cartCount -= cart[itemIndex].quantity;
        cart.splice(itemIndex, 1);
        updateCartDisplay();
    }
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Checkout successful! Total: ₹' + cartTotal.innerText);
    cart = [];
    cartCount = 0;
    updateCartDisplay();
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    modal.hide();
}
