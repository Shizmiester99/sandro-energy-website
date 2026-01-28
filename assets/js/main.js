const productsBtn = document.getElementById("productsBtn");
const mega = document.getElementById("megaMenu");
const subcats = document.getElementById("subcats");
const products = document.getElementById("products");

const DATA = {
  transmission: {
    "HVDC": ["HVDC Circuit Breaker"],
    "Power Transformer": [
      "Oil Immersed Insulated Power Transformer",
      "Gas Insulated Power Transformer",
      "High Voltage Reactor"
    ],
    "High-Voltage Switchgear": [
      "Gas Insulated Switchgear",
      "Gas-Insulated Transmission Line",
      "Hybrid Gas Insulated Switchgear"
    ]
  }
};

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
