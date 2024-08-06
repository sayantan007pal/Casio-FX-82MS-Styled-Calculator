function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        let expression = display.innerText;
        if (expression.includes('sqrt(')) {
            expression = expression.replace('sqrt(', 'Math.sqrt(').replace(')', ')');
        }
        display.innerText = eval(expression);
    } catch (e) {
        display.innerText = 'Error';
    }
}
