let all = document.querySelector(".body__wrapper");
let burgerLine = document.querySelectorAll(".burger__line")
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
        all.classList.remove("active-burger");
        for(let line of burgerLine) {
            line.style.border = "1px solid #000000"
        }
    }
}
burger.onclick = function() {
    if (burgerStatus === 0) {
        burgerMenu.style.right = "0px"
        burger.style.transform = "rotate(-90deg)";
        burgerStatus = 1;
        all.classList.add("blackout");
        all.classList.add("active-burger");
        for(let line of burgerLine) {
            line.style.border = "1px solid #F1CDB3"
        }
    }
    else if (burgerStatus === 1) {
        burgerMenu.style.right = "-320px"
        burger.style.transform = "rotate(0deg)";
        burgerStatus = 0;
        all.classList.remove("blackout");
        all.classList.remove("active-burger");
        for(let line of burgerLine) {
            line.style.border = "1px solid #000000"
        }
    }     
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

  let image_1 = document.createElement('img');
  image_1.src = '../img/Our-friends/pets-katrine.png';
  image_1.alt = "Katrine";
  cardsArray.push(image_1);
  
  
  let image_2 = document.createElement('img');
  image_2.src = "../img/Our-friends/pets-jennifer.png";
  image_2.alt = "Jennifer";
  cardsArray.push(image_2);
  
  let image_3 = document.createElement('img');
  image_3.src = "../img/Our-friends/pets-woody.png";
  image_3.alt = "Woody";
  cardsArray.push(image_3);
  
  let image_4 = document.createElement('img');
  image_4.src = "../img/Our-friends/pets-sophia.png";
  image_4.alt = "Sophia";
  cardsArray.push(image_4);
  
  let image_5 = document.createElement('img');
  image_5.src = "../img/Our-friends/pets-timmy.png";
  image_5.alt = "Timmy";
  cardsArray.push(image_5);
  
  let image_6 = document.createElement('img');
  image_6.src = "../img/Our-friends/pets-charly.png";
  image_6.alt = "Charly";
  cardsArray.push(image_6);
  
  let image_7 = document.createElement('img');
  image_7.src = "../img/Our-friends/pets-scarlet.png";
  image_7.alt = "Scarlett";
  cardsArray.push(image_7);
  
  let image_8 = document.createElement('img');
  image_8.src = "../img/Our-friends/pets-freadie.png";
  image_8.alt = "Freddie";
  cardsArray.push(image_8);

  let pagesArr_1280 = [];
  let pagesArr_768 = [];
  let pagesArr_320 = [];
  shuffle(cardsArray);
  let page_1 = cardsArray.slice();
  pagesArr_1280.push(page_1);

  shuffle(cardsArray);
  let page_2 = cardsArray.slice();
  pagesArr_1280.push(page_2);

  shuffle(cardsArray);
  let page_3 = cardsArray.slice();
  pagesArr_1280.push(page_3);
  
  shuffle(cardsArray);
  let page_4 = cardsArray.slice();
  pagesArr_1280.push(page_4);

  shuffle(cardsArray);
  let page_5 = cardsArray.slice();
  pagesArr_1280.push(page_5);

  shuffle(cardsArray);
  let page_6 = cardsArray.slice();
  pagesArr_1280.push(page_5);

  shuffle(cardsArray);
  let page_7 = cardsArray.slice();
  pagesArr_1280.push(page_6);

  shuffle(cardsArray);
  let page_8 = cardsArray.slice();
  pagesArr_1280.push(page_7);

  shuffle(cardsArray);
  let page_9 = cardsArray.slice();
  pagesArr_1280.push(page_8);

  
  
  let allCards = pagesArr_1280.flat();

  
  for (let i = 0; i <Math.ceil(allCards.length/6); i++){
    pagesArr_768[i] = allCards.slice((i*6), (i*6) + 6);
  }

  for (let i = 0; i <Math.ceil(allCards.length/3); i++){
    pagesArr_320[i] = allCards.slice((i*3), (i*3) + 3);
  }

console.log(pagesArr_1280);
console.log(pagesArr_768);
console.log(pagesArr_320);

  const DOUBLE_ARROW_LEFT = document.querySelector(".double-arrow-left");
  const SINGLE_ARROW_LEFT = document.querySelector(".single-arrow-left");
  const PAGE_NUMBER = document.querySelector(".our-friend__button_number");
  const SINGLE_ARROW_RIGHT = document.querySelector(".single-arrow-right");
  const DOUBLE_ARROW_RIGHT = document.querySelector(".double-arrow-right");


  let quantityPages = 0;
  let actualArr;
  let cardsOnPage;

let page;

const CONTENT = document.querySelector('.our-friends__content')

function activeRightArrows() {
    DOUBLE_ARROW_LEFT.classList.remove("our-friend__button_active");
    SINGLE_ARROW_LEFT.classList.remove("our-friend__button_active");
    DOUBLE_ARROW_LEFT.classList.add("our-friend__button_disable");
    SINGLE_ARROW_LEFT.classList.add("our-friend__button_disable");
    DOUBLE_ARROW_RIGHT.classList.add("our-friend__button_active");
    SINGLE_ARROW_RIGHT.classList.add("our-friend__button_active");
    DOUBLE_ARROW_RIGHT.classList.remove("our-friend__button_disable");
    SINGLE_ARROW_RIGHT.classList.remove("our-friend__button_disable");
    DOUBLE_ARROW_RIGHT.removeAttribute("disabled");
    SINGLE_ARROW_RIGHT.removeAttribute("disabled");
    DOUBLE_ARROW_LEFT.setAttribute("disabled", "disabled");
    SINGLE_ARROW_LEFT.setAttribute("disabled", "disabled");
}

function activeLeftArrows() {
    DOUBLE_ARROW_RIGHT.classList.remove("our-friend__button_active");
    SINGLE_ARROW_RIGHT.classList.remove("our-friend__button_active");
    DOUBLE_ARROW_RIGHT.classList.add("our-friend__button_disable");
    SINGLE_ARROW_RIGHT.classList.add("our-friend__button_disable");
    DOUBLE_ARROW_LEFT.classList.add("our-friend__button_active");
    SINGLE_ARROW_LEFT.classList.add("our-friend__button_active");
    DOUBLE_ARROW_LEFT.classList.remove("our-friend__button_disable");
    SINGLE_ARROW_LEFT.classList.remove("our-friend__button_disable");
    DOUBLE_ARROW_LEFT.removeAttribute("disabled");
    SINGLE_ARROW_LEFT.removeAttribute("disabled");
    DOUBLE_ARROW_RIGHT.setAttribute("disabled", "disabled");
    SINGLE_ARROW_RIGHT.setAttribute("disabled", "disabled");
}

function insertImg() {
    for (let i = 0; i < cardsOnPage; i++) {
        let elem = document.createElement("div");
        elem.classList.add("our-friends__elem");
        CONTENT.append(elem);
        let name = document.createElement("div");
        name.classList.add("our-friends__name");
        let img = document.createElement('img');
        elem.prepend(name);
        elem.prepend(img);
        img.setAttribute("src", actualArr[page - 1][i].src);
        img.setAttribute("alt", actualArr[page - 1][i].alt);
        name.innerHTML = actualArr[page - 1][i].alt;
        let button = document.createElement("div");
        button.classList.add("our-friends__more");
        button.innerHTML = "Learn more";
        elem.id = img.alt;
        elem.append(button);   
        }
}


    
function size() {
    if ((document.documentElement.clientWidth > 768) && (quantityPages === 8 || quantityPages === 0) ) {
        CONTENT.innerHTML ='';
        page = 1;
        PAGE_NUMBER.innerHTML = page;
        quantityPages = 6;
        actualArr = pagesArr_1280;
        cardsOnPage = 8;
        insertImg();
        activeRightArrows()
    }
    if ((document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 425) &&
      (quantityPages === 6 || quantityPages === 16 || quantityPages === 0)) {
        CONTENT.innerHTML ='';
        page = 1;
        PAGE_NUMBER.innerHTML = page;
        quantityPages = 8;
        actualArr = pagesArr_768;
        cardsOnPage = 6;
        insertImg();
        activeRightArrows();
    }
    if (document.documentElement.clientWidth <= 425 && ( quantityPages === 8 || quantityPages === 0)) {
        CONTENT.innerHTML ='';
        page = 1;
        PAGE_NUMBER.innerHTML = page;
        quantityPages = 16;
        actualArr = pagesArr_320;
        cardsOnPage = 3;
        insertImg();
        activeRightArrows();
    }
    
}



DOUBLE_ARROW_LEFT.onclick = function() {
    page = 1;
    PAGE_NUMBER.innerHTML = page;
    CONTENT.innerHTML = '';
    insertImg();
    activeRightArrows();
}

DOUBLE_ARROW_RIGHT.onclick = function() {
    page = quantityPages;
    PAGE_NUMBER.innerHTML = page;
    CONTENT.innerHTML = '';
    insertImg();
    activeLeftArrows();
}

SINGLE_ARROW_RIGHT.onclick = function() {
    page++;
    PAGE_NUMBER.innerHTML = page;
    CONTENT.innerHTML = '';
    insertImg();
    SINGLE_ARROW_LEFT.classList.add("our-friend__button_active");
    SINGLE_ARROW_LEFT.removeAttribute("disabled");
    DOUBLE_ARROW_LEFT.classList.add("our-friend__button_active");
    DOUBLE_ARROW_LEFT.removeAttribute("disabled");
    if (page === quantityPages) {
        activeLeftArrows();
    }
}

SINGLE_ARROW_LEFT.onclick = function() {
    page--;
    PAGE_NUMBER.innerHTML = page;
    CONTENT.innerHTML = '';
    insertImg();
    SINGLE_ARROW_RIGHT.classList.add("our-friend__button_active");
    SINGLE_ARROW_RIGHT.removeAttribute("disabled");
    DOUBLE_ARROW_RIGHT.classList.add("our-friend__button_active");
    DOUBLE_ARROW_RIGHT.removeAttribute("disabled");
    if (page === 1) {
        activeRightArrows();
    }
}


size()
window.onresize = function() {
  size()
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
    all.classList.add('blackout');
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
        all.classList.remove('blackout');
    }
}
POP_2.onclick = function(event) {
  if(!event.target.closest(".popap__body")) {
      HTML.classList.remove("no__scroll");
      popupStatus = 0;
      for(let elem of POPUPS) {
          elem.classList.remove('popup__active');
      }
      all.classList.remove('blackout');
  }
}
POP_3.onclick = function(event) {
  if(!event.target.closest(".popap__body")) {
      HTML.classList.remove("no__scroll");
      popupStatus = 0;
      for(let elem of POPUPS) {
          elem.classList.remove('popup__active');
      }
      all.classList.remove('blackout');
  }
}
POP_4.onclick = function(event) {
  if(!event.target.closest(".popap__body")) {
      HTML.classList.remove("no__scroll");
      popupStatus = 0;
      for(let elem of POPUPS) {
          elem.classList.remove('popup__active');
      }
      all.classList.remove('blackout');
  }
}
POP_5.onclick = function(event) {
  if(!event.target.closest(".popap__body")) {
      HTML.classList.remove("no__scroll");
      popupStatus = 0;
      for(let elem of POPUPS) {
          elem.classList.remove('popup__active');
      }
      all.classList.remove('blackout');
  }
}
POP_6.onclick = function(event) {
  if(!event.target.closest(".popap__body")) {
      HTML.classList.remove("no__scroll");
      popupStatus = 0;
      for(let elem of POPUPS) {
          elem.classList.remove('popup__active');
      }
      all.classList.remove('blackout');
  }
}
POP_7.onclick = function(event) {
  if(!event.target.closest(".popap__body")) {
      HTML.classList.remove("no__scroll");
      popupStatus = 0;
      for(let elem of POPUPS) {
          elem.classList.remove('popup__active');
      }
      all.classList.remove('blackout');
  }
}
POP_8.onclick = function(event) {
  if(!event.target.closest(".popap__body")) {
      HTML.classList.remove("no__scroll");
      popupStatus = 0;
      for(let elem of POPUPS) {
          elem.classList.remove('popup__active');
      }
      all.classList.remove('blackout');
  }
}


















