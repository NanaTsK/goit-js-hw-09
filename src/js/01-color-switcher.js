function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector("button[data-start]");
const resetColorBtn = document.querySelector("button[data-stop]");

changeColorBtn.addEventListener("click", changeBgColor);
function changeBgColor() { 
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    changeColorBtn.disabled = true;
    resetColorBtn.disabled = false;
}

resetColorBtn.addEventListener("click", resetBgColor);
function resetBgColor() { 
changeColorBtn.disabled = false;
resetColorBtn.disabled = true;}
