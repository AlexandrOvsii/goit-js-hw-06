const categories = document.querySelector('#categories');
// console.log(categories);

const items = document.querySelectorAll('.item');
// console.log(items);

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const heading = item.querySelector('h2').textContent;
    // console.log(heading);

    const itemCount = item.querySelectorAll('li').length;
    // console.log(itemCount);

    
console.log(`Category: ${heading} \nElements: ${itemCount}`);
})
