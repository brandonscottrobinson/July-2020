"use strict";

//---------------------------#1------------------------------
let food = document.querySelectorAll(".food");

let total = 0;

food.forEach((button) => {
  button.addEventListener("click", () => {
    let amount = Number(button.getAttribute("data-amount"));
    total += amount;
    let totalParagraph = document.querySelector(".total");
    totalParagraph.innerText = `Total: $${total}`;
  });
});

//--------------------------#2-------------------------------
let form = document.querySelector(".money-form");

let coinContainer = document.querySelector(".coin-container");

//submit makes it let you both click and enter on the keyboard
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  let number = data.get(".amount");
  let type = data.get("type");
  for (let i = 0; i < number; i++) {
    let newCoin = document.createElement("div");
    newCoin.classList.add(type, "coin");
    newCoin.innerText = type;
    coinContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
  form.reset();
});

//--------------------------#3-------------------------------

let bulb = document.querySelector(".bulb");
let toggleButton = document.querySelector(".toggle");
let onSwitch = document.querySelector(".on");
let offSwitch = document.querySelector(".off");
let endSwitch = document.querySelector(".end");

onSwitch.addEventListener("click", () => {
  bulb.classList.add = "light";
});

offSwitch.addEventListener("click", () => {
  bulb.classList.remove = "light";
});

toggleSwitch.addEventListener("click", () => {
  bulb.classList.toggle = "light";
});
endSwitch.addEventListener("click", () => {
  bulb.remove();
});
