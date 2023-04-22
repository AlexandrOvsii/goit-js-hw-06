const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsArray = document.querySelector('#ingredients')
// console.log(ingredientsArray);

ingredients.forEach(ingredient => {
const li = document.createElement('li')
console.log(li);

li.textContent = ingredient;
// console.log(li.textContent);

li.classList.add('item')
// console.log(li.item);

ingredientsArray.append(li)
})

