const MegaSize_main_H1 = document.querySelector(".MegaSize_main_H1");
const main_H1_collection = document.querySelector(".main_H1");

const currentSection = document.querySelectorAll(".stepSection");

const mainBlock = document.querySelector(".typeButtonsBlockOFF");
const footer = document.querySelector(".NavigationFooter");
const backToMenuAhref = document.querySelector(".HeaderBlock");

const circle = document.querySelectorAll(".circles");
const frontCircle = document.querySelectorAll(".front");
const backCircle = document.querySelectorAll(".back");

function main_H1Animation() {
  setTimeout(() => {
    mainBlock.setAttribute("class", "typeButtonsBlockON");
    footer.classList.remove("opacity0");
    backToMenuAhref.classList.remove("opacity0");
  }, 1500); //1500
}

function changeCase(pageNumber) {
  circle[pageNumber].classList.add("currentPage");

  for (let i = 0; i < 5; i++) {
    frontCircle[i].classList.remove("frontWhite");
    backCircle[i].classList.remove("backBlack");
  }

  frontCircle[pageNumber].classList.add("frontWhite");
  backCircle[pageNumber].classList.add("backBlack");

  changeCaseAnimantion(currentSection, pageNumber);
}

function changeCaseAnimantion(element, pageNumber) {
  for (let i = 0; i < 5; i++) {
    element[i].classList.add("hidden");
  }

  element[pageNumber].classList.add("opacity0");
  setTimeout(() => {
    element[pageNumber].classList.remove("opacity0");
    element[pageNumber].classList.add("opacity1");
  }, 300);
  element[pageNumber].classList.remove("opacity1");
  element[pageNumber].classList.remove("hidden");
}

function changeCurrentPage(CurrentPage) {
  switch (CurrentPage) {
    case 0:
      changeCase(0);
      main_H1_collection.textContent = "Step 1:";
      break;
    case 1:
      changeCase(1);
      main_H1_collection.textContent = "Step 2:";
      break;
    case 2:
      changeCase(2);
      main_H1_collection.textContent = "Step 3:";
      break;
    case 3:
      changeCase(3);
      main_H1_collection.textContent = "Step 4:";
      break;
    case 4:
      changeCase(4);
      main_H1_collection.textContent = "Step 5:";
      break;
    default:
      break;
  }
}
