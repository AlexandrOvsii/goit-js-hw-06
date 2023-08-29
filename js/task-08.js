const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  const emailVal = loginForm.elements.email.value;
  const passwVal = loginForm.elements.password.value;

  const submitForm = {};

  if (emailVal === "" || passwVal === "") {
    console.log(alert("все поля должны быть заполнены"));
  } else {
    submitForm.name = emailVal;
    submitForm.password = passwVal;
    console.log(submitForm);
    loginForm.reset();
  }
}
