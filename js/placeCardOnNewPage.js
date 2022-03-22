const body = document.querySelector("body");

window.addEventListener("load", () => {
  let dataString = window.localStorage.getItem("data");
  const data = JSON.parse(dataString);
  console.log(data);
});
