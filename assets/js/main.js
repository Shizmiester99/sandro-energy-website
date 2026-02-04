const productsBtn = document.getElementById("productsBtn");
const menu = document.getElementById("megaMenu");

const mainCatsEl = document.getElementById("mainCats");
const subCatsEl = document.getElementById("subCats");
const productsEl = document.getElementById("products");

const CATEGORY_FILES = {
  "transmission": "transmission-transformation.json",
  "distribution": "distribution-utilization.json",
  "storage": "energy-storage.json",
  "automative": "automative-electrical.json"
};

let categoryData = null;

function setActive(el, selector) {
  document.querySelectorAll(selector).forEach(e => {
    e.style.color = "";
    e.style.fontWeight = "";
  });

  el.style.color = "#37BEB0";
  el.style.fontWeight = "600";
}

/* Toggle menu */
productsBtn.addEventListener("click", e => {
  e.stopPropagation();
  menu.classList.toggle("hidden");
});

/* Prevent close when clicking inside */
menu.addEventListener("click", e => e.stopPropagation());

/* Close when clicking outside */
document.addEventListener("click", () => {
  menu.classList.add("hidden");
});


const BASE = window.location.pathname.includes("sandro-energy-website")
  ? "/sandro-energy-website"
  : "";

function loadCategory(categoryKey) {
  const file = CATEGORY_FILES[categoryKey];
  if (!file) return;

  fetch(`${BASE}/assets/data/${file}`)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${file}`);
      return res.json();
    })
    .then(data => {
      categoryData = data;
      renderMainCategory(data);
    })
    .catch(err => console.error("Category load error:", err));
}



function renderMainCategory(data) {
  // highlight first main category (already clicked)
  const firstMain = document.querySelector(
    `[data-category="${data.id}"]`
  );
  if (firstMain) setActive(firstMain, "[data-category]");

  // PRESELECT first subcategory
  const firstSub = data.subcategories[0];
  renderSubCategories(data.subcategories, firstSub);
}

function renderSubCategories(subcategories, preselectSub) {
  subCatsEl.innerHTML = "";
  productsEl.innerHTML = "";

  subcategories.forEach((sub, index) => {
    const el = document.createElement("div");
    el.textContent = sub.title;
    el.className = "mega-item";
    el.style.cursor = "pointer";

    el.onclick = () => {
      setActive(el, "#subCats .mega-item");
      renderProducts(sub.products);
    };

    subCatsEl.appendChild(el);

    // HARD-CODED PRESELECTION
    if (sub === preselectSub) {
      setActive(el, "#subCats .mega-item");
      renderProducts(sub.products);
    }
  });
}

function renderProducts(products) {
  productsEl.innerHTML = "";

  products.forEach((p, index) => {
    const link = document.createElement("a");
    link.href = `/product.html?cat=${categoryData.id}&id=${p.id}`;
    link.textContent = p.title;
    link.className = "product-link";
    link.style.display = "block";
    link.style.marginBottom = "8px";

    if (index === 0) {
      link.style.color = "#37BEB0";
      link.style.fontWeight = "600";
    }

    productsEl.appendChild(link);
  });
}
