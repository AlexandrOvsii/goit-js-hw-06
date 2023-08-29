// const buttonEl = document.querySelector(".change-color");
// const spanEl = document.querySelector(".color");

// buttonEl.addEventListener("click", onClick);

// function onClick() {
//   document.body.style.backgroundColor = getRandomHexColor();
//   const computedStyle = getComputedStyle(document.body);
//   const backgroundColor = computedStyle.backgroundColor;
//   console.log(backgroundColor);

//   spanEl.textContent = backgroundColor;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


const buttonEl = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

buttonEl.addEventListener("click", handleColorChange); //вешаем слушателя событий

function handleColorChange() {
  const randomColor = getRandomHexColor(); //присваиваем переменной значение, которое придет из ф-ции
  document.body.style.backgroundColor = randomColor; //присваиваем значение randomColor document.body.style.backgroundColor
  colorSpan.textContent = randomColor; //записываем в текстконтент colorSpan значение, которое пришло из переменной randomColor
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};