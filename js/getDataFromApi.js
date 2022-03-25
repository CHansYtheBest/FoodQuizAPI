const typeButtons = document.querySelectorAll(".typeButton");
const CuisineButtons = document.querySelectorAll(".CuisineButton");
const intolarButtons = document.querySelectorAll(".intolarButton");

function addDataToArray() {
  let queryArr = [];
  let buttonTypes = [typeButtons, CuisineButtons, dietCheckboxMultiple, intolarButtons];

  for (let i = 0; i < buttonTypes.length; i++) {
    queryArr.push(addCheckboxDataToArr(buttonTypes[i]));
  }

  if (choosedValueArray.length != 0) {
    queryArr.push(choosedValueArray);
  }
  return queryArr;
}

function addCheckboxDataToArr(buttons) {
  let step = buttons[0].dataset.step;
  let checkedArr = [];
  let queryObj = {
    step,
    checkedArr,
  };
  let i = 0;
  buttons.forEach((Button) => {
    if (Button.value == 1) {
      checkedArr[i] = Button.dataset.value;
      i++;
    }
  });
  if (checkedArr.length == 0) {
  } else {
    return queryObj;
  }
}

function createQuerryString(queryArr) {
  let queryReady;
  queryReady = "&" + queryArr.step + "=";
  for (let i = 0; i < queryArr.checkedArr.length; i++) {
    if (i != queryArr.checkedArr.length - 1) {
      queryReady += queryArr.checkedArr[i] + ",";
    } else {
      queryReady += queryArr.checkedArr[i];
    }
  }
  return queryReady;
}

function createQuerry() {
  let queryCheck = addDataToArray();
  queryArr = queryCheck.filter(Boolean);
  console.log(queryArr);
  let queryReady = "";
  let querryTemp = [];
  for (let i = 0; i < queryArr.length; i++) {
    querryTemp[i] = createQuerryString(queryArr[i]);
    queryReady += querryTemp[i];
  }
  console.log(queryReady);
  getData(queryReady);
}

function getData(queryReady) {
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a5dd116b2a6a41218a0ff5168be6a96e&number=100&addRecipeInformation=true${queryReady}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      if (data["totalResults"] == 0) {
        alert("No results found, try again");
        CurrentPage = 0;
        NavFooter.dataset.page = CurrentPage;
        changeCurrentPage(CurrentPage);
        return;
      } else {
        let dataString = JSON.stringify(data);
        localStorage.setItem("data", dataString);
        localStorage.setItem("query", queryReady);
        window.open("/html/apiResult.html", "_blank");
      }
    });
}
