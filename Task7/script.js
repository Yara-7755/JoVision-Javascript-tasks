function padNumber(number) {
  return String(number).padStart(2, "0");
}

function getFormattedTime() {
  const now = new Date();
  const hours = padNumber(now.getHours());
  const minutes = padNumber(now.getMinutes());
  const seconds = padNumber(now.getSeconds());
  return hours + ":" + minutes + ":" + seconds;
}

function updateClock() {
  const clockElement = document.getElementById("clock");
  clockElement.textContent = getFormattedTime();
}

function startClock() {
  updateClock();
  setInterval(updateClock, 1000);
}

startClock();