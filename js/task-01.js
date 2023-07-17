const categories = document.getElementById('categories');
console.log(categories);

const items = categories.querySelectorAll('.item'); //получаем все категории из списка категорий по #categories
console.log(items);
console.log('Number of categories:', items.length); //получаем количество категорий по условию

items.forEach(item => { //проходим циклом по каждой категории
    const title = item.querySelector('h2'); //находим в айтеме н2
    console.log(`Category: ${title.textContent}`); // выводим содержимое н2
    const ulElementsCount = item.querySelectorAll('li'); // находим в айтеме li-шки
    console.log(`Elements: ${ulElementsCount.length}`); // выводим длину ulElementsCount
})
