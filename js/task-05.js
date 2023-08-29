const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", onChangeInput);

function onChangeInput() {
  let value = inputEl.value;

  if (value === "") {
    outputEl.innerHTML = "Anonymous";
  } else {
    outputEl.innerHTML = value;
  }
}

// function setName(event) {
//   let name = event.target.value;
//   if (name === "") {
//     outputEl.textContent = "Anonymous";
//   } else {
//     outputEl.textContent = name;
//   }
// }
