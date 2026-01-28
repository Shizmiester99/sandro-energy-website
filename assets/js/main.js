const productsBtn = document.getElementById("productsBtn");
const mega = document.getElementById("megaMenu");
const subcats = document.getElementById("subcats");
const products = document.getElementById("products");
const productsBtn = document.getElementById("productsBtn");
const megaMenu = document.getElementById("megaMenu");

const mainCatsEl = document.getElementById("mainCats");
const subCatsEl = document.getElementById("subCats");
const productsEl = document.getElementById("products");

let categoryData = null;

/* Open / close mega menu */
productsBtn.addEventListener("click", e => {
  e.stopPropagation();
  megaMenu.classList.toggle("hidden");

  if (!categoryData) loadTransmission();
});

/* Prevent menu from closing when clicking inside */
megaMenu.addEventListener("click", e => e.stopPropagation());

document.addEventListener("click", () => {
  megaMenu.classList.add("hidden");
});

/* Load main category JSON */
function loadTransmission() {
  fetch("/assets/data/transmission-transformation.json")
    .then(res => res.json())
    .then(data => {
      categoryData = data;
      renderMainCategory(data);
    });
}

/* Panel 1 */
function renderMainCategory(data) {
  mainCatsEl.innerHTML = `
    <div class="active">${data.title}</div>
  `;
  renderSubCategories(data.subcategories);
}

/* Panel 2 */
function renderSubCategories(subcategories) {
  subCatsEl.innerHTML = "";
  productsEl.innerHTML = "";

  subcategories.forEach(sub => {
    const el = document.createElement("div");
    el.textContent = sub.title;
    el.onclick = () => renderProducts(sub.products);
    subCatsEl.appendChild(el);
  });
}

/* Panel 3 */
function renderProducts(products) {
  productsEl.innerHTML = products
    .map(
      p =>
        `<a href="/product.html?id=${p.id}" class="product-link">${p.title}</a>`
    )
    .join("");
}

if (productsBtn && megaMenu) {
  productsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    megaMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!megaMenu.contains(e.target)) {
      megaMenu.classList.add("hidden");
    }
  });

  megaMenu.addEventListener("click", e => e.stopPropagation());
}

productsBtn.addEventListener("click", e => {
  e.stopPropagation();            // prevent document click
  mega.classList.remove("hidden"); // OPEN menu
});



document.addEventListener('click', e => {
  if (!mega.contains(e.target) && e.target !== productsBtn) {
    mega.classList.add('hidden');
  }
});

mega.addEventListener('click', e => {
  e.stopPropagation();
});

document.querySelectorAll("[data-cat]").forEach(cat => {
  cat.addEventListener("click", e => {
    e.stopPropagation();
    subcats.innerHTML = "";
    products.innerHTML = "";

    Object.entries(DATA.transmission).forEach(([group, items]) => {
      const el = document.createElement("div");
      el.textContent = group;
      el.className = "mega-item";

      el.onclick = () => {
        products.innerHTML = items
          .map(p => `<a href="product.html?id=${encodeURIComponent(p)}">${p}</a>`)
          .join("");
      };

      subcats.appendChild(el);
    });
  });
});
