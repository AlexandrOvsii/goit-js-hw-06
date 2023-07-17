const loginForm = document.querySelector('.login-form'); //достукиваемся до формы
// 

loginForm.addEventListener('submit', function(event){//пишем ивент, чтобы сбросить базовые настройки браузера
    event.preventDefault();// --//--
// console.dir(loginForm);
const emailInput = loginForm.elements.email; //присваиваем переменной ссылку на поля формы
const passwordInput = loginForm.elements.password; //присваиваем переменной ссылку на поля формы

if(emailInput.value === '' || passwordInput.value === ''){ //проверяем условие
    alert('все поля должны быть заполнены');
    return;
};

const formData = { //создаем переменную - объект
    email: loginForm.elements.email.value, //для доступа к элементам формы используем свойство elements
    password: loginForm.elements.password.value, //для доступа к элементам формы используем свойство elements
};

console.log(formData);

loginForm.reset(); //сбрасываем форму
});