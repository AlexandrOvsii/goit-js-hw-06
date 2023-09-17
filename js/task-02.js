const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.getElementById('ingredients');


// ingredients.forEach(ingredient => {
//   const liEl = document.createElement('li')
//   liEl.textContent = ingredient
//   liEl.classList.add('item')
// console.log(liEl)
//   // ingredientsEl.insertAdjacentHTML('beforeend', liEl)
//   ingredientsEl.append(liEl)
// })
let markup = [];

ingredients.forEach(ingredient => {
  const liEl = document.createElement('li')
  liEl.textContent = ingredient
  liEl.classList.add('item')
console.log(liEl)
  markup.push(liEl)
  ingredientsEl.append(liEl)

})