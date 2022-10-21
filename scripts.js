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
        if (firstElement === ''){
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
    if (displayValue.includes('.')){
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

function add (x, y){
    return ((x*1) + (y*1));
}

function sub (x, y){
    return x-y;
}

function mult (x, y){
    return x*y;
}

function divi (x, y){
    return x/y;
}

function operate (x, y, z) {
    if (z === '+') {
        return add(x, y)
    }

    else if (z === '-') {
        return sub(x, y)
    }

    else if (z === '*') {
        return mult(x,y)
    }

    else if (z === '/') {
        if (x === 0 || y === 0){
            return 'no'
        }
        else {
            let du = divi(x, y)
            return du.toFixed(2)
        }
    }
}
