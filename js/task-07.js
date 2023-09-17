const rangeEl = document.getElementById("font-size-control");
const spanTextEl = document.getElementById("text");

rangeEl.addEventListener("input", changeRange);

function changeRange(evt) {
  const sizeValue = evt.target.value + 'px';
  // const sizeValue = rangeEl.value
  spanTextEl.style.fontSize = sizeValue;
}
