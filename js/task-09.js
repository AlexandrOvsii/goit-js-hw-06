function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const buttonEl = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');


function colorChange(){
  const randomColor = getRandomHexColor();//присваиваем переменной значение, которое придет из ф-ции
  document.body.style.backgroundColor = randomColor; //присваиваем значение randomColor document.body.style.backgroundColor
  colorSpan.textContent = randomColor; //записываем в текстконтент colorSpan значение, которое пришло из переменной randomColor
};


buttonEl.addEventListener('click', colorChange); //вешаем слушателя событий