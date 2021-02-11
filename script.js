//#region numeric buttons
// const zeroButton = document.querySelector("#zero");
// const oneButton = document.querySelector("#one");
// const twoButton = document.querySelector("#two");
// const threeButton = document.querySelector("#three");
// const fourButton = document.querySelector("#four");
// const fiveButton = document.querySelector("#five");
// const sixButton = document.querySelector("#six");
// const sevenButton = document.querySelector("#seven");
// const eightButton = document.querySelector("#eight");
// const nineButton = document.querySelector("#nine");
// const addButton = document.querySelector("#add");
// const subtractButton = document.querySelector("#subtract");
// const multiplyButton = document.querySelector("#multiply");
// const divideButton = document.querySelector("#divide");
//#endregion

const equalsButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const displayDiv = document.querySelector("#display");

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");

let result = 0;
let inputs = [];

init();

function init() {
  displayDiv.textContent = 0;
  inputs = [];
  result = 0;
}

function typeOnDisplay(e) {
  inputs.push(e.target.textContent);
  displayDiv.textContent = inputs.join("");
  // console.log(inputs);
}

numberButtons.forEach((button) => {
  button.addEventListener("click", typeOnDisplay);
});

operationButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    inputs.push(e.target.textContent);
  });
});

clearButton.addEventListener("click", (e) => {
  init();
});

deleteButton.addEventListener("click", (e) => {
  inputs.pop();
  inputs.length === 0
    ? (displayDiv.textContent = 0)
    : (displayDiv.textContent = inputs.join(""));
});

// Cannot divide by zero
equalsButton.addEventListener("click", (e) => {
  result = eval(inputs.join(""));
  displayDiv.textContent = result;
  console.log(inputs);
  // inputs = [];
});

// attach page with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Esc" || e.key === "Escape") {
    init();
  } else if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/"
  ) {
    inputs.push(e.target.textContent);
    displayDiv.textContent = inputs.join("");
  }
  // (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' ||
  // key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';

  /*
  // alert("document listen to keydown");
  switch (e.key) {
    case "Digit0":
    case "Digit1":
    case "Digit2":
    case "Digit3":
    case "Digit4":
    case "Digit5":
    case "Digit6":
    case "Digit7":
    case "Digit8":
    case "Digit9":
    case "Numpad0":
    case "Numpad1":
    case "Numpad2":
    case "Numpad3":
    case "Numpad4":
    case "Numpad5":
    case "Numpad6":
    case "Numpad7":
    case "Numpad8":
    case "Numpad9":
    case "48":
    case "48":
    case "49":
    case "50":
    case "51":
    case "52":
    case "53":
    case "54":
    case "55":
    case "56":
    case "57":
    case "96":
    case "97":
    case "98":
    case "99":
    case "100":
    case "101":
    case "102":
    case "103":
    case "104":
    case "105":
    case "106":
    case "107":
    case "109":
    case "110":
    case "111":
      // inputs.push(e.target.textContent);
      // typeOnDisplay(e);
      inputs.push(e.target.textContent);
      console.log(inputs);
      displayButton.textContent = inputs.join("");
      break;
    case "Esc":
      init();
      // alert("Esc key pressed");
      break;
    case "Escape":
      init();
      break;
    default:
      console.log(`Sorry, we are out of ${e.key}.`);
     
  } */
});

/*
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})
*/

/*
const controlIds = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "add",
  "subtract",
  "multiply",
  "divide",
  "decimal",
  "clear",
  "display",
];

let genCode = ``;
controlIds.forEach((control) => {
  genCode += `const ${control}Button = document.querySelector("#${control}");\n`;
});
console.log(genCode);
*/
