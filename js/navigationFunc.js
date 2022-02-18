const nextButton = document.querySelector(".NextButton");
const backButton = document.querySelector(".BackButton");
const NavFooter = document.querySelector("[data-page]");
var CurrentPage = NavFooter.dataset.page;

nextButton.addEventListener("click", (e) => {
  if (NavFooter.dataset.page == 4) {
  } else {
    CurrentPage++;
    NavFooter.dataset.page = CurrentPage;
  }
});

backButton.addEventListener("click", (e) => {
  if (NavFooter.dataset.page == 0) {
  } else {
    CurrentPage--;
    NavFooter.dataset.page = CurrentPage;
  }
});
