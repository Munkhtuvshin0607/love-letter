// 🔊 Аудио автоматаар тоглуулах
const music = document.getElementById("bgMusic");
document.addEventListener("click", () => {
  music.play();
}, { once: true }); // зөвхөн нэг удаа trigger

// 💬 Typewriter effect
const text = "My heart beats only for you...";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// ❤️ Зүрхэн уналтын background
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("animated-heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 300);

// 💥 Fireworks effect (canvas)
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

let particles = [];

function createFirework(x, y) {
  const count = 50;
  for (let i = 0; i < count; i++) {
    particles.push({
      x: x,
      y: y,
      speedX: random(-5, 5),
      speedY: random(-5, 5),
      radius: 2,
      alpha: 1
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.alpha -= 0.01;
    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
    ctx.fillStyle = `rgba(255, 100, 150, ${p.alpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();

document.getElementById("loveButton").addEventListener("click", (e) => {
  document.getElementById("popup").style.display = "flex";
  createFirework(window.innerWidth / 2, window.innerHeight / 2);
});

// ❌ Popup хаах
document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});
