// === STARFIELD BACKGROUND ===
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let stars = [];
const numStars = 180;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = Array.from({ length: numStars }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * canvas.width
  }));
}
window.addEventListener('resize', resize);
resize();

function animate() {
  ctx.fillStyle = 'rgba(5,6,10,0.6)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    star.z -= 2;
    if (star.z <= 0) star.z = canvas.width;
    const k = 128.0 / star.z;
    const px = star.x * k + canvas.width / 2;
    const py = star.y * k + canvas.height / 2;
    if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
      const size = (1 - star.z / canvas.width) * 2;
      ctx.fillStyle = `rgba(0,191,255,${1 - star.z / canvas.width})`;
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  requestAnimationFrame(animate);
}
animate();

// === FADE ANIMATION ON SCROLL ===
const faders = document.querySelectorAll('.fade');
function onScroll() {
  const trigger = window.innerHeight * 0.85;
  faders.forEach(fade => {
    const rect = fade.getBoundingClientRect();
    if (rect.top < trigger) fade.classList.add('visible');
  });
}
window.addEventListener('scroll', onScroll);
onScroll();
