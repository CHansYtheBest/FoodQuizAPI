const body = document.querySelector("body");
const checkboxes = document.querySelectorAll(".CheckboxButton");
const dietCheckboxMultiple = document.querySelectorAll(".dietCheckbox");
const typeButtons = document.querySelectorAll(".typeButton");
const CuisineButtons = document.querySelectorAll(".CuisineButton");
const intolarButtons = document.querySelectorAll(".intolarButton");

//Превращение кнопки в чекбокс с двумя стейтами
checkboxes.forEach((checkbox) => {
  var classList = checkbox.className.split(/\s+/);
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
  switch (classList[0]) {
    case "typeButton":
      checkbox.dataset.step = "type";
      break;
    case "CuisineButton":
      checkbox.dataset.step = "cuisine";
      break;
    case "dietCheckbox":
      checkbox.dataset.step = "diet";
      break;
    case "intolarButton":
      checkbox.dataset.step = "intolerances";
      break;
    default:
      break;
  }
});
