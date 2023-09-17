const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", onChange);

function onChange(evt) {
  const dataLength = Number(inputEl.dataset.length);
  const inputLength = evt.target.value.length;

  if (inputLength === dataLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
