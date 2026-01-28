const productsBtn = document.getElementById("productsBtn");
const menu = document.getElementById("megaMenu");

const mainCatsEl = document.getElementById("mainCats");
const subCatsEl = document.getElementById("subCats");
const productsEl = document.getElementById("products");

let categoryData = null;

/* Toggle mega menu */
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

/* Load category JSON */
function loadTransmission() {
  fetch("/assets/data/transmission-transformation.json")
    .then(res => {
      if (!res.ok) throw new Error("JSON not found");
      return res.json();
    })
    .then(data => {
      categoryData = data;
      renderMainCategory(data);
    })
    .catch(err => console.error(err));
}

/* Panel 1 */
function renderMainCategory(data) {
  mainCatsEl.innerHTML = `<div class="active">${data.title}</div>`;
  renderSubCategories(data.subcategories);
}

/* Panel 2 */
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

/* Panel 3 */
function renderProducts(products) {
  productsEl.innerHTML = products
    .map(
      p => `<a href="/product.html?id=${p.id}" class="product-link">${p.title}</a>`
    )
    .join("");
}


if (productsBtn && menu) {
  productsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) {
      menu.classList.add("hidden");
    }
  });

  menu.addEventListener("click", e => e.stopPropagation());
}

productsBtn.addEventListener("click", e => {
  e.stopPropagation();            // prevent document click
  menu.classList.remove("hidden"); // OPEN menu
});



document.addEventListener('click', e => {
  if (!menu.contains(e.target) && e.target !== productsBtn) {
    menu.classList.add('hidden');
  }
});

menu.addEventListener('click', e => {
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
