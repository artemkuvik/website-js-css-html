/* Заменим два flex контейнера в help на один с гридом и наоборот на 768px*/
let help = document.querySelector('.help')
let helpElem = document.querySelectorAll(".help__elem");
let container_1 = document.querySelector(".help__container_1");
let container_2 = document.querySelector(".help__container_2");

let helpGrid = document.createElement('div');
helpGrid.className = "help__container";

let check = 1;

function changeHelp() {
    if(document.documentElement.clientWidth <= 768) {
    container_1.remove()
    container_2.remove()
    check = 0;
    help.append(helpGrid);
    for(let elem of helpElem) {
        helpGrid.append(elem)
    }
    }

    if(document.documentElement.clientWidth > 768 && check === 0) {
    helpGrid.remove();
    help.append(container_1)
    help.append(container_2)
    for(let i = 0; i < 5; i++) {
        container_1.append(helpElem[i])
    }
    for(let i = 5; i < 9; i++) {
        container_2.append(helpElem[i])
    }
    check = 1;
    }
}
changeHelp()

window.onresize = function() {
    changeHelp()
} 


let notBurgerMenu  = document.querySelector(".wrapper__not-burger-menu");
let all = document.querySelector(".body__wrapper");
let burgerMenu = document.querySelector(".header__menu-ul");
let burger = document.querySelector(".header__burger");
let burgerStatus = 0;
document.body.onclick = function(event) {
    if(!event.target.closest(".header__menu-ul") && 
    !event.target.closest(".header__burger") && burgerStatus === 1 || 
    event.target.closest(".header__li")) {
        burgerMenu.style.right = "-320px"
        burger.style.transform = "rotate(0deg)";
        burgerStatus = 0;
        all.classList.remove("blackout");
        notBurgerMenu.classList.remove("active-burger-menu");
    }
}
burger.onclick = function() {
    if (burgerStatus === 0) {
        burgerMenu.style.right = "0px"
        burger.style.transform = "rotate(-90deg)";
        burgerStatus = 1;
        all.classList.add("blackout");
        notBurgerMenu.classList.add("active-burger-menu");
    }
    else if (burgerStatus === 1) {
        burgerMenu.style.right = "-320px"
        burger.style.transform = "rotate(0deg)";
        burgerStatus = 0;
        all.classList.remove("blackout");
        notBurgerMenu.classList.remove("active-burger-menu");
    }     
}



function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
const shuffle = (arr) => {
    let m = arr.length, t, i;
  
   
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }
  
    return arr;
  }

let cardsArray = [];
let cardsWrapper = document.querySelectorAll(".our-friends__name");
let image_1 = document.createElement('img');
image_1.src = 'img/Our-friends/pets-katrine.png';
image_1.alt = "Katrine";
cardsArray.push(image_1);


let image_2 = document.createElement('img');
image_2.src = "img/Our-friends/pets-jennifer.png";
image_2.alt = "Jennifer";
cardsArray.push(image_2);

let image_3 = document.createElement('img');
image_3.src = "img/Our-friends/pets-woody.png";
image_3.alt = "Woody";
cardsArray.push(image_3);

let image_4 = document.createElement('img');
image_4.src = "img/Our-friends/pets-sophia.png";
image_4.alt = "Sophia";
cardsArray.push(image_4);

let image_5 = document.createElement('img');
image_5.src = "img/Our-friends/pets-timmy.png";
image_5.alt = "Timmy";
cardsArray.push(image_5);

let image_6 = document.createElement('img');
image_6.src = "img/Our-friends/pets-charly.png";
image_6.alt = "Charly";
cardsArray.push(image_6);

let image_7 = document.createElement('img');
image_7.src = "img/Our-friends/pets-scarlet.png";
image_7.alt = "Scarlett";
cardsArray.push(image_7);

let image_8 = document.createElement('img');
image_8.src = "img/Our-friends/pets-freadie.png";
image_8.alt = "Freddie";
cardsArray.push(image_8);



shuffle(cardsArray);


let random_9 = randomInteger(0, 2);
let image_9 =  document.createElement('img');
image_9.src = cardsArray[random_9].src;
image_9.alt = cardsArray[random_9].alt;
cardsArray.push(image_9);



const ELEMS = document.querySelectorAll('.our-friends__elem');
for (let i = 0; i < 9; i++) {
    ELEMS[i].id =  cardsArray[i].alt;
    cardsWrapper[i].before(cardsArray[i]);
    cardsWrapper[i].innerHTML = cardsArray[i].alt;
}

const BTN_LEFT = document.querySelector(".our-friends__left");
const BTN_RIGHT = document.querySelector(".our-friends__right");
const CAROUSEL = document.querySelector(".our-friends__slider-line");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
const ACTIVE = document.querySelector("#item-active");
const SLIDER_WRAPPER = document.querySelector(".our-friends__slider");
const ARRROWS_WRAPPER_SMALL = document.querySelector(".our-friend__arrows-wrapper");
const ARRROWS_WRAPPER_BIG = document.querySelector(".our-friends__slider-wrapper");

function getArr(min, max) {
  let arr = [];
  let i = 0;
  while(i < max) {
    let rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    if(!arr.includes(rand)) {
      arr.push(rand)
      i++
    } 
  }
  return arr;
} 

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);



CAROUSEL.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    let previosArr = [];
    let previousItems = ACTIVE.innerHTML;
    
    ITEM_RIGHT.innerHTML = previousItems;
    const leftItems = ITEM_LEFT.innerHTML;
    ACTIVE.innerHTML = leftItems;
    ITEM_LEFT.innerHTML = "";

    if (document.documentElement.clientWidth <= 710 ) {
    previosArr.push(ACTIVE.firstElementChild.firstElementChild.getAttribute("alt"))
  } else {
    previosArr.push(ACTIVE.firstElementChild.firstElementChild.getAttribute("alt"))
    previosArr.push(ACTIVE.firstElementChild.nextElementSibling.firstElementChild.getAttribute("alt"))
    previosArr.push(ACTIVE.lastElementChild.firstElementChild.getAttribute("alt"))
  }

    let baseArray = cardsArray.slice(0, 8);
    let arrWithoutPrevios = [];
    
    for (let elem of baseArray) {
      if(!previosArr.includes(elem.alt)) {
        arrWithoutPrevios.push(elem)
      }
    }
  
 
     let cardsNumber = getArr(0, ACTIVE.children.length);
    for (let i = 0; i < ACTIVE.children.length; i++) {
      let elem = document.createElement("div");
      elem.classList.add("our-friends__elem");
      
      let img =  document.createElement('img');
      img.src = arrWithoutPrevios[cardsNumber[i]].src;
      img.alt = arrWithoutPrevios[cardsNumber[i]].alt;
      elem.prepend(img);
      let name = document.createElement("div");
      name.classList.add("our-friends__name");
      name.innerHTML = img.alt;
      elem.append(name);
      let button = document.createElement("div");
      button.classList.add("our-friends__more");
      button.innerHTML = "Learn more";
      elem.append(button);
      elem.id = img.alt;
      ITEM_LEFT.prepend(elem);
      }

  } else { (animationEvent.animationName === "move-right") 
    CAROUSEL.classList.remove("transition-right");
    let previosArr = [];
    let previousItems = ACTIVE.innerHTML;
    
    ITEM_LEFT.innerHTML = previousItems;
    const rightsItems = ITEM_RIGHT.innerHTML;
    ACTIVE.innerHTML = rightsItems;
    ITEM_RIGHT.innerHTML = "";

    if (document.documentElement.clientWidth <= 710 ) {
      previosArr.push(ACTIVE.firstElementChild.firstElementChild.getAttribute("alt"))
    } else {
      previosArr.push(ACTIVE.firstElementChild.firstElementChild.getAttribute("alt"))
      previosArr.push(ACTIVE.firstElementChild.nextElementSibling.firstElementChild.getAttribute("alt"))
      previosArr.push(ACTIVE.lastElementChild.firstElementChild.getAttribute("alt"))
    }
  
    let baseArray = cardsArray.slice(0, 8);
    let arrWithoutPrevios = [];
    
    for (let elem of baseArray) {
      if(!previosArr.includes(elem.alt)) {
        arrWithoutPrevios.push(elem)
      }
    }
  
    let cardsNumber = getArr(0, 4);
    for (let i = 0; i < ACTIVE.children.length; i++) {
      let elem = document.createElement("div");
      elem.classList.add("our-friends__elem");
      let random = randomInteger(0, 8);
      let img =  document.createElement('img');
      img.src = arrWithoutPrevios[cardsNumber[i]].src;
      img.alt = arrWithoutPrevios[cardsNumber[i]].alt;
      elem.prepend(img);
      let name = document.createElement("div");
      name.classList.add("our-friends__name");
      name.innerHTML = img.alt;
      elem.append(name);
      let button = document.createElement("div");
      button.classList.add("our-friends__more");
      button.innerHTML = "Learn more";
      elem.append(button);
      elem.id = img.alt;
      ITEM_RIGHT.append(elem);
      }

  }
 
  
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
})

function createElement() {
  let elem = document.createElement("div");
  elem.classList.add("our-friends__elem");
  let name = document.createElement("div");
  name.classList.add("our-friends__name");
  elem.append(name);
  let button = document.createElement("div");
  button.classList.add("our-friends__more");
  button.innerHTML = "Learn more";
  elem.append(button);
  return elem
}
//*Тут всё поломано*/
function changeSlider() {
  if (document.documentElement.clientWidth > 1114 &&
    ACTIVE.children.length === 2) { 
      let copyArr = cardsArray.slice(0, 8);
      shuffle(copyArr);
      console.log(copyArr);
      let random_9 = randomInteger(0, 2);
      let image_9 =  document.createElement('img');
      image_9.src = copyArr[random_9].src;
      image_9.alt = copyArr[random_9].alt;
      copyArr.push(image_9);
      ACTIVE.innerHTML = ''
      ITEM_LEFT.innerHTML = '';
      ITEM_RIGHT.innerHTML = '';
      
    for (let i = 0; i < 3; i++) {
      let elem = document.createElement("div");
      elem.classList.add("our-friends__elem");
      
      let img =  document.createElement('img');
      img.src = copyArr[i].src;
      img.alt = copyArr[i].alt;
      elem.prepend(img);
      let name = document.createElement("div");
      name.classList.add("our-friends__name");
      name.innerHTML = img.alt;
      elem.append(name);
      let button = document.createElement("div");
      button.classList.add("our-friends__more");
      button.innerHTML = "Learn more";
      elem.append(button);
      elem.id = img.alt;
      ITEM_LEFT.append(elem);
      }

      
      for (let i = 3; i < 6; i++) {
        let elem = document.createElement("div");
        elem.classList.add("our-friends__elem");
        
        let img =  document.createElement('img');
        img.src = copyArr[i].src;
        img.alt = copyArr[i].alt;
        elem.prepend(img);
        let name = document.createElement("div");
        name.classList.add("our-friends__name");
        name.innerHTML = img.alt;
        elem.append(name);
        let button = document.createElement("div");
        button.classList.add("our-friends__more");
        button.innerHTML = "Learn more";
        elem.append(button);
        elem.id = img.alt;
        ACTIVE.append(elem);
        }

        
        for (let i = 6; i < 9; i++) {
          let elem = document.createElement("div");
          elem.classList.add("our-friends__elem");
          
          let img =  document.createElement('img');
          img.src = copyArr[i].src;
          img.alt = copyArr[i].alt;
          elem.prepend(img);
          let name = document.createElement("div");
          name.classList.add("our-friends__name");
          name.innerHTML = img.alt;
          elem.append(name);
          let button = document.createElement("div");
          button.classList.add("our-friends__more");
          button.innerHTML = "Learn more";
          elem.append(button);
          elem.id = img.alt;
          ITEM_RIGHT.append(elem);
          }

     
    }
  if(document.documentElement.clientWidth <= 1114 &&
    ITEM_LEFT.children.length === 3) {
      
    
      
      ITEM_LEFT.firstElementChild.remove();
      ITEM_RIGHT.firstElementChild.remove();
      ACTIVE.firstElementChild.remove();
    }
  
  if (document.documentElement.clientWidth <= 710 && ACTIVE.children.length === 2) {
          ITEM_LEFT.lastElementChild.remove();
          ITEM_RIGHT.lastElementChild.remove();
          ACTIVE.lastElementChild.remove();
          console.log(ACTIVE.children.length);
        }
  if (document.documentElement.clientWidth <= 586) {
    ARRROWS_WRAPPER_SMALL.prepend(BTN_RIGHT)
    ARRROWS_WRAPPER_SMALL.prepend(BTN_LEFT)
  }
  if (document.documentElement.clientWidth > 586) {
    ARRROWS_WRAPPER_BIG.append(BTN_RIGHT)
    ARRROWS_WRAPPER_BIG.prepend(BTN_LEFT)
  }

  if (document.documentElement.clientWidth > 710 &&
    ACTIVE.children.length === 1) { 
      let copyArr = cardsArray.slice(0, 8);
      shuffle(copyArr);
      ACTIVE.innerHTML = ''
      ITEM_LEFT.innerHTML = '';
      ITEM_RIGHT.innerHTML = '';
      
    for (let i = 0; i < 2; i++) {
      let elem = document.createElement("div");
      elem.classList.add("our-friends__elem");
      
      let img =  document.createElement('img');
      img.src = copyArr[i].src;
      img.alt = copyArr[i].alt;
      elem.prepend(img);
      let name = document.createElement("div");
      name.classList.add("our-friends__name");
      name.innerHTML = img.alt;
      elem.append(name);
      let button = document.createElement("div");
      button.classList.add("our-friends__more");
      button.innerHTML = "Learn more";
      elem.append(button);
      elem.id = img.alt;
      ITEM_LEFT.append(elem);
      }

      
      for (let i = 2; i < 4; i++) {
        let elem = document.createElement("div");
        elem.classList.add("our-friends__elem");
        
        let img =  document.createElement('img');
        img.src = copyArr[i].src;
        img.alt = copyArr[i].alt;
        elem.prepend(img);
        let name = document.createElement("div");
        name.classList.add("our-friends__name");
        name.innerHTML = img.alt;
        elem.append(name);
        let button = document.createElement("div");
        button.classList.add("our-friends__more");
        button.innerHTML = "Learn more";
        elem.append(button);
        elem.id = img.alt;
        ACTIVE.append(elem);
        }

        
        for (let i = 4; i < 6; i++) {
          let elem = document.createElement("div");
          elem.classList.add("our-friends__elem");
          
          let img =  document.createElement('img');
          img.src = copyArr[i].src;
          img.alt = copyArr[i].alt;
          elem.prepend(img);
          let name = document.createElement("div");
          name.classList.add("our-friends__name");
          name.innerHTML = img.alt;
          elem.append(name);
          let button = document.createElement("div");
          button.classList.add("our-friends__more");
          button.innerHTML = "Learn more";
          elem.append(button);
          elem.id = img.alt;
          ITEM_RIGHT.append(elem);
          }

        }
 } 


 

changeSlider()

window.onresize = function() {
  changeSlider()
} 


const POPUPS = document.querySelectorAll(".popap")
let popupStatus = 0;
const HTML = document.querySelector('html');
HTML.onclick = function(e) {
    if(e.target.closest(".our-friends__elem")) {
    let card;
    for (let elem of POPUPS) {
        if (elem.id === e.target.closest(".our-friends__elem").id) {
            card = elem;
        }
    }
    console.log(card);
    HTML.classList.add("no__scroll");
    card.classList.add('popup__active');
    popupStatus = 1;
    }
}


const POP_1 =document.querySelector(".pop-1");
const POP_2 =document.querySelector(".pop-2");
const POP_3 =document.querySelector(".pop-3");
const POP_4 =document.querySelector(".pop-4");
const POP_5 =document.querySelector(".pop-5");
const POP_6 =document.querySelector(".pop-6");
const POP_7 =document.querySelector(".pop-7");
const POP_8 =document.querySelector(".pop-8");
POP_1.onclick = function(event) {
    if(!event.target.closest(".popap__body")) {
        HTML.classList.remove("no__scroll");
        popupStatus = 0;
        for(let elem of POPUPS) {
            elem.classList.remove('popup__active');
        }
    }
}
POP_2.onclick = function(event) {
  if(!event.target.closest(".popap__body")) {
      HTML.classList.remove("no__scroll");
      popupStatus = 0;
      for(let elem of POPUPS) {
          elem.classList.remove('popup__active');
      }
  }
}
POP_3.onclick = function(event) {
  if(!event.target.closest(".popap__body")) {
      HTML.classList.remove("no__scroll");
      popupStatus = 0;
      for(let elem of POPUPS) {
          elem.classList.remove('popup__active');
      }
  }
}
POP_4.onclick = function(event) {
  if(!event.target.closest(".popap__body")) {
      HTML.classList.remove("no__scroll");
      popupStatus = 0;
      for(let elem of POPUPS) {
          elem.classList.remove('popup__active');
      }
  }
}
POP_5.onclick = function(event) {
  if(!event.target.closest(".popap__body")) {
      HTML.classList.remove("no__scroll");
      popupStatus = 0;
      for(let elem of POPUPS) {
          elem.classList.remove('popup__active');
      }
  }
}
POP_6.onclick = function(event) {
  if(!event.target.closest(".popap__body")) {
      HTML.classList.remove("no__scroll");
      popupStatus = 0;
      for(let elem of POPUPS) {
          elem.classList.remove('popup__active');
      }
  }
}
POP_7.onclick = function(event) {
  if(!event.target.closest(".popap__body")) {
      HTML.classList.remove("no__scroll");
      popupStatus = 0;
      for(let elem of POPUPS) {
          elem.classList.remove('popup__active');
      }
  }
}
POP_8.onclick = function(event) {
  if(!event.target.closest(".popap__body")) {
      HTML.classList.remove("no__scroll");
      popupStatus = 0;
      for(let elem of POPUPS) {
          elem.classList.remove('popup__active');
      }
  }
}

console.log('120');

