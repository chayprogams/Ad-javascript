const factorialNumberInput = document.getElementById('factorialnumber');

function getValue(e) {
  e.preventDefault();
  const number = Number(factorialNumberInput.value);
  const result = calculateFactorial(number);
  if (result !== undefined) {
    const mainContainer = document.getElementsByClassName('main-container')[0];
    const resultDiv = document.createElement('div');
    resultDiv.textContent = result;
    resultDiv.classList.add('result');
    mainContainer.appendChild(resultDiv);
  }
  factorialNumberInput.value = ''
}

function calculateFactorial(number) {
  if (number < 0) {
    alert('Please enter a number greater than or equal to 0');
    return undefined;
  } else if (number === 0 || number === 1) {
    return 1;
  } else {
    let fact = 1;
    for (let i = 2; i <= number; i++) {
      fact *= i;
    }
    return fact;
  }
}
