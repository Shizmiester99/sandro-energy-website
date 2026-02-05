const productsBtn = document.getElementById("productsBtn");
const menu = document.getElementById("megaMenu");

const mainCatsEl = document.getElementById("mainCats");
const subCatsEl = document.getElementById("subCats");
const productsEl = document.getElementById("products");

/* Map category → JSON file */
const CATEGORY_FILES = {
  transmission: "transmission-transformation.json",
  distribution: "distribution-utilization.json",
  storage: "energy-storage.json",
  automotive: "automotive-electrical.json"
};

let currentCategory = "transmission"; // default

/* Toggle mega menu */
productsBtn.addEventListener("click", e => {
  e.stopPropagation();
  menu.classList.toggle("hidden");

  let categoryData = "transmission";
  // preload default category once
  if (!categoryData) {
    loadCategory("transmission");
  }
});

/* Close menu on outside click */
document.addEventListener("click", () => {
  menu.classList.add("hidden");
});

/* Load category JSON */
function loadCategory(categoryKey) {
  currentCategory = categoryKey;
  
  fetch(`assets/data/${CATEGORY_FILES[categoryKey]}`)
    .then(res => res.json())
    .then(data => {
      categoryData = data;
      renderSubCategories(data.subcategories);

     // 🔥 PRESELECT FIRST SUBCATEGORY + PRODUCT
      const firstSub = data.subcategories[0];
      if (firstSub) {
        renderSubCategories(data.subcategories);
        renderProducts(firstSub.products);
      }
    });
}

/* Render subcategories */
function renderSubCategories(subcategories) {
  subCatsEl.innerHTML = "";
  productsEl.innerHTML = "";

  subcategories.forEach((sub, index) => {
    const el = document.createElement("div");
    el.textContent = sub.title;

    if (index === 0) el.style.color = "#37BEB0";


    el.addEventListener("click", e => {
  e.stopPropagation(); // 🔥 THIS is the key

   // clear before render
      productsEl.innerHTML = "";
  renderProducts(sub.products);
   highlight(subCatsEl, el);
});

    subCatsEl.appendChild(el);
  });
}

/* Render products 
function renderProducts(products) {
  productsEl.innerHTML = products
  .map(p =>
    `<a href="/product.html?cat=${currentCategory}&id=${p.id}"
    class="product-link"
    onclick="event.stopPropagation()"
    >
      ${p.title}
    </a>`
  )
  .join("");

  products.forEach((p, index) => {
    const a = document.createElement("a");
    a.textContent = p.title;
    a.href = `product.html?id=${p.id}&cat=${categoryData._key}`;

    if (index === 0) a.style.color = "#37BEB0";

    productsEl.appendChild(a);
  });
} */

/* Render products — fixed (no duplication) */
function renderProducts(products) {
  // Clear previous items
  productsEl.innerHTML = "";

  // Optional: de‑dupe by product id in case your data repeats across subcategories
  const seen = new Set();

  products.forEach((p, index) => {
    if (seen.has(p.id)) return;    // remove this line if you *want* duplicates from data
    seen.add(p.id);

    const a = document.createElement("a");
    a.className = "product-link";
    a.textContent = p.title;
    a.href = `/product.html?cat=${encodeURIComponent(currentCategory)}&id=${encodeURIComponent(p.id)}`;

    // Prevent menu from closing when clicking inside
    a.addEventListener("click", (evt) => evt.stopPropagation());

    // Highlight first
    if (index === 0) a.style.color = "#37BEB0";

    productsEl.appendChild(a);
  });
}

/* Highlight helper */
function highlight(container, activeEl) {
  [...container.children].forEach(el => (el.style.color = ""));
  activeEl.style.color = "#37BEB0";
}

/* Category click listeners */
document.querySelectorAll("[data-category]").forEach(el => {
  el.addEventListener("click", e => {
    e.stopPropagation();
    loadCategory(el.dataset.category);
  });
});

// ===== PRODUCT PAGE DEFAULT MENU LOAD =====
if (window.location.pathname.includes("product.html")) {
  // preload first category so menu is populated
  loadCategory("transmission");
}
