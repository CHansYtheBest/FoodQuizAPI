const body = document.querySelector("body");
const totalSection = document.querySelector(".totalMain");
const totalCards = document.querySelector(".totalCards");

window.addEventListener("load", () => {
  let dataString = window.localStorage.getItem("data");
  const data = JSON.parse(dataString);
  const query = localStorage.getItem("query");
  console.log(data, query);

  totalSection.append(totalCards);

  for (let i = 0; i < data.results.length; i++) {
    const totalCardImage = document.createElement("img");
    const totalCard = document.createElement("div");
    const totalCardRight = document.createElement("div");
    const totalCardRightCuisine = document.createElement("p");
    const totalCardText = document.createElement("h3");
    const totalCardButton = document.createElement("button");
    const totalParamBlock = document.createElement("div");
    const totalParamIcon1 = document.createElement("img");
    const totalParamText1 = document.createElement("p");
    const totalParamIcon2 = document.createElement("img");
    const totalParamText2 = document.createElement("p");
    const totalParamIcon3 = document.createElement("img");
    const totalParamText3 = document.createElement("p");
    const totalCardSummary = document.createElement("p");

    totalCard.classList.add("totalCard");
    totalCardImage.classList.add("totalImage");
    totalCardText.classList.add("totalText");
    totalCardButton.classList.add("totalButton");
    totalCardRight.classList.add("totalCardRight");
    totalCardRightCuisine.classList.add("totalCuisineText");
    totalParamBlock.classList.add("totalParamBlock");
    totalCardSummary.classList.add("totalSummary");

    if (data.results[i].cuisines[0] == null) {
      totalCardRightCuisine.textContent = "None";
    } else {
      totalCardRightCuisine.textContent = data.results[i].cuisines[0];
    }
    totalCardRightCuisine.textContent += " / ";
    if (data.results[i].cuisines[1] == undefined) {
      totalCardRightCuisine.textContent += "None";
    } else {
      totalCardRightCuisine.textContent += data.results[i].cuisines[1];
    }

    totalCardText.innerHTML = data.results[i].title;
    totalCardImage.setAttribute("src", data.results[i].image);
    totalCardButton.textContent = "View Full Recipe";
    totalCardSummary.innerHTML = data.results[i].summary;
    totalParamIcon1.setAttribute("src", "/images/smile.svg");
    totalParamText1.innerHTML = data.results[i].aggregateLikes;
    totalParamText1.innerHTML += " likes";
    totalParamIcon2.setAttribute("src", "/images/health.svg");
    totalParamText2.innerHTML = data.results[i].healthScore;
    totalParamText2.innerHTML += " health score";
    totalParamIcon3.setAttribute("src", "/images/time.svg");
    totalParamText3.innerHTML = data.results[i].readyInMinutes;
    totalParamText3.innerHTML += " min";
    totalCards.append(totalCard);
    totalCard.append(totalCardImage);

    totalParamBlock.append(totalParamIcon1);
    totalParamBlock.append(totalParamText1);
    totalParamBlock.append(totalParamIcon2);
    totalParamBlock.append(totalParamText2);
    totalParamBlock.append(totalParamIcon3);
    totalParamBlock.append(totalParamText3);
    totalCard.append(totalCardRight);
    totalCardRight.append(totalCardRightCuisine);
    totalCardRight.append(totalCardText);
    totalCardRight.append(totalParamBlock);
    totalCardRight.append(totalCardSummary);
    totalCardRight.append(totalCardButton);
  }
});
