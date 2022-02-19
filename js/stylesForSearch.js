const mainText = document.querySelector(".mainText");
const mainBlock = document.querySelector(".typeButtonsBlockOFF");
const circlesBlock = document.querySelector(".pageCounter");
const circle = document.querySelectorAll(".pageCounterElement");

function mainTextAnimation() {
  setTimeout(() => {
    mainText.setAttribute("class", "smallMainText");
    setTimeout(() => {
      mainBlock.setAttribute("class", "typeButtonsBlockON");
      circlesBlock.classList.remove("opacity0");
    }, 1500);
  }, 1500);
}

function changeCurrentPageView(CurrentPage) {
  circle.forEach((e) => {
    e.classList.remove("currentPage");
  });
  switch (CurrentPage) {
    case 0:
      circle[0].classList.add("currentPage");
      break;
    case 1:
      circle[1].classList.add("currentPage");
      break;
    case 2:
      circle[2].classList.add("currentPage");
      break;
    case 3:
      circle[3].classList.add("currentPage");
      break;
    case 4:
      circle[4].classList.add("currentPage");
      break;
    default:
      break;
  }
}
