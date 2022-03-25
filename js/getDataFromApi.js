function createQuerry() {
  let queryCheck = addDataToArray();
  queryObj = queryCheck.filter(Boolean);
  console.log(queryObj);
  let queryReady = "";
  let querryTemp = [];
  for (let i = 0; i < queryObj.length; i++) {
    querryTemp[i] = createQuerryString(queryObj[i]);
    queryReady += querryTemp[i];
  }
  console.log(queryReady);
  getData(queryReady);
}

function addDataToArray() {
  let queryObj = [];
  let buttonTypes = [typeButtons, CuisineButtons, dietCheckboxMultiple, intolarButtons];

  for (let i = 0; i < buttonTypes.length; i++) {
    queryObj.push(addCheckboxDataToArr(buttonTypes[i]));
  }

  if (choosedValueArray.length != 0) {
    let ingredObj = {
      step: "includeIngredients",
      checkedArr: choosedValueArray,
    };
    queryObj.push(ingredObj);
  }
  return queryObj;
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

function createQuerryString(queryObj) {
  let queryReady;
  queryReady = "&" + queryObj.step + "=";
  for (let i = 0; i < queryObj.checkedArr.length; i++) {
    if (i != queryObj.checkedArr.length - 1) {
      queryReady += queryObj.checkedArr[i] + ",";
    } else {
      queryReady += queryObj.checkedArr[i];
    }
  }
  return queryReady;
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
        window.open("/html/apiResult.html", "_self");
      }
    });
}
