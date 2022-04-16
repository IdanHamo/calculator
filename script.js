let previousNumber = document.querySelector(".previous-operand");
let currentNumber = document.querySelector(".current-operand");

const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");

const deleteBtn = document.querySelector(".delete");
const clear = document.querySelector(".clear");

numberBtn.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (currentNumber.innerText.includes(".") && number === ".") {
      return;
    }
    currentNumber.innerText += e.target.innerText;
  });
});

let currentOperator;
operatorBtn.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    previousNumber.innerHTML = currentNumber.innerText;
    currentNumber.innerText = "";
    currentOperator = e.target.innerText;
  });
});

equal.addEventListener("click", () => {
  switch (currentOperator) {
    case "+":
      currentNumber.innerText =
        Number(previousNumber.innerText) + Number(currentNumber.innerText);
      previousNumber.innerText = "";
      break;

    case "-":
      currentNumber.innerText =
        Number(previousNumber.innerText) - Number(currentNumber.innerText);
      previousNumber.innerText = "";

      break;

    case "*":
      currentNumber.innerText =
        Number(previousNumber.innerText) * Number(currentNumber.innerText);
      previousNumber.innerText = "";

      break;

    case "÷":
      currentNumber.innerText =
        Number(previousNumber.innerText) / Number(currentNumber.innerText);
      previousNumber.innerText = "";

      break;
  }
});

clear.addEventListener("click", () => {
  previousNumber.innerText = "";
  currentNumber.innerText = "";
});

deleteBtn.addEventListener("click", () => {
  if (currentNumber) {
    currentNumber.innerText = currentNumber.innerText.slice(0, -1);
  }
});

dot.addEventListener("click", () => {
  if (currentNumber.innerText.includes(".")) {
    return;
  } else {
    currentNumber.innerText += ".";
  }
});
