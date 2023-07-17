const sizeControl = document.getElementById('font-size-control');//достукиваемся до инпута по ай-ди
const textEl = document.getElementById('text'); //достукиваемся до спана с текстом

sizeControl.addEventListener('input', changeSize);

function changeSize() {
    const fontValue = sizeControl.value + 'px';
    textEl.style.fontSize = fontValue; //присваиваем textEl - его стилям - размеру шрифта = значение переменной fontValue, которое будет меняться
};