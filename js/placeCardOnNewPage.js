const body = document.querySelector("body");
const totalSection = document.querySelector(".totalMain");
const totalCards = document.querySelector(".totalCards");

window.addEventListener("load", () => {
    let dataString = window.localStorage.getItem("data");
    const data = JSON.parse(dataString);
    console.log(data);

    console.log(data.results[0].title);

    totalSection.append(totalCards);

    for (let i = 0; i < data.results.length; i++) {
        const totalCard = document.createElement("div");
        const totalCardImage = document.createElement("img");
        const totalCardText = document.createElement("h3");
        const totalCardButton = document.createElement("button");

        totalCard.classList.add("totalCard");
        totalCardImage.classList.add("totalImage");
        totalCardText.classList.add("totalText");
        totalCardButton.classList.add("totalButton");

        totalCardText.innerHTML = data.results[i].title;
        totalCardImage.setAttribute("src", data.results[i].image);
        totalCardButton.textContent = "View Recipe";

        totalCards.append(totalCard);
        totalCard.append(totalCardImage);
        totalCard.append(totalCardText);
        totalCard.append(totalCardButton);
    }
});
