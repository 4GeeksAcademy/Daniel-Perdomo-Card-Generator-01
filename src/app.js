import "bootstrap";
import "./style.css";

window.onload = function() {
  newCard();
};

function newCard() {
  let icons = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  let randomIcon = Math.floor(Math.random() * icons.length);
  let randomNumber = Math.floor(Math.random() * numbers.length);

  document.querySelector("#top").innerHTML = icons[randomIcon];
  document.querySelector("#number").innerHTML = numbers[randomNumber];
  document.querySelector("#bottom").innerHTML = icons[randomIcon];

  let colorSuit =
    icons[randomIcon] === "♦" || icons[randomIcon] === "♥"
      ? "text-danger"
      : "text-dark";
  document.querySelector("#top").className = colorSuit;
  document.querySelector("#number").className = colorSuit;
  document.querySelector("#bottom").className = colorSuit;
}

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  newCard();
});
