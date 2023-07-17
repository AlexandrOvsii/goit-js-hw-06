const inputEl = document.getElementById("validation-input"); //достукиваемся до инпута
const validLength = inputEl.dataset.length; //получаем валидное значение из атрибута data-length

console.log(inputEl.style);

inputEl.addEventListener("blur", onBlur); //добавляем слушателя событий блюр и в колл-бек записываем функцию

function onBlur() {
  if (inputEl.value.length < inputEl.getAttribute("data-length")) {
    //условие - если значение атрибута data-length меньше значения inputEl.value.length(длины value)
    inputEl.classList.remove("valid"); //удаляем класс из списка классов элемента.
    inputEl.classList.add("invalid"); //добавляем класс из списка классов элемента.
  } else {
    //если условие не выполнено и inputEl.value.length больше, то:
    inputEl.classList.remove("invalid"); //удаляем класс из списка классов элемента.
    inputEl.classList.add("valid"); //добавляем класс из списка классов элемента.
  }
}
