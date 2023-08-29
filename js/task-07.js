const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");

inputEl.addEventListener("input", changeFontSize);

function changeFontSize() {
  const inputValue = inputEl.value;
  spanEl.style.fontSize = inputValue + "px";
}
