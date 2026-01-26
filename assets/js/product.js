const name = new URLSearchParams(location.search).get("id");

document.getElementById("title").textContent = name;
document.getElementById("desc").textContent =
  "High-performance equipment designed for modern HV transmission systems.";

document.getElementById("bullets").innerHTML = `
  <li>IEC / IEEE compliant</li>
  <li>High operational reliability</li>
  <li>Low maintenance design</li>
`;

document.querySelectorAll(".tabs button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(t => t.classList.add("hidden"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.remove("hidden");
  };
});
