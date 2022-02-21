const MegaSize_main_H1 = document.querySelector(".MegaSize_main_H1");
var main_H1_collection = document.querySelectorAll(".main_H1");

const currentSection = document.querySelectorAll(".stepSection");

const mainBlock = document.querySelector(".typeButtonsBlockOFF");
const footer = document.querySelector(".NavigationFooter");
const backToMenuAhref = document.querySelector(".HeaderBlock");

const circle = document.querySelectorAll(".circles");
const frontCircle = document.querySelectorAll(".front");
const backCircle = document.querySelectorAll(".back");

function main_H1Animation() {
  setTimeout(() => {
    MegaSize_main_H1.setAttribute("class", "main_H1");
    main_H1_collection = document.querySelectorAll(".main_H1");
    setTimeout(() => {
      mainBlock.setAttribute("class", "typeButtonsBlockON");
      footer.classList.remove("opacity0");
      backToMenuAhref.classList.remove("opacity0");
    }, 0); //1500
  }, 0); //1500
}

function changeCase(pageNumber) {
  circle[pageNumber].classList.add("currentPage");

  for (let i = 0; i < 5; i++) {
    frontCircle[i].classList.remove("frontWhite");
    backCircle[i].classList.remove("backBlack");
  }

  for (let i = 0; i < 5; i++) {
    main_H1_collection[i].classList.add("hidden");
  }

  for (let i = 0; i < 5; i++) {
    currentSection[i].classList.add("hidden");
  }

  frontCircle[pageNumber].classList.add("frontWhite");
  backCircle[pageNumber].classList.add("backBlack");

  currentSection[pageNumber].classList.remove("hidden");

  main_H1_collection[pageNumber].classList.remove("hidden");
}

function changeCurrentPage(CurrentPage) {
  switch (CurrentPage) {
    case 0:
      changeCase(0);
      break;
    case 1:
      changeCase(1);
      break;
    case 2:
      changeCase(2);
      break;
    case 3:
      changeCase(3);
      break;
    case 4:
      changeCase(4);
      break;
    default:
      break;
  }
}
