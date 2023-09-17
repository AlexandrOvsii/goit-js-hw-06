const buttonEl = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

buttonEl.addEventListener("click", onChangeColor);

function onChangeColor() {
  const getColor = getRandomHexColor();
  spanText.textContent = getColor;
  document.body.style.backgroundColor = getColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
