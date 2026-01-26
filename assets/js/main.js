
// ========== CATALOG ==========
// Keys map to product detail pages via ?product=<key>
// Add/adjust content here any time.
const CATALOG = {
  transmission: {
    title: 'Transmission & Transformation',
    detail: 'Advanced solutions for long‑distance power transmission and grid transformation.',
    items: [
      { key: 'hvdc', label: 'HVDC' },
      { key: 'high-voltage-substation', label: 'High-Voltage Substation' },
      { key: 'power-transformer', label: 'Power Transformer' },
      { key: 'high-voltage-switchgear', label: 'High Voltage Switchgear' },
      { key: 'hv-cb-disconnector', label: 'HV Circuit Breaker & Disconnector' },
      { key: 'substation-automation', label: 'Substation Automation' },
      { key: 'hv-instrument-transformer', label: 'High Voltage Instrument Transformer' },
      { key: 'hv-bushing', label: 'High Voltage Bushing' },
      { key: 'hv-power-capacitor', label: 'High Voltage Power Capacitor' },
    ]
  },
  distribution: {
    title: 'Distribution & Utilization',
    detail: 'Reliable distribution systems ensuring efficient power utilization.',
    items: [
      { key: 'mv-switchgear', label: 'Medium Voltage Switchgear' },
      { key: 'lv-switchgear', label: 'Low Voltage Switchgear' },
      { key: 'ems', label: 'Energy Management Systems' },
    ]
  },
  storage: {
    title: 'Energy Storage',
    detail: 'Modern energy storage and grid stability technologies.',
    items: [
      { key: 'bess', label: 'Battery Energy Storage Systems' },
      { key: 'grid-stabilization', label: 'Grid Stabilization Solutions' },
      { key: 'statcom', label: 'Static Synchronous Compensator (STATCOM)' },
    ]
  }
};

// Minimal product data for product.html; extend freely.
const PRODUCT_DATA = {
  'hvdc': {
    title: 'HVDC',
    desc: 'High Voltage Direct Current systems enabling efficient long‑distance bulk power transmission with controllable power flows.',
    image: 'assets/img/hvdc.jpg',
    specs: [
      ['Voltage Level', '±320 kV – ±800 kV'],
      ['Capacity', '500 MW – 8 GW'],
      ['Configuration', 'Monopole / Bipole / Multi‑terminal']
    ]
  },
  'high-voltage-substation': {
    title: 'High-Voltage Substation',
    desc: 'GIS/AIS solutions, protection and control, and integrated auxiliary systems for reliable grid nodes.',
    image: 'assets/img/hv-substation.jpg',
    specs: [
      ['Voltage', '110 kV – 765 kV'],
      ['Busbar', 'Single / Double / Ring / Mesh'],
      ['Standards', 'IEC / IEEE compliant']
    ]
  },
  'power-transformer': {
    title: 'Power Transformer',
    desc: 'High‑efficiency, low‑loss oil‑immersed or dry‑type transformers with on‑load tap changing (OLTC) options.',
    image: 'assets/img/power-transformer.jpg',
    specs: [
      ['Rating', '10 MVA – 1000 MVA'],
      ['Voltage Class', 'Up to 800 kV'],
      ['Cooling', 'ONAN / ONAF / OFAF / ODAF']
    ]
  },
  'high-voltage-switchgear': {
    title: 'High Voltage Switchgear',
    desc: 'GIS/AIS high‑voltage switchgear ensuring safety, reliability, and compact footprints.',
    image: 'assets/img/hv-switchgear.jpg',
    specs: [
      ['Type', 'GIS / AIS'],
      ['Voltage', '110 – 550 kV'],
      ['Interrupting Medium', 'SF6 / Vacuum options']
    ]
  },
  'hv-cb-disconnector': {
    title: 'HV Circuit Breaker & Disconnector',
    desc: 'High‑speed, high‑interrupting capacity circuit breakers with matching disconnectors.',
    image: 'assets/img/hv-cb.jpg',
    specs: [
      ['Voltage', '110 – 550 kV'],
      ['IEC Class', 'Class C2 / M2'],
      ['Mechanism', 'Spring‑operated / Hydraulic']
    ]
  },
  'substation-automation': {
    title: 'Substation Automation',
    desc: 'IEC 61850‑based protection, control, and monitoring for digital substations.',
    image: 'assets/img/substation-automation.jpg',
    specs: [
      ['Protocol', 'IEC 61850 / DNP3 / Modbus'],
      ['Architecture', 'Process / Bay / Station'],
      ['Cybersecurity', 'Role‑based, secure VLAN']
    ]
  },
  'hv-instrument-transformer': {
    title: 'High Voltage Instrument Transformer',
    desc: 'Precision CTs and VTs for metering and protection with robust insulation systems.',
    image: 'assets/img/it-hv.jpg',
    specs: [
      ['Class', '0.2S / 0.5 / 5P20'],
      ['Insulation', 'Oil / Gas / Solid'],
      ['Voltage', 'Up to 550 kV']
    ]
  },
  'hv-bushing': {
    title: 'High Voltage Bushing',
    desc: 'Condenser bushings for transformers and switchgear with superior dielectric performance.',
    image: 'assets/img/hv-bushing.jpg',
    specs: [
      ['Type', 'OIP / RIP'],
      ['Voltage', 'Up to 550 kV'],
      ['Creepage', 'Customized as per environment']
    ]
  },
  'hv-power-capacitor': {
    title: 'High Voltage Power Capacitor',
    desc: 'Shunt/series capacitors for reactive power compensation and voltage support.',
    image: 'assets/img/hv-capacitor.jpg',
    specs: [
      ['Voltage', 'Up to 245 kV'],
      ['Configuration', 'Single / Bank'],
      ['Dielectric', 'Polypropylene film']
    ]
  },
  'mv-switchgear': {
    title: 'Medium Voltage Switchgear',
    desc: 'Metal‑clad and compact MV switchgear with arc‑resistant designs for distribution networks.',
    image: 'assets/img/mv-switchgear.jpg',
    specs: [
      ['Voltage', '3.3 – 36 kV'],
      ['Breaking Tech', 'Vacuum'],
      ['Standards', 'IEC 62271']
    ]
  },
  'lv-switchgear': {
    title: 'Low Voltage Switchgear',
    desc: 'LV panels (MCC/PCC) with comprehensive protection, metering, and automation.',
    image: 'assets/img/lv-switchgear.jpg',
    specs: [
      ['Voltage', '≤ 1 kV'],
      ['Form', 'Form 2–4'],
      ['Ingress', 'IP31–IP54']
    ]
  },
  'ems': {
    title: 'Energy Management Systems',
    desc: 'SCADA/EMS for monitoring, control, optimization, and energy cost reduction.',
    image: 'assets/img/ems.jpg',
    specs: [
      ['Functions', 'SCADA / Historian / Reporting'],
      ['Analytics', 'Load / Peak / Power Quality'],
      ['Integration', 'Modbus / IEC / OPC UA']
    ]
  },
  'bess': {
    title: 'Battery Energy Storage Systems',
    desc: 'Utility/commercial BESS for peak shaving, arbitrage, and grid services.',
    image: 'assets/img/bess.jpg',
    specs: [
      ['Power', '0.5 – 200 MW'],
      ['Duration', '1 – 8 hours'],
      ['Chemistry', 'LFP / NMC']
    ]
  },
  'grid-stabilization': {
    title: 'Grid Stabilization Solutions',
    desc: 'Dynamic reactive power and damping solutions to stabilize grids.',
    image: 'assets/img/grid-stabilization.jpg',
    specs: [
      ['Functions', 'Reactive / Harmonic / Oscillation'],
      ['Tech', 'SVC / STATCOM / Power Electronics'],
      ['Placement', 'Transmission / Distribution']
    ]
  },
  'statcom': {
    title: 'Static Synchronous Compensator (STATCOM)',
    desc: 'Fast, continuous reactive compensation using power electronics for voltage support.',
    image: 'assets/img/statcom.jpg',
    specs: [
      ['Voltage', 'MV / HV'],
      ['Reactive Range', '± Mvar (project specific)'],
      ['Response', '< 1 cycle']
    ]
  }
};

// ========== INDEX PAGE: Mega menu interactions ==========
(function initMegaMenu() {
  const productsBtn = document.getElementById('productsBtn');
  const megaMenu = document.getElementById('megaMenu');
  const subcategories = document.getElementById('subcategories');
  const productDetail = document.getElementById('productDetail');
  if (!productsBtn || !megaMenu || !subcategories || !productDetail) return;

  // Toggle open/close
  productsBtn.addEventListener('click', () => {
    megaMenu.classList.toggle('hidden');
  });

  // Populate subcategories when clicking category
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      const data = CATALOG[category];
      if (!data) return;

      // Build subcategory links to product.html?product=<key>
      subcategories.innerHTML = data.items
        .map(item => (
          `<a class="block hover:text-blue-600tem.label}</a>`
        ))
        .join('');

      productDetail.innerHTML = `
        <h4 class="font-semibold mb-2">${data.title}</h4>
        <p>${data.detail}</p>
      `;
    });
  });

  // Close when clicking outside
  document.addEventListener('click', e => {
    const clickInside = megaMenu.contains(e.target) || e.target === productsBtn;
    if (!clickInside) megaMenu.classList.add('hidden');
  });
})();

// ========== PRODUCT PAGE: Focus view with chart PNG detection ==========
(function initProductPage() {
  const root = document.getElementById('product-detail-root');
  if (!root) return;

  const q = new URLSearchParams(location.search);
  const key = (q.get('product') || '').toLowerCase();

  const data = PRODUCT_DATA[key] || {
    title: 'Product',
    desc: 'Description coming soon.',
    image: 'assets/img/placeholder.svg',
    specs: []
  };

  document.title = `${data.title} | Industrial Power & Energy`;

  // Fill title & desc
  root.querySelectorAll('[data-title]').forEach(n => n.textContent = data.title);
  const desc = root.querySelector('[data-desc]');
  if (desc) desc.textContent = data.desc;

  // Image
  const img = root.querySelector('[data-image]');
  if (img) { img.src = data.image; img.alt = data.title; }

  // Chart PNG auto-detect
  const chart = document.getElementById('spec-chart');
  const table = document.getElementById('spec-table');

  const candidates = [
    `assets/img/${key}-spec.png`,
    `assets/img/${key}-specs.png`,
    `assets/img/${key}_spec.png`
  ];
  // (Optional) handle a known typo case:
  if (key === 'grinding-balls') candidates.unshift('assets/img/griding-balls-spec.png');

  function tryNext(i) {
    if (!chart || !table) return;
    if (i >= candidates.length) {
      chart.classList.add('hidden');
      table.classList.remove('hidden');
      return;
    }
    const src = candidates[i];
    const probe = new Image();
    probe.onload = () => {
      chart.src = src;
      chart.classList.remove('hidden');
      table.classList.add('hidden');
    };
    probe.onerror = () => tryNext(i + 1);
    probe.src = src;
  }
  tryNext(0);

  // Build table rows
  if (table) {
    const tbody = table.querySelector('tbody');
    if (tbody) {
      tbody.innerHTML = '';
      (data.specs || []).forEach(([k, v]) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <th class="text-left border-b p-2">${k}</th>
          <td class="border-b p-2">${v}</td>
        `;
        tbody.appendChild(tr);
      });
      if (tbody.children.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="border-b p-2 text-gray-500" colspan="2">Specifications coming soon.</td>`;
        tbody.appendChild(tr);
      }
    }
  }
})();
``
