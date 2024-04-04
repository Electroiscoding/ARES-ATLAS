let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateSquareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateCubeRoot() {
  try {
    display.value = Math.cbrt(eval(display.value));
  } catch (error) {
    display.value = 'Error';
  }
}
