const params = new URLSearchParams(location.search);
const name = params.get("id");

document.getElementById("name").textContent = name;
document.getElementById("desc").textContent =
  "High-performance industrial equipment designed for reliability and efficiency.";

document.getElementById("bullets").innerHTML = `
  <li>IEC / IEEE compliant</li>
  <li>Long service life</li>
  <li>Low maintenance</li>
  <li>High operational stability</li>
`;

document.querySelectorAll(".tabs button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.add("hidden"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.remove("hidden");
  };
});
