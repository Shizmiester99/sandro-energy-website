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

let categoryData = null;

/* Toggle mega menu */
productsBtn.addEventListener("click", e => {
  e.stopPropagation();
  menu.classList.toggle("hidden");

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
  fetch(`assets/data/${CATEGORY_FILES[categoryKey]}`)
    .then(res => res.json())
    .then(data => {
      categoryData = data;
      renderSubcategories(data.subcategories);

      // ✅ HARD-CODED PRESELECTION
      const firstSub = data.subcategories[0];
      renderProducts(firstSub.products);
    })
    .catch(err => console.error(err));
}

/* Render subcategories */
function renderSubcategories(subcategories) {
  subCatsEl.innerHTML = "";
  productsEl.innerHTML = "";

  subcategories.forEach((sub, index) => {
    const el = document.createElement("div");
    el.textContent = sub.title;

    if (index === 0) el.style.color = "#37BEB0";

    el.onclick = () => {
      renderProducts(sub.products);
      highlight(subCatsEl, el);
    };

    subCatsEl.appendChild(el);
  });
}

/* Render products */
function renderProducts(products) {
  productsEl.innerHTML = products
  .map(p =>
    `<a href="/product.html?cat=${currentCategory}&id=${p.id}">
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
