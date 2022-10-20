const buttons = document.querySelectorAll('.digits');
const operators = document.querySelectorAll('.operator');
const del = document.querySelector('.del');
const equal = document.querySelector('#equal');
const ac = document.querySelector('#ac');
const display = document.querySelector('.current-operand');
let displayValue = '';


//for (let i = 0; i < buttons.length; i++) {
//    buttons[i].addEventListener("click", function() {
//      display.innerHTML += this.innerText;
//    });
//};

buttons.forEach( function(element){
    element.addEventListener(`click`,function(e){
        display.innerHTML += e.target.innerText;
        displayValue += e.target.innerText;
        console.log(displayValue)
        return displayValue
    });
});


ac.addEventListener(`click`, ()=> 
    display.innerHTML = '',
);

del.addEventListener(`click`, ()=>
    console.log(displayValue)
);

function add (x, y){
    return x+y;
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

    else if (z === '*')
    return mult(x,y)
    
    else if (z === '/') {
        if (x === 0 || y === 0){
            return 'naaaaahhhhh'
        }
        else {
            return divi(x, y)
        }
    }
}
