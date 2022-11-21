const buttons = document.querySelectorAll('.digits');
const operators = document.querySelectorAll('.operator');
const del = document.querySelector('.del');
const equal = document.querySelector('#equal');
const ac = document.querySelector('#ac');
const display = document.querySelector('.current-operand');
const playdis = document.querySelector('.previous-operand');
const point = document.querySelector('.point');
let displayValue = '';
let firstElement = '';
let operatorElement = '';
let secondElement = '';

buttons.forEach( function(element){
    element.addEventListener(`click`,function(e){
        if (firstElement !== '' && operatorElement === ''){
            display.innerHTML += '+'
            operatorElement = '+'
            display.innerHTML += e.target.innerText;
            displayValue += e.target.innerText;
        }
        else {
        display.innerHTML += e.target.innerText;
        displayValue += e.target.innerText;
        console.log(displayValue)
        return displayValue}
    });
});

operators.forEach(function(element){
    element.addEventListener(`click`, function(e){
        if (displayValue === '') {
            if (playdis.innerHTML !== ''){
                display.innerHTML += e.target.innerText;
                return operatorElement = e.target.innerText;
            }
            else {
                return
            }
        }
        else if (firstElement === ''){
            firstElement = displayValue;
            display.innerHTML += e.target.innerText;
            operatorElement = e.target.innerText;
            return displayValue = '';
        }
        else if (firstElement !== '' && operatorElement === ''){
            display.innerHTML += e.target.innerText;
            return operatorElement = e.target.innerText;
        }
        else {
            secondElement = displayValue;
            displayValue = operate(firstElement, secondElement, operatorElement)
                if (displayValue === 'no') {
                    return cancel ()
                }
                else {
                    playdis.innerHTML = display.innerHTML;
                    display.innerHTML = displayValue;
                    display.innerHTML += e.target.innerText;
                    operatorElement = e.target.innerText;
                    firstElement = displayValue;
                    secondElement = '';
                    return displayValue = '';
                }
        }
    });
});

del.addEventListener(`click`, () => {
    display.innerHTML = display.innerHTML
    .toString()
    .slice(0, -1);
    displayValue = displayValue
    .toString()
    .slice(0, -1);
})

point.addEventListener(`click`, () => {
    if (displayValue === '') {
        display.innerHTML += '0.'
        return displayValue += '0.'
    }
    else if (displayValue.includes('.')){
        display.innerHTML += ''
        return displayValue += ''
    }
    else {
        display.innerHTML += '.'
        return displayValue += '.'
    }
})

equal.addEventListener(`click`, () => {
    secondElement = displayValue;
    if (secondElement ===  ''){
        display.innerHTML += ''
        return displayValue += ''
    }
    else {
    displayValue = operate(firstElement, secondElement, operatorElement)
        if (displayValue === 'no') {
            return cancel ()
        }
        else {
            playdis.innerHTML = display.innerHTML;
            display.innerHTML = displayValue;
            operatorElement = '';
            firstElement = displayValue;
            secondElement = '';
            return displayValue = '';
        }
    }
})

ac.addEventListener(`click`, () => cancel ());

function cancel () {
    displayValue = '';
    firstElement = '';
    operatorElement = '';
    secondElement = '';
    display.innerHTML = '';
    playdis.innerHTML = '';
}

function operate (x, y, z) {
    if (z === '+') {
        return calculator.add(x, y)
    }

    else if (z === '-') {
        return calculator.sub(x, y)
    }

    else if (z === '*') {
        return calculator.mul(x,y)
    }

    else if (z === '/') {
        if (x === 0 || y === 0){
            return 'no'
        }
        else {
            let division = calculator.div(x, y)
            return division.toFixed(2)
        }
    }
}

const calculator = (() => {
    const add = (x, y) => x * 1 + y * 1;
    const sub = (x, y) => x - y;
    const mul = (x, y) => x * y;
    const div = (x, y) => x / y;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();