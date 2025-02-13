import sumar from "./sumador";
import multiplicar from "./multiplicador"

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const first_2 = document.querySelector("#primer-numero-multiplicador");
const second_2 = document.querySelector("#segundo-numero-multiplicador");
const form_2 = document.querySelector("#multiplicar-form");
const div_2 = document.querySelector("#resultado-div-2");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

form_2.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first_2.value);
  const secondNumber = Number.parseInt(second_2.value);

  div_2.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
