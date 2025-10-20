// === Minecraft pixel particle background ===
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let particles = [];
const colors = ["#3aa655", "#c8f560", "#5c4033"];
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
    speedY: Math.random() * 1 + 0.5
  }));
}
window.addEventListener("resize", resize);
resize();

function animate() {
  ctx.fillStyle = "rgba(27,27,27,0.5)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
    p.y += p.speedY;
    if (p.y > canvas.height) p.y = 0;
  }
  requestAnimationFrame(animate);
}
animate();

// === Fade on Scroll ===
const faders = document.querySelectorAll(".section");
function onScroll() {
  const trigger = window.innerHeight * 0.85;
  faders.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < trigger) sec.classList.add("visible");
  });
}
window.addEventListener("scroll", onScroll);
onScroll();

