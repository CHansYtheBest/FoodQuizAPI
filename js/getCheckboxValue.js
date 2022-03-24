const body = document.querySelector("body");
const checkboxes = document.querySelectorAll(".CheckboxButton");
const dietCheckboxMultiple = document.querySelectorAll(".dietCheckbox");

//Превращение кнопки в чекбокс с двумя стейтами
checkboxes.forEach((checkbox) => {
  checkbox.value = 0;
  checkbox.addEventListener("click", (e) => {
    if (checkbox.value == 0) {
      checkbox.value = 1;
      if (CurrentPage == 3) {
        checkbox.classList.add("checked2");
      } else {
        checkbox.classList.add("checked");
      }
    } else {
      checkbox.value = 0;
      if (CurrentPage == 3) {
        checkbox.classList.remove("checked2");
      }
      {
        checkbox.classList.remove("checked");
      }
    }
  });
});
