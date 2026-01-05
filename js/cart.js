function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(d => d.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  saveCart(cart);
  renderCart();
}

function renderCart() {
  const cart = getCart();
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");

  if (!cartList || !cartTotal) return;

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const line = document.createElement("div");
    line.textContent = `${item.name} × ${item.quantity}`;
    cartList.appendChild(line);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = `Rs.${total.toFixed(2)}`;
}

export { getCart, saveCart, addToCart, renderCart };

