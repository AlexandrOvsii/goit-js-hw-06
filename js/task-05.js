const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", onInput);

function onInput(event) {
  const input = event.target.value;

  if (input === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = input;
  }
}

