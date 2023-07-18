const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

function setName() {
  let name = inputEl.value; //присваиваем переменной нейм значение, которое приходит из inputEl.value
  if (name === "") { //условие, если нейм === пустой строке - значит нейм = анонимусу
    name = "Anonymous";
  }
  outputEl.textContent = name; //ELSE, если строка НЕ пустая то в аутпут запишется значение, которое приходит из inputEl.value
}

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

