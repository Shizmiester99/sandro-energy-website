/* =========================
   URL PARAMS
========================= */
const params = new URLSearchParams(window.location.search);
const category = params.get("cat");
const productId = params.get("id");

if (!category || !productId) {
  console.error("Missing category or product id");
}

/* =========================
   CATEGORY → JSON FILE
========================= */
let jsonFile = "";

if (category === "transmission") {
  jsonFile = "/assets/data/transmission-transformation.json";
} else if (category === "distribution") {
  jsonFile = "/assets/data/distribution-utilization.json";
} else if (category === "storage") {
  jsonFile = "/assets/data/energy-storage.json";
} else if (category === "automotive") {
  jsonFile = "/assets/data/automotive-electrical.json";
} else {
  console.error("Unknown category:", category);
}

/* =========================
   FETCH + RENDER
========================= */
fetch(jsonFile)
  .then(res => res.json())
  .then(data => {
    const product = findProduct(data, productId);
    if (!product) throw new Error("Product not found");
    renderProduct(product);
  })
  .catch(err => console.error("Product load error:", err));

/* =========================
   FIND PRODUCT
========================= */
function findProduct(data, id) {
  for (const sub of data.subcategories) {
    for (const p of sub.products) {
      if (p.id === id) return p;
    }
  }
  return null;
}

/* =========================
   RENDER PRODUCT
========================= */
function renderProduct(product) {
  document.getElementById("title").textContent = product.title;
  document.getElementById("desc").textContent = product.description;

  // Bullets
  document.getElementById("bullets").innerHTML = product.bullets
    .map(b => `<li>${b}</li>`)
    .join("");

  // Image
  if (product.image) {
    document.getElementById("productImage").src = product.image;
  }

  // Features
  document.getElementById("features").innerHTML = product.features
    .map(
      f => `
      <div style="margin-bottom:24px">
        <h3 style="color:#37BEB0;margin-bottom:6px">
          ${f.title}
        </h3>
        <p style="text-align:justify">${f.text}</p>
      </div>
    `
    )
    .join("");

  // Specifications
  document.getElementById("specs").innerHTML = `
    <table style="width:100%;border-collapse:collapse">
      ${Object.entries(product.specifications)
        .map(
          ([k, v]) => `
        <tr>
          <td style="padding:10px;border-bottom:1px solid #A4E5E0">${k}</td>
          <td style="padding:10px;border-bottom:1px solid #A4E5E0">${v}</td>
        </tr>
      `
        )
        .join("")}
    </table>
  `;
}

/* =========================
   TABS
========================= */
document.querySelectorAll(".tabs button").forEach(btn => {
  btn.onclick = () => {
    document
      .querySelectorAll(".tabs button")
      .forEach(b => b.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach(t => t.classList.add("hidden"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.remove("hidden");
  };
});
