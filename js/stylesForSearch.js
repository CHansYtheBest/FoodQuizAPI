const step1_H1 = document.querySelector(".step1_H1");
const mainBlock = document.querySelector(".typeButtonsBlockOFF");
const footer = document.querySelector(".NavigationFooter");
const circle = document.querySelectorAll(".pageCounterElement");

function step1_H1Animation() {
  setTimeout(() => {
    step1_H1.setAttribute("class", "smallstep1_H1");
    setTimeout(() => {
      mainBlock.setAttribute("class", "typeButtonsBlockON");
      footer.classList.remove("opacity0");
    }, 1500);
  }, 1500);
}

function changeCurrentPage(CurrentPage) {
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
