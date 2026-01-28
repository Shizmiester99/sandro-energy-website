const productsBtn = document.getElementById("productsBtn");
const menu = document.getElementById("megaMenu");

const mainCatsEl = document.getElementById("mainCats");
const subCatsEl = document.getElementById("subCats");
const productsEl = document.getElementById("products");

let categoryData = null;

/* Toggle menu */
productsBtn.addEventListener("click", e => {
  e.stopPropagation();
  menu.classList.toggle("hidden");

  if (!categoryData) loadTransmission();
});

/* Prevent close when clicking inside */
menu.addEventListener("click", e => e.stopPropagation());

/* Close when clicking outside */
document.addEventListener("click", () => {
  menu.classList.add("hidden");
});

function loadTransmission() {
  fetch("/assets/data/transmission-transformation.json")
    .then(res => res.json())
    .then(data => {
      categoryData = data;
      renderMainCategory(data);
    })
    .catch(err => console.error(err));
}

function renderMainCategory(data) {
  mainCatsEl.innerHTML = `<div class="active">${data.title}</div>`;
  renderSubCategories(data.subcategories);
}

function renderSubCategories(subcategories) {
  subCatsEl.innerHTML = "";
  productsEl.innerHTML = "";

  subcategories.forEach(sub => {
    const el = document.createElement("div");
    el.textContent = sub.title;
    el.className = "mega-item";

    el.onclick = () => renderProducts(sub.products);
    subCatsEl.appendChild(el);
  });
}

function renderProducts(products) {
  productsEl.innerHTML = products
    .map(p => `<a href="/product.html?id=${p.id}">${p.title}</a>`)
    .join("");
}
