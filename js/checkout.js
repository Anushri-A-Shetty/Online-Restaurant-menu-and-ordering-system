const form = document.getElementById('checkout-form');
form.onsubmit = function (e) {
  e.preventDefault();

  const name = form.elements['name'].value;
  
  if (!name) {
    alert("Please fill out all fields.");
    return;
  }

  alert(`Thank you for your order!`);
  localStorage.removeItem('cart');
  window.location.href = "index.html";
};
