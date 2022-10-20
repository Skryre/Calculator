const buttons = document.querySelectorAll('button');

buttons.forEach( function(element){
    element.addEventListener(`click`,function(e){
        console.log(e.target.innerText);
    });
});

function sum (array) {
	return array.reduce((sum, numbers) => {
    return sum + numbers;
  }, 0);
};

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

function subtract (array) {
	return array.reduce((sum, numbers) => {
    return sum - numbers;
  }, 0);
};

function multiply (array) {
    return array.reduce((mult, numbers) => {
      return mult * numbers;
}, 1);
};

function divide (array) {
    return array.reduce((divi, numbers) => {
      return divi / numbers;
}, 1);
};

function operate (x, y, z) {
    if (z === '+') {
        add(x, y)
    }

    else if (z === '-') {
        sub(x, y)
    }

    else if (z === '*')
        mult(x,y)
    
    else if (z === '/') {
        if (x === 0 || y === 0){
            return 'naaaaahhhhh'
        }
        else {
            divi(x, y)
        }
    }
}

