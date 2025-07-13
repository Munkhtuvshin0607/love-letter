// Дуу автоматаар тоглоно (бид өмнө нь Play товч ашиглаж байсан, одоо устгасан)
document.getElementById("bgMusic").play();

// ❤️ Хайрын ишлэлүүд
const loveQuotes = [
  "Чи бол миний зүрхний цохилт.",
  "Миний инээмсэглэл зөвхөн чамаас эхэлдэг.",
  "Чамайг бодохгүй өдөр нэг ч байгаагүй.",
  "Чи надад бүх л ертөнц юм.",
  "Чиний төлөө би маргаашийг бүтээнэ.",
  "Чи бол миний амьдралын утга учир."
];

const quoteBtn = document.getElementById("moreLove");
const quoteBox = document.getElementById("quoteBox");

quoteBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * loveQuotes.length);
  quoteBox.textContent = loveQuotes[random];
});
