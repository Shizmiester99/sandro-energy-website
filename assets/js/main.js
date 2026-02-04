/* =========================
   ELEMENTS
========================= */
const productsBtn = document.getElementById("productsBtn");
const menu = document.getElementById("megaMenu");

const mainCatsEl = document.getElementById("mainCats");
const subCatsEl = document.getElementById("subCats");
const productsEl = document.getElementById("products");

/* =========================
   STATE
========================= */
let categoryData = null;
let currentCategory = "transmission";

/* =========================
   CATEGORY → JSON FILE
========================= */
function getCategoryFile(category) {
  if (category === "transmission")
    return "assets/data/transmission-transformation.json";
  if (category === "distribution")
    return "assets/data/distribution-utilization.json";
  if (category === "storage")
    return "assets/data/energy-storage.json";

  return null;
}

/* =========================
   MENU TOGGLE
========================= */
productsBtn.addEventListener("click", e => {
  e.stopPropagation();
  menu.classList.toggle("hidden");

  if (!categoryData) {
    loadCategory("transmission"); // default
  }
});

menu.addEventListener("click", e => e.stopPropagation());

document.addEventListener("click", () => {
  menu.classList.add("hidden");
});

/* =========================
   LOAD CATEGORY
========================= */
function loadCategory(category) {
  const file = getCategoryFile(category);
  if (!file) return;

  currentCategory = category;
  categoryData = null;

  fetch(file)
    .then(res => res.json())
    .then(data => {
      categoryData = data;
      renderMainCategory(data);
    })
    .catch(err => console.error("Category load error:", err));
}

/* =========================
   PANEL 1 (Main Category)
========================= */
function renderMainCategory(data) {
  mainCatsEl.innerHTML = `
    <div class="mega-item active">${data.title}</div>
  `;

  // Preselect FIRST subcategory
  if (data.subcategories && data.subcategories.length) {
    renderSubCategories(data.subcategories);
  }
}

/* =========================
   PANEL 2 (Subcategories)
========================= */
function renderSubCategories(subcategories) {
  subCatsEl.innerHTML = "";
  productsEl.innerHTML = "";

  subcategories.forEach((sub, index) => {
    const el = document.createElement("div");
    el.textContent = sub.title;
    el.className = "mega-item";

    if (index === 0) el.classList.add("active");

    el.onclick = () => {
      document
        .querySelectorAll("#subCats .mega-item")
        .forEach(i => i.classList.remove("active"));
      el.classList.add("active");

      renderProducts(sub.products);
    };

    subCatsEl.appendChild(el);

    // Preselect FIRST product group
    if (index === 0) {
      renderProducts(sub.products);
    }
  });
}

/* =========================
   PANEL 3 (Products)
========================= */
function renderProducts(products) {
  productsEl.innerHTML = products
    .map(
      p => `
      <a 
        href="/product.html?cat=${currentCategory}&id=${p.id}"
        class="product-link"
      >
        ${p.title}
      </a>
    `
    )
    .join("");
}

/* =========================
   MAIN CATEGORY CLICK HANDLERS
========================= */
document.querySelectorAll("[data-category]").forEach(el => {
  el.addEventListener("click", e => {
    e.stopPropagation();
    loadCategory(el.dataset.category);
  });
});
