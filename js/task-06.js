const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", onBlur);

function onBlur() {
  const inputValue = inputEl.value.length;
  const inputLength = Number(inputEl.dataset.length);
  console.log(inputValue);
  console.log(inputLength);


  if (inputValue === inputLength) {
    inputEl.classList.remove("invalid"); 
    inputEl.classList.add("valid"); 
  } else {
    inputEl.classList.add("invalid"); 
  }
}
