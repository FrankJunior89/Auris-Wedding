const weddingDate = new Date("Dec 12, 2025 00:00:00").getTime();
const countdownDivs = document.querySelectorAll("#countdown .number");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(totalDays / 7);
  const days = totalDays % 7;
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const values = [weeks, days, hours, minutes, seconds];
  countdownDivs.forEach((el, i) => el.textContent = values[i]);
}

setInterval(updateCountdown, 1000);
updateCountdown();