const productId = new URLSearchParams(window.location.search).get("id");

if (!productId) {
  console.error("No product id provided");
}

fetch("assets/data/transmission-transformation.json")
  .then(res => res.json())
  .then(data => {
    const product = findProduct(data, productId);
    if (!product) throw new Error("Product not found");
    renderProduct(product);
  })
  .catch(err => console.error(err));

function findProduct(data, id) {
  for (const sub of data.subcategories) {
    for (const product of sub.products) {
      if (product.id === id) return product;
    }
  }
  return null;
}

function renderProduct(product) {
  document.getElementById("title").textContent = product.title;
  document.getElementById("desc").textContent = product.description;

  document.getElementById("bullets").innerHTML =
    product.bullets.map(b => `<li>${b}</li>`).join("");

  document.getElementById("productImage").src = product.image;

  document.getElementById("features").innerHTML =
    product.features.map(f => `
      <div class="feature-block">

        <h3>${f.title}</h3>
        <p>${f.text}</p>
      </div>
    `).join("");

  document.getElementById("specs").innerHTML =
    `<table>` +
    Object.entries(product.specifications)
      .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
      .join("") +
    `</table>`;
}

/* Tabs */
document.querySelectorAll(".tabs button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(t => t.classList.add("hidden"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.remove("hidden");
  };
});
