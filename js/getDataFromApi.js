function addDataToArray() {
  let queryArr = [];
  let i = 0;
  checkboxes.forEach((checkbox) => {
    if (checkbox.value == 1) {
      queryArr[i] = checkbox.dataset.value;
      i++;
    }
  });
  i = 0;
  if (ingredientsInput && ingredientsInput.length == 0) {
    //НИЖЕ ВРЕМЕННА СТРОЧКА! ИСПРАВИТЬ КАК ТОЛЬКО БУДЕТ РАБОТАТЬ /inputAutocomplete.js
    queryArr[queryArr.length] = ingredientsInput.value;
  }
  console.log(queryArr);
}
