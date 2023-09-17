// const itemsEl = document.querySelectorAll(".item"); //получаем все категории из списка категорий по #categories

// console.log("Number of categories:", itemsEl.length); //получаем количество категорий по условию

// // items.forEach((item) => {
// //   //проходим циклом по каждой категории
// //   const title = item.querySelector("h2"); //находим в айтеме н2
// //   console.log(`Category: ${title.textContent}`); // выводим содержимое н2
// //   const ulElementsCount = item.querySelectorAll("li"); // находим в айтеме li-шки
// //   console.log(`Elements: ${ulElementsCount.length}`); // выводим длину ulElementsCount
// // });

// itemsEl.forEach((item) => {
//   //проходим циклом по каждой категории
//   const title = item.firstElementChild; //(либо item.firstElementChild.textContent)
//   console.log(`Category: ${title.textContent}`); // выводим содержимое первого дочернего эл-та
//   const ulElementsCount = item.lastElementChild.children; // находим в айтеме li-шки через посл. дочерний узел айтема lastElementChild и дочерние узлы в нем
//   console.log(`Elements: ${ulElementsCount.length}`); // выводим длину ulElementsCount
// });

const liEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${liEl.length}`);

liEl.forEach((item) => {
  const title = item.firstElementChild.textContent;
  console.log(`Category: ${title}`);
  const liLength = item.lastElementChild.children.length;
  console.log(`Elements: ${liLength}`);
});
