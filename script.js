const poems = [/* таны шүлгүүд (өмнө өгсөн 5) */];

let currentPoemIndex = 0;
const poemContainer = document.getElementById("poem-container");
const music = document.getElementById("bg-music");

// Show current poem
function updatePoem() {
  if (currentPoemIndex >= 0 && currentPoemIndex < poems.length) {
    poemContainer.innerHTML = poems[currentPoemIndex];
    launchFireworks();
  } else {
    poemContainer.innerHTML = "💖 Миний шүлгүүд дууслаа... Чи л энэ бүхний эзэн.";
  }
}

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentPoemIndex < poems.length - 1) {
    currentPoemIndex++;
    updatePoem();
  }
});

document.getElementById("back-btn").addEventListener("click", () => {
  if (currentPoemIndex > 0) {
    currentPoemIndex--;
    updatePoem();
  }
});

document.getElementById("play-music").addEventListener("click", () => {
  music.play();
});

function launchFireworks() {
  for (let i = 0; i < 10; i++) {
    const fw = document.createElement("div");
    fw.className = Math.random() > 0.5 ? "firework" : "heart-firework";
    fw.style.top = Math.random() * window.innerHeight + "px";
    fw.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(fw);
    setTimeout(() => fw.remove(), 1200);
  }
}
