const poems = [
  `Чи ирснээр намар минь хавар мэт дулаахан,<br>Чимээгүйхэн сэтгэлд минь нар ургаж гийсэн...`,
  `Өглөөний нар шиг чи инээмсэглэхэд,<br>Өчигдөрөөс илүү өнөөдөрт дурладаг...`,
  `Чимээгүйхэн алхах чимээнд чинь хүртэл,<br>Чинийх гэдгийг нь зүрх минь таньдаг...`,
  `Намуун салхи шиг чи минь ирсэн,<br>Нарны илчтэй, зөөлөн дөл шиг гэрэлтсэн...`,
  `Машины цонхоор нам гүмд ширтэхэд,<br>Мянган хүний дундаас чамайг л би анзаарсан...`
];

let current = 0;

function nextPoem() {
  const container = document.getElementById("poem-container");
  container.innerHTML = poems[current];
  container.classList.remove("fade");
  void container.offsetWidth;
  container.classList.add("fade");
  current = (current + 1) % poems.length;
}

window.onload = () => {
  nextPoem();
  startFireworks();

  // ✨ Click → дуу тоглуул
  document.getElementById('playMusicBtn').addEventListener('click', () => {
    document.getElementById('bg-music').play();
  });
};

// 🎆 Fireworks
function startFireworks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let fireworks = [];

  class Firework {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height;
      this.radius = Math.random() * 3 + 2;
      this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
      this.vx = (Math.random() - 0.5) * 3;
      this.vy = -Math.random() * 7 - 3;
      this.alpha = 1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.1;
      this.alpha -= 0.02;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.1) {
      for (let i = 0; i < 20; i++) {
        fireworks.push(new Firework());
      }
    }

    fireworks.forEach((f, i) => {
      f.update();
      f.draw();
      if (f.alpha <= 0) fireworks.splice(i, 1);
    });
  }

  animate();
}
