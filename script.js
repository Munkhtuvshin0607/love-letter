const popup = document.getElementById("popup");
const showBtn = document.getElementById("showPopup");
const closeBtn = document.getElementById("closePopup");
const message = document.getElementById("loveMessage");

showBtn.addEventListener("click", () => {
  popup.style.display = "flex";
  message.textContent = "Би чамдаа хязгааргүй их хайртай 💖";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
