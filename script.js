"use strict"

let progressBar = document.querySelector(".progress-bar");
let bigCup = document.querySelector(".cup");
let state = "idle"; 
//отвечает за текущее состояние кофе-машины
// "idle" - ожидание
//"cooking" - готовка
//"ready" - готов, но не забран
//после забора state возвращается в idle

function makeCoffee(name, price, element) {
  
  if (state != "idle") {
    return;
  }
  
  //console.log(name, price);
  
  let balance = document.querySelector(".form-control");
  
  console.log( element );
  
  //console.log(balance.getAttribute("value"));
  
  console.log( balance.value );
  
  if ( +balance.value >= price) {
    
    balance.value -= price;
    
    balance.style.backgroundColor = "";
    
    changeDisplayText(`Ваш ${name} готовится`);
    
    state = "cooking";
    
    let coffeeCup = element.querySelector("img");
    let cupSrc = coffeeCup.getAttribute("src");
    console.log(cupSrc);
    bigCup.setAttribute("src", cupSrc);
    bigCup.style.display = "inline";
    
    
        let readyPercent = 0;
        let cookingIntervar = setInterval(function() {
        readyPercent++;
        //console.log(readyPercent);
        bigCup.style.opacity = readyPercent + "%";
        progressBar.style.width = readyPercent + "%";
        changeDisplayText(`Ваш ${name} готовится. ${readyPercent}%`);
        
        if(readyPercent >= 100) {
          clearInterval(cookingIntervar);
          changeDisplayText(`Ваш ${name} готов !`);
          state = "ready";
          bigCup.style.cursor = "pointer";
          bigCup.onclick = function() {
            takeCoffee();
          };
        }
    }, 30);
    
    
  } else {
    
    balance.style.backgroundColor = "red";
    
    changeDisplayText("Недостаточно средств");
    
  }
  
}


function takeCoffee() {
  bigCup.style.display = "none";
  bigCup.style.opacity = 0;
  progressBar.style.width = 0;
  changeDisplayText("Выберите кофе");
  bigCup.onclick = null;
//  state = "ready";
  state = "idle";
  
}



function changeDisplayText(message) {
  
  let displayText = document.querySelector(".display-test");
  
  displayText.innerHTML = message;
  
}

