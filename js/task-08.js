const form = document.querySelector(".login-form");

form.addEventListener("submit", sendForm);

function sendForm(evt) {
  evt.preventDefault();

  const email = form.elements.email.value;//либо через форм либо через евент.таргет
  const password = evt.target.elements.password.value;//либо через форм либо через евент.таргет

  if(email === '' || password === ''){
    alert('все поля должны быть заполнены')
  } else {
    console.log({'email': email, 'password': password})
    form.reset()
  }
}
