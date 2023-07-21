const body = document.querySelector("body");
const startColorChangeBtn = document.querySelector("button[data-start]");
const stopColorChangeBtn = document.querySelector("button[data-stop]");

let timerId = null;

startColorChangeBtn.addEventListener("click", startColorChange);
function startColorChange() { 
    timerId = setInterval(colorChange, 1000);
    startColorChangeBtn.disabled = true;
    stopColorChangeBtn.disabled = false;
}

function colorChange() {
    body.style.backgroundColor = getRandomHexColor();
}
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

stopColorChangeBtn.addEventListener("click", stopColorChange);
function stopColorChange() { 
    clearInterval(timerId);
    startColorChangeBtn.disabled = false;
    stopColorChangeBtn.disabled = true;
}
