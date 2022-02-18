const body = document.querySelector("body");
const checkboxes = document.querySelectorAll(".CheckboxButton");

checkboxes.forEach((checkbox) => {
  checkbox.value = 0;
  checkbox.addEventListener("click", (e) => {
    if (checkbox.value == 0) {
      checkbox.value = 1;
      checkbox.classList.add("checked");
    } else {
      checkbox.value = 0;
      checkbox.classList.remove("checked");
    }
  });
});
