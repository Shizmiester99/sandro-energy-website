const productsBtn = document.getElementById("productsBtn");
const megaMenu = document.getElementById("megaMenu");
const subcats = document.getElementById("subcats");
const products = document.getElementById("products");

const DATA = {
  transmission: {
    "HVDC": ["HVDC Circuit Breaker"],
    "High-Voltage Substation": ["Prefabricated Substation", "Mobile Substation"],
    "Power Transformer": [
      "Oil Immersed Insulated Power Transformer",
      "Gas Insulated Power Transformer",
      "High Voltage Reactor"
    ],
    "High-Voltage Switchgear": [
      "Gas Insulated Switchgear",
      "Gas-Insulated Transmission Line",
      "Hybrid Gas Insulated Switchgear"
    ],
    "HV Circuit Breaker & Disconnector": [
      "Live Tank Circuit Breaker",
      "Dead Tank Circuit Breaker",
      "HV Disconnector Switch"
    ],
    "Substation Automation": [
      "Protection Relay",
      "Substation Monitoring and Control",
      "Substation Intelligent O&M",
      "Online Monitoring"
    ],
    "High Voltage Instrument Transformer": [
      "Current Transformer",
      "Voltage Transformer",
      "Coupling Capacitor",
      "PowerPT/SSVT"
    ],
    "High Voltage Bushing": [
      "Ultra-high Voltage AC Bushing",
      "Ultra-high Voltage DC Bushing"
    ],
    "High Voltage Power Capacitor": [
      "Oil-Immersed Power Capacitor",
      "Open Rack Type Capacitor Installation"
    ],
    "Neutral Grounding": [
      "Earthing Transformer",
      "Arc Suppression Coil",
      "Neutral Grounding Resistor",
      "Flexible Grounding Device"
    ]
  }
};

productsBtn.onclick = e => {
  e.stopPropagation();
  megaMenu.classList.toggle("hidden");
};

document.addEventListener("click", () => megaMenu.classList.add("hidden"));

document.querySelectorAll("[data-cat]").forEach(btn => {
  btn.onclick = () => {
    const groups = DATA[btn.dataset.cat];
    subcats.innerHTML = "";
    products.innerHTML = "";

    Object.keys(groups).forEach(group => {
      const g = document.createElement("div");
      g.textContent = group;
      g.onclick = () => {
        products.innerHTML = groups[group]
          .map(p => `<a href="product.html?id=${encodeURIComponent(p)}">${p}</a>`)
          .join("");
      };
      subcats.appendChild(g);
    });
  };
});
