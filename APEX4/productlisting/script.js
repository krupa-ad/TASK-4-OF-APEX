const products = [
  { name: "Smartphone", category: "electronics", price: 1200, rating: 4.5 },
  { name: "T-Shirt", category: "clothing", price: 400, rating: 4.0 },
  { name: "Laptop", category: "electronics", price: 2500, rating: 4.8 },
  { name: "Novel", category: "books", price: 300, rating: 4.2 },
  { name: "Headphones", category: "electronics", price: 800, rating: 3.9 },
  { name: "Jeans", category: "clothing", price: 900, rating: 4.3 },
  { name: "Textbook", category: "books", price: 1500, rating: 4.6 }
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortOption = document.getElementById("sortOption");

function renderProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: ₹${product.price}</p>
      <p>Rating: ⭐ ${product.rating}</p>
    `;
    productList.appendChild(card);
  });
}

function filterAndSort() {
  let filtered = [...products];

  // Filter by category
  const category = categoryFilter.value;
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Filter by price
  const price = priceFilter.value;
  if (price === "0-500") {
    filtered = filtered.filter(p => p.price <= 500);
  } else if (price === "500-1000") {
    filtered = filtered.filter(p => p.price > 500 && p.price <= 1000);
  } else if (price === "1000+") {
    filtered = filtered.filter(p => p.price > 1000);
  }

  // Sort by rating
  const sort = sortOption.value;
  if (sort === "high") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sort === "low") {
    filtered.sort((a, b) => a.rating - b.rating);
  }

  renderProducts(filtered);
}

// Event listeners
categoryFilter.addEventListener("change", filterAndSort);
priceFilter.addEventListener("change", filterAndSort);
sortOption.addEventListener("change", filterAndSort);

// Initial render
renderProducts(products);
