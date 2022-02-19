const typeButtons = document.querySelectorAll(".typeButton");
const CuisineButtons = document.querySelectorAll(".CuisineButton");
const ingredientsButtons = document.querySelectorAll(".ingredientsButton");
const intolarButtons = document.querySelectorAll(".intolarButton");

function addDataToArray() {
  let queryArr = [];

  for (let i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        queryArr[i] = addCheckboxDataToArr(typeButtons);
        break;
      case 1:
        queryArr[i] = addCheckboxDataToArr(CuisineButtons);
        break;
      case 2:
        queryArr[i] = addCheckboxDataToArr(ingredientsButtons);
        break;
      case 3:
        queryArr[i] = addCheckboxDataToArr(intolarButtons);
        break;
      default:
        break;
    }
  }

  if (ingredientsInput.value.length != 0) {
    //НИЖЕ ВРЕМЕННА СТРОЧКА! ИСПРАВИТЬ КАК ТОЛЬКО БУДЕТ РАБОТАТЬ /inputAutocomplete.js
    tempArr = ingredientsInput.value.split(" ");
    queryArr[4] = tempArr;
  }
  console.log(queryArr);
  return queryArr;
}

function addCheckboxDataToArr(buttons) {
  let tempArr = [];
  let i = 0;
  buttons.forEach((Button) => {
    if (Button.value == 1) {
      tempArr[i] = Button.dataset.value;
      i++;
    }
  });
  return tempArr;
}

function createQuerryString(category, queryArr) {
  let queryReady;
  queryReady = "&" + category + "=";
  for (let i = 0; i < queryArr.length; i++) {
    if (i != queryArr.length - 1) {
      queryReady += queryArr[i] + ",";
    } else {
      queryReady += queryArr[i];
    }
  }
  console.log(queryReady);
  return queryReady;
}

function createQuerry() {
  queryArr = addDataToArray();
  let queryReady = "";
  let querryTemp = "";
  for (let i = 0; i < queryArr.length; i++) {
    if (queryArr[i].length <= 0) {
    } else {
      switch (i) {
        case 0:
          querryTemp[i] = createQuerryString("type", queryArr[i]);
          break;
        case 1:
          querryTemp[i] = createQuerryString("cuisine", queryArr[i]);
          break;
        case 2:
          querryTemp[i] = createQuerryString("diet", queryArr[i]);
          break;
        case 3:
          querryTemp[i] = createQuerryString("intolerances", queryArr[i]);
          break;
        case 4:
          querryTemp[i] = createQuerryString("includeIngredients", queryArr[i]);
          break;
        default:
          break;
      }
    }
  }
}
