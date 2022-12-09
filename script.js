const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const button = document.querySelector("#button");
const error = document.querySelector(".error");
const costInfo = document.querySelector(".cost-info");
const totalCost = document.querySelector(".cost");

const showResult = function () {
  if (price.value == "" || people.value == "" || tip.value == 0) {
    error.textContent = "Nieprawidłowe dane";
    costInfo.style.display = "none";
  } else {
    error.textContent = "";
    showBill();
  }
};

const showBill = function () {
  let newPrice = parseFloat(price.value);
  let newPeople = parseInt(people.value);
  let newTip = parseFloat(tip.value);

  console.log(newPrice, newPeople, newTip);

  let sum = (newPrice + newPrice * newTip) / newPeople;

  costInfo.style.display = "block";
  totalCost.textContent = sum.toFixed(2);
};

button.addEventListener("click", showResult);
