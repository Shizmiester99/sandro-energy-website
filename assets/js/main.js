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



document.addEventListener('click', e => {
  if (!megaMenu.contains(e.target) && e.target !== productsBtn) {
    megaMenu.classList.add('hidden');
  }
});

megaMenu.addEventListener('click', e => {
  e.stopPropagation();
});

document.querySelector("[data-cat]").onclick = () => {
  subcats.innerHTML = "";
  products.innerHTML = "";

  Object.entries(DATA.transmission).forEach(([group, items]) => {
    const el = document.createElement("div");
    el.textContent = group;
    el.onclick = () => {
      products.innerHTML = items.map(p =>
  `<a href="product.html?id=${encodeURIComponent(p)}">${p}</a>`
).join('');
    };
    subcats.appendChild(el);
  });
};
