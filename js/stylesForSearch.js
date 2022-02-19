const mainText = document.querySelector(".mainText");
const mainBlock = document.querySelector(".typeButtonsBlock");
const circlesBlock = document.querySelector(".pageCounter");
const circle = document.querySelectorAll(".pageCounterElement");

function mainTextAnime() {
  setTimeout(() => {
    mainText.setAttribute("class", "mainText2");
    setTimeout(() => {
      mainBlock.setAttribute("class", "typeButtonsBlock2");
      circlesBlock.classList.remove("opacity0");
    }, 1500);
  }, 2000);
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
