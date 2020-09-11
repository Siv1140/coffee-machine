"use script"

//Методы поиска по DOM-элементы

//устаревшие
/*let images = document.getElementsByTagName("img"); //по тегу
console.log(images);

let coffeeList = document.getElementsByClassName("coffee-item"); //по классу
console.log(coffeeList);

let coffee = document.getElementById("coffee-machine"); //по id (return null)
console.log(coffee);
*/
//современные методы поиска

/*let atm = document.querySelector(".atm-container"); //возвратит первый из всех
console.log(atm);

let coffeeItem = document.querySelector(".coffee-item");
console.log(coffeeItem);

let coffeeName = document.querySelectorAll("span");
console.log(coffeeName);

let buttonList = document.querySelector("button");
console.log(buttonList);

let capsList = document.querySelectorAll(".coffee-item img");
console.log(capsList);*/

//console.log(capsList[0].src);

/*let buttons = document.querySelectorAll(".coffee-item");
let cappuccinoButton = buttons[1];
console.log(cappuccinoButton);

let coffeeList = cappuccinoButton.parentElement.parentElement;  //родитель
console.log(coffeeList);

let nextCoffee = cappuccinoButton.nextElementSibling; //соседи
console.log(nextCoffee);

let previousCoffee = cappuccinoButton.previosElementSibling; //соседи
console.log(previousCoffee);

let cappuccinoChildren = cappuccinoButton.children; // дети
console.log(cappuccinoChildren);

let cappuccinoText = cappuccinoButton.querySelector("span");
*/
//изменение элементов
//изменение стиля
/*
let bigCup = document.querySelector(".cup");
console.log(bigCup.style.width);
bigCup.style.width = "300px";

bigCup.style.display = "none"; //спрятали
bigCup.style.display = ""; //вернули к статике как было в css

bigCup.style.backgroundColor = "red"; //вернули

bigCup.style.transition = "transform 5s"; //анимация
setTimeout(function() {
  bigCup.style.transform = "rotate(180deg)";
}, 5000); // функция и setInterval
*/

//изменение атрибутов
/*let bigCup = document.querySelector(".cup");
console.log( bigCup.hasAttribute("src") );

let cupSrc = bigCup.getAttribute("src");
console.log(cupSrc);

bigCup.setAttribute("src", "img/cappuccino.png");

bigCup.deleteAttribute( "src" );

*/

/*let btns = document.querySelectorAll(".coffee-item");
let espresso = btns[2];
let espressoImg = espresso.querySelector("img");
console.log(espressoImg);

let espressoSrc = espressoImg.getAttribute("src");
console.log(espressoSrc);

let bigCup = document.querySelector(".cup");
//console.log(bigCup);
bigCup.setAttribute("src", espressoSrc);
*/


//изменен внутр
/*let displayText = document.querySelector(".display-test");
console.log(displayText.innerText);
displayText.innerText = "Ваш <b>капучино</b> готовится";
displayText.innerHTML = "Ваш <b>латте</b> готовится";
*/

/*let coffeeList = document.querySelector(".coffee-list");

for (let i = 0; i < 2; i++ ) {
  coffeeList.innerHTML = coffeeList.innerHTML + `
    <div class = "coffee-item">
      <img src="img/americano.png" alt="Американо">
      <span>Американо - 50руб</span>
    </div>
  `;
}*/

/*let changeBtn = document.querySelector(".btn");

console.log(changeBtn.className);

changeBtn.className = "btn btn-success btn-block";

console.log(changeBtn.classList);

changeBtn.classList.add("p-3"); //добавить класс
changeBtn.classList.remove("my-2"); // удалить класс
console.log(changeBtn.classList.contains("btn")); //проверить наличие
*/

//Планирование

// let coffeeOper = document.querySelector(".coffee-oper");
// setTimeout( function() {
//   coffeeOper.style.backgroundColor = "red";
// }, 3000);

// setTimeout( function() {
//     coffeeOper.style.backgroundColor = "";
// }, 5000);

// setInterval( function() {
//   let display = document.querySelector(".display");
//   display.classList.toggle("bg-danger");
// }, 1000);

// let displayInerval =  setInterval( function() {
//   let display = document.querySelector(".display");
//   display.classList.toggle("bg-danger");
// }, 1000);
 
// setTimeout( function() {
//   clearInterval(displayInerval);
// }, 5000);

// function changeDisplayText() {
//   let display = document.querySelector(".display");
//   display.innerHTML = "Ваш кофе готовится";
// }

// //setTimeout(changeDisplayText, 5000);

// setTimeout( function() {
// changeDisplayText();
// },5000);

//События и слушатели событий

/*
--------------------------------------
события мыши

  click
  mouseover
  mouseleave - уводим курсор с элемента
  mousedown
  mouseup
  dblclick
  contextmenu
  
  ------------------------------------
  
  focus - начинается ввод в input
  change -  Изменить
  keydown - нажатие кнопки на клаве
  keyup - отжали кнопку
  
  transsitionend - транзиция окончена
  
  submit - отправка формы
  
  -----------------------------------
  
  https://htmlcheatsheet.com/

*/

//1. Вешаем слушателя с пом атрибута HTML

/*
  <div onclick="showMessage()">Нажми на меня</div>
                          <button class="btn btn-primary btn-block my-2" onclick="alert('Получаем сдачу')">Сдача</button>
*/

//2. Вешаем события через свойства

// let changeBtn = document.querySelector(".btn");
// changeBtn.onclick = function() {
//   alert("Даем сдачу");
// }

//changeBtn.onclick =   alert("Даем сдачу");

//3. Метод addEventListner(event, function)

// let changeBtn = document.querySelector(".btn");
// changeBtn.addEventListener("click", function() {
//   alert("Даем сдачу");
// });

// changeBtn.addEventListener("click", function() {
//   console.log("Даем сдачу");
// });

//Снимаем слушателя событий

// let changeBtn = document.querySelector(".btn");
// changeBtn.onclick = function() {
//   alert("Даем сдачу");
// };
// changeBtn.onclick = null;

// function handler() {
//   alert("Даем сдачу");
// }

// let changeBtn = document.querySelector(".btn", handler);
// changeBtn.addEventListener("click", handler);
// changeBtn.removeEventListener("click", handler);

// <div class="cup-container">
//    <img src="img/americano.png" alt="" class="cup">
// </div>


// let changeCup = document.querySelector(".cup-container");
// changeCup.onclick = function() {
// let displ = document.querySelector(".display");
// displ.style.backgroundColor = "red";
// };


// let coffeeButtons = document.querySelectorAll(".coffee-item");

// console.log(coffeeButtons);
 
// for (let i = 0; i < coffeeButtons.length; i++) { 
  
//   coffeeButtons[i].onclick = function() {
    
//     console.log(this);
    
//     //makeCoffee("Американо", 25, this);
    
//   }
// }












