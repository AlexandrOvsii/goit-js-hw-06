const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

inputEl.addEventListener("input", setName);


// const setName = () => {
//     let name = inputEl.value;//значение, которое будет вводиться в инпут будет записываться в нейм.
//     if(name === ''){ //если нейм - пустая строка - 
//         name = 'Anonymous';// - нейм = анонимус
//     }
//     outputEl.innerHTML = name; //елс, в аутпут присваивается значение нейм, которое вводится в инпут.велюе
// }

//вместо innerHTML --- textContent;

// function setName(event){
//     let name = inputEl.value;
//     if(name === ''){
//         name = 'Anonymous';
//     }
//     outputEl.textContent = name;
// }

//

function setName(event){
    let name = inputEl.value;
    if(name === ''){
        name = 'Anonymous';
    }
    outputEl.textContent = event.currentTarget.value;
}
