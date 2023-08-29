const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divArea = document.getElementById("boxes");

createBtn.addEventListener("click", getInputValue);
destroyBtn.addEventListener("click", destroyBoxes);

function getInputValue() {
  const amount = input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let width = 0;
  let height = 0;

  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");
    width += 10;
    height += 10;
    divEl.style.width = `${width}` + "px";
    divEl.style.height = `${height}` + "px";
    divEl.style.backgroundColor = getRandomHexColor();

    divArea.append(divEl);
  }
}

function destroyBoxes() {
  divArea.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//теперь мне нужно добавить эти <div> в дом элемент
