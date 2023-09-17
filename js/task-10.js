const controlsEl = document.getElementById("controls");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divArray = document.getElementById("boxes");

const inputElement = controlsEl.querySelector('input[type="number"]');

createBtn.addEventListener("click", createArr);
destroyBtn.addEventListener("click", destroyBoxes);

function createArr(evt) {
  let inputCount = inputElement.value;
  createBoxes(inputCount);
}

let size = 30;

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const markup = document.createElement("div");
    markup.textContent = i;
    markup.style.width = size + "px";
    markup.style.height = size + "px";
    size += 10;
    markup.style.backgroundColor = getRandomHexColor();

    divArray.append(markup);
    
  }
}

function destroyBoxes() {
  divArray.innerHTML = ""
  size = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
