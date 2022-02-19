const nextButton = document.querySelector(".NextButton");
const backButton = document.querySelector(".BackButton");
const doneButton = document.querySelector(".DoneButton");
const NavFooter = document.querySelector("[data-page]");
var CurrentPage = NavFooter.dataset.page;

//Листать вперёд
nextButton.addEventListener("click", (e) => {
  if (NavFooter.dataset.page == 4) {
  } else {
    CurrentPage++;
    NavFooter.dataset.page = CurrentPage;
  }
});

//Листать назад
backButton.addEventListener("click", (e) => {
  if (NavFooter.dataset.page == 0) {
  } else {
    CurrentPage--;
    NavFooter.dataset.page = CurrentPage;
  }
});

//Кнопка готово. Функционал в /getDataFromApi.js
doneButton.addEventListener("click", (e) => {
  createQuerry();
});
