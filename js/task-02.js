const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsArr = []; //создаем пустой массив

ingredients.forEach((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = `${ingredient}`;
  liEl.classList = "item";
  ingredientsArr.push(liEl);
});

const ingredientsEl = document.getElementById("ingredients");
ingredientsEl.append(...ingredientsArr);
