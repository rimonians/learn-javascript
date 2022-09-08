const firstNum = document.querySelector("#firstNum");
const secondNum = document.querySelector("#secondNum");
const operator = document.querySelector("#operator");
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#result");

calculate.addEventListener("click", () => {
  const firstNumVal = Number(firstNum.value);
  const secondNumVal = Number(secondNum.value);
  const operatorVal = operator.value;

  if (operatorVal === "+") {
    result.textContent = `Addition of ${firstNumVal} & ${secondNumVal} is : ${
      firstNumVal + secondNumVal
    }`;
  } else if (operatorVal === "-") {
    result.textContent = `Substraction of ${firstNumVal} & ${secondNumVal} is : ${
      firstNumVal - secondNumVal
    }`;
  } else if (operatorVal === "*") {
    result.textContent = `Multiplication of ${firstNumVal} & ${secondNumVal} is : ${
      firstNumVal * secondNumVal
    }`;
  } else if (operatorVal === "/") {
    result.textContent = `Division of ${firstNumVal} & ${secondNumVal} is : ${
      firstNumVal / secondNumVal
    }`;
  }
});
