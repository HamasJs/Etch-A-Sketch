"use strict";

const grid = document.querySelector(".grid");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const rainbow = document.querySelector(".rainbow");
const body = document.body;
const container = document.querySelector(".container");
const classic = document.querySelector(".classic");
const clear = document.querySelector('.clear');

//Helper Functions
const rand = function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }
  return hexColor;
};

const rem = function () {
  document
    .querySelector(".container")
    .removeChild(document.querySelector(".grid"));
};
//Event Listeners
grid.addEventListener("mouseover", function () {
  grid.style.backgroundColor = "black";
});

//Game start
const start = function () {
  for (let x = 1; x < 144; x++) {
    const newDiv = document.createElement("div");
    newDiv.className = `grid`;
    document.querySelector(".container").appendChild(newDiv);
    newDiv.addEventListener("mouseover", function () {
      newDiv.style.backgroundColor = "black";
    });
  }
};

//For rainbow
const rain = function () {
  for (let x = 1; x < 144; x++) {
    const newDiv = document.createElement("div");
    newDiv.className = `grid`;
    document.querySelector(".container").appendChild(newDiv);
    newDiv.addEventListener("mouseover", function () {
      newDiv.style.backgroundColor = rand();
    });
  }
};

//For Clearing
const cls = function () {
    for (let x = 1; x < 144; x++) {
      const newDiv = document.createElement("div");
      newDiv.className = `grid`;
      document.querySelector(".container").appendChild(newDiv);
      newDiv.addEventListener("mouseover", function () {
        newDiv.style.backgroundColor = 'white';
      });
    }
  };

//Game is started
start();
rainbow.addEventListener("click", function () {
  for (let x = 1; x < 144; x++) {
    rem();
  }
  rain();
});

classic.addEventListener("click", function () {
  for (let x = 1; x < 144; x++) {
    rem();
  }
  start();
});

clear.addEventListener("click",function()
{
    for (let x = 1; x < 144; x++) {
        rem();
      }
      start();
});
