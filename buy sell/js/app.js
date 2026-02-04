const products = [
  { name: "iPhone 14", price: "₹45,000", category: "mobile" },
  { name: "Samsung S23", price: "₹38,000", category: "mobile" },
  { name: "Honda City", price: "₹6,50,000", category: "car" },
  { name: "Gaming Laptop", price: "₹72,000", category: "electronics" },
  { name: "Wooden Sofa", price: "₹15,000", category: "furniture" }
];

function signup() {
  localStorage.setItem(
    "user",
    JSON.stringify({ email: email.value, password: password.value })
  );
  window.location.href = "login.html";
}

function login() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (
    user &&
    loginEmail.value === user.email &&
    loginPassword.value === user.password
  ) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

function logout() {
  window.location.href = "login.html";
}

function render(list) {
  const container = document.getElementById("products");
  if (!container) return;
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="https://via.placeholder.com/300x200">
        <div class="product-info">
          <h4>${p.name}</h4>
          <p class="price">${p.price}</p>
        </div>
      </div>`;
  });
}

function filterProducts(cat) {
  if (cat === "all") render(products);
  else render(products.filter(p => p.category === cat));
}

render(products);
