
const counterEl = document.getElementById('counter');//достукиваемся до дива с айди counter

const incrementBtn = counterEl.querySelector('[data-action="increment"]'); //создаем переменную, в которую вкладываем кнопку увеличения на +1
const decrementBtn = counterEl.querySelector('[data-action="decrement"]'); //создаем переменную, в которую вкладываем кнопку уменьшения на -1
const valueEl = document.getElementById('value'); //достукиваемся до спана со значением "0"

let counterValue = 0; //создаем переменную по условию и назначаем ей "0"

const incrementNumber = () => { //создаем функцию по увеличению каунта
  counterValue += 1; //задаем переменной counterValue условие, что при каждой работе функции counterValue будет увеличиваться на 1
  valueEl.innerHTML = counterValue; //присваиваем valueEl переменную counterValue, которая в этой функции изменяет свое значение на +1
};

const decrementNumber = () => {//создаем функцию по уменьшению каунта
  counterValue -= 1; //задаем переменной counterValue условие, что при каждой работе функции counterValue будет уменьшаться на 1
  valueEl.innerHTML = counterValue; //присваиваем valueEl переменную counterValue, которая в этой функции изменяет свое значение на -1
};

incrementBtn.addEventListener("click", incrementNumber); //задаем слушателя событий "клик" на incrementBtn и в колл-бек записываем функцию увеличения
decrementBtn.addEventListener("click", decrementNumber);

