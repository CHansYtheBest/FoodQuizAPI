const ingredientsInput = document.querySelector(".ingredientsInput");
const addButton = document.querySelector(".inputAddButton");
const cardsBlock = document.querySelector(".ingredientsChoosed");
const clearButton = document.querySelector(".clearButton");

var nameMas = [];
let choosedValueArray = [];

const Autocomplete = (selector) => {
  let inputs = document.querySelectorAll(selector);

  function ciSearch(what = "", where = "") {
    return where.toUpperCase().search(what.toUpperCase());
  }

  inputs.forEach((input) => {
    input.classList.add("autocomplete-input");
    let wrap = document.createElement("div");
    wrap.className = "autocomplete-wrap";
    input.parentNode.insertBefore(wrap, input);
    wrap.appendChild(input);

    let list = document.createElement("div");
    list.className = "autocomplete-list";
    wrap.appendChild(list);

    let matches = [];
    let listItems = [];
    let focusedItem = -1;

    function setActive(active = true) {
      if (active) wrap.classList.add("active");
      else wrap.classList.remove("active");
    }

    function focusItem(index) {
      if (!listItems.length) return false;
      if (index > listItems.length - 1) return focusItem(0);
      if (index < 0) return focusItem(listItems.length - 1);
      focusedItem = index;
      unfocusAllItems();
      listItems[focusedItem].classList.add("focused");
    }
    function unfocusAllItems() {
      listItems.forEach((item) => {
        item.classList.remove("focused");
      });
    }
    function selectItem(index) {
      if (!listItems[index]) return false;
      input.value = listItems[index].innerText;
      setActive(false);
    }

    input.addEventListener("input", () => {
      let value = input.value;
      fetch(
        `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=a5dd116b2a6a41218a0ff5168be6a96e&number=5&query=${value}`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            nameMas[i] = data[i].name;
          }
          if (!value) return setActive(false);

          list.innerHTML = "";
          listItems = [];

          nameMas.forEach((dataItem, index) => {
            let search = ciSearch(value, dataItem);
            if (search === -1) return false;
            matches.push(index);

            let parts = [
              dataItem.substr(0, search),
              dataItem.substr(search, value.length),
              dataItem.substr(search + value.length, dataItem.length - search - value.length),
            ];

            let item = document.createElement("div");
            item.className = "autocomplete-item";
            item.innerHTML = parts[0] + "<strong>" + parts[1] + "</strong>" + parts[2];
            list.appendChild(item);
            listItems.push(item);

            item.addEventListener("click", function () {
              selectItem(listItems.indexOf(item));
            });
          });

          if (listItems.length > 0) {
            focusItem(0);
            setActive(true);
          } else setActive(false);
        });

      input.addEventListener("keydown", (e) => {
        let keyCode = e.keyCode;

        switch (keyCode) {
          case 40:
            // arrow down
            e.preventDefault();
            focusedItem++;
            focusItem(focusedItem);
            break;
          case 38:
            //arrow up
            e.preventDefault();
            if (focusedItem > 0) focusedItem--;
            focusItem(focusedItem);
            break;
          case 27:
            //escape
            setActive(false);
            break;
          case 13:
            //enter
            selectItem(focusedItem);
            break;
          default:
            break;
        }
      });

      document.body.addEventListener("click", function (e) {
        if (!wrap.contains(e.target)) setActive(false);
      });
    });

    addButton.addEventListener("click", function (e) {
      if (choosedValueArray.length > 0) {
        for (let i = 0; i < choosedValueArray.length; i++) {
          if (input.value == choosedValueArray[i]) {
            console.log("have");
            break;
          } else {
            choosedValueArray.push(input.value);
            console.log(choosedValueArray);
          }
        }
      } else {
        choosedValueArray.push(input.value);
      }

      // let card = document.createElement("div");
      // let cardButton = document.createElement("button");

      // card.setAttribute("class", "ingredCard");
      // cardButton.setAttribute("class", "ingredCardButton");

      // cardsBlock.appendChild(card);
      // card.appendChild(cardButton);

      // cardButton.textContent = input.value;

      input.value = "";
    });

    clearButton.addEventListener("click", function () {
      input.value = "";
    });
  });
};
