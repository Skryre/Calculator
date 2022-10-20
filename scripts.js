const buttons = document.querySelectorAll('.digits');
const operators = document.querySelectorAll('.operator');
const del = document.querySelector('.del');
const equal = document.querySelector('#equal');
const ac = document.querySelector('#ac');
const display = document.querySelector('.current-operand');
const playdis = document.querySelector('.previous-operand');
let displayValue = '';
let firstElement = '';
let operatorElement = '';
let secondElement = '';

buttons.forEach( function(element){
    element.addEventListener(`click`,function(e){
        display.innerHTML += e.target.innerText;
        displayValue += e.target.innerText;
        console.log(displayValue)
        return displayValue
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
        else {
            secondElement = displayValue;
            displayValue = operate(firstElement, secondElement, operatorElement)
                if (displayValue = 'no') {
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

ac.addEventListener(`click`, () => cancel ());

function cancel () {
    displayValue = '';
    firstElement = '';
    operatorElement = '';
    secondElement = '';
    display.innerHTML = '';
    playdis.innerHTML = '';
}

del.addEventListener(`click`, () => {
    console.log(displayValue)
});

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
            return divi(x, y)
        }
    }
}
