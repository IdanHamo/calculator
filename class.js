class Calculator {
  constructor(previousNumberElement, currentNumberElement) {
    this.previousNumberElement = previousNumberElement;
    this.currentNumberElement = currentNumberElement;
  }

  clear() {
    this.previousNumber = "";
    this.currentNumber = "";
  }
  delete() {
    if (this.currentNumber) {
      currentNumber.innerText = currentNumber.innerText.slice(0, -1);
    }
  }

  appendNumber(number) {
      if (this.currentNumber.includes(".")&& number ===".") {
          return
      }
    this.currentNumber = this.currentNumber + number;
  }
}


let previousNumber = document.querySelector(".previous-operand");
let currentNumber = document.querySelector(".current-operand");

const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");

const deleteBtn = document.querySelector(".delete");
const clear = document.querySelector(".clear");
