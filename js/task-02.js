const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsUl = document.getElementById("ingredients");

const ingredientsArr = [];

ingredients.forEach((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = `${ingredient}`;
  liEl.classList = "item";
  ingredientsArr.push(liEl);
});

ingredientsUl.append(...ingredientsArr);
