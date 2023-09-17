const decrementBtn = document.querySelector('[data-action="decrement"]');
const spanEl = document.getElementById("value");
const incrementBtn = document.querySelector('[data-action="increment"]');

console.log(decrementBtn);
console.log(spanEl.textContent);
console.log(incrementBtn);

let counterValue = 0;

decrementBtn.addEventListener("click", onDecrement);
incrementBtn.addEventListener("click", onIncrement);


function onDecrement() {
  counterValue -= 1
  spanEl.textContent = counterValue;
}

function onIncrement() {
  counterValue += 1
  spanEl.textContent = counterValue;
}