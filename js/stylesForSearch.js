const MegaSize_main_H1 = document.querySelector(".MegaSize_main_H1");
const main_H1_collection = document.querySelector(".main_H1");

const currentSection = document.querySelectorAll(".stepSection");

const mainBlock = document.querySelector(".typeButtonsBlockOFF");
const footer = document.querySelector(".NavigationFooter");
const backToMenuAhref = document.querySelector(".HeaderBlock");

const circle = document.querySelectorAll(".circles");
const frontCircle = document.querySelectorAll(".front");
const backCircle = document.querySelectorAll(".back");

const backButtonFooter = document.querySelector(".BackButton");
const nextButtonFooter = document.querySelector(".NextButton");
const doneButtonFooter = document.querySelector(".DoneButton");

function main_H1Animation() {
  // body.style.pointerEvents = "none";
  setTimeout(() => {
    mainBlock.setAttribute("class", "typeButtonsBlockON");
    footer.classList.remove("opacity0");
    backToMenuAhref.classList.remove("opacity0");
    // body.style.pointerEvents = "all";
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

function changeMainText(text, string) {
  text.classList.add("opacity0");
  setTimeout(() => {
    text.classList.remove("opacity0");
    text.classList.add("opacity1");
    text.innerHTML = string;
  }, 300);
  text.classList.remove("opacity1");
}

function changeCurrentPage(CurrentPage) {
  switch (CurrentPage) {
    case 0:
      changeCase(0);
      backButtonFooter.classList.add("opacity0");
      changeMainText(main_H1_collection, "Step 1:<br />Choose type of food.");
      break;
    case 1:
      changeCase(1);
      backButtonFooter.classList.remove("opacity0");
      changeMainText(main_H1_collection, "Step 2:<br />Choose cuisine.");
      break;
    case 2:
      changeCase(2);
      changeMainText(main_H1_collection, "Step 3:<br />Choose your diet.");
      break;
    case 3:
      changeCase(3);
      changeMainText(main_H1_collection, "Step 4:<br />Choose your intolarance.");
      doneButtonFooter.classList.add("hidden");
      nextButtonFooter.classList.remove("hidden");
      break;
    case 4:
      changeCase(4);
      changeMainText(main_H1_collection, "Step 5:<br />Select ingredients.");
      nextButtonFooter.classList.add("hidden");
      doneButtonFooter.classList.remove("hidden");
      break;
    default:
      break;
  }
}
