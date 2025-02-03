let display = document.getElementById('display');

function clearDisplay() {
  display.value = ''; 
}

function appendToDisplay(value) {
  if (value === '.' && display.value.includes('.')) return;
 display.value += value;
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
