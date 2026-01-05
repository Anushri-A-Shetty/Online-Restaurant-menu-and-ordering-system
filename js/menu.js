import { dishes } from "./data.js";
import { addToCart, renderCart } from "./cart.js";

window.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu");
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");


  function displayDishes(filteredDishes) {
    menuContainer.innerHTML = "";

    if (filteredDishes.length === 0) {
      menuContainer.textContent = "No dishes match your search.";
      return;
    }

    filteredDishes.forEach(dish => {
      const card = document.createElement("div");
      card.className = "dish-card";

      card.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}" class="dish-image" />
        <h3>${dish.name}</h3>

        <p><strong>Rs.${dish.price.toFixed(0)}</strong></p>
        <button id="yy">Add to Cart</button>
      `;

      card.querySelector("button").addEventListener("click", () => {
        addToCart(dish);
      });

      menuContainer.appendChild(card);
    });
  }


  displayDishes(dishes);
  renderCart();

  
    function applyFilters() {
    const query = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = dishes.filter(dish => {
      const matchesSearch = dish.name.toLowerCase().includes(query) ||
                            dish.description.toLowerCase().includes(query);
      const matchesCategory = selectedCategory === "All" || dish.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    displayDishes(filtered);
  }

  searchInput.addEventListener("input", applyFilters);
  categoryFilter.addEventListener("change", applyFilters);

});





