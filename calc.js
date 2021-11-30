const add = function(a, b) {
	return a + b;
};
const addbutton = document.getElementById('add');


const subtract = function(a, b) {
	return a - b;
};

const divide = function(a, b) {
	return a / b;
};

const multiply = function(a, b) {
  return a * b;
};

const operate = function(op, num1, num2) {
    if (op == 'add') {return add(num1, num2)}
    if (op == 'subtract') {return subtract(num1, num2)}
    if (op == 'divide') {return divide(num1, num2)}
    if (op == 'multiply') {return multiply(num1, num2)}
}

function calculate() {
    let value1 = "";
    let value2 = "";
    let isCalculating = 0
    for(let i = 0; i<10; i++) {
        document.getElementById(i).addEventListener('click', function(e) {
            document.getElementById("display").innerHTML += this.id;
        })
    }

    document.getElementById("add").addEventListener('click', function() {
        if (value1 === "") {
            value1 = document.getElementById("display").innerHTML;
        }
        else {
            value2 = document.getElementById("display").innerHTML;
        }    

        document.getElementById("display").innerHTML = "";  
    })
}

let displayValue = document.getElementById("display").innerHTML
let calcarr = [0,0]
let dispCont = ''
let operator = ''
for(let i = 0; i<10; i++) {
    document.getElementById(i).addEventListener('click', function(e) {
        dispCont += this.id;
        document.getElementById("display").innerHTML += this.id;
    })
}

addbutton.addEventListener('click', function(e) {
    calcarr.unshift(parseInt(dispCont))
    dispCont = ''
    operator = 'add'
    document.getElementById("display").innerHTML = ''
})

document.getElementById('subtract').addEventListener('click', function(e) {
    calcarr.unshift(parseInt(dispCont))
    dispCont = ''
    operator = 'subtract'
    document.getElementById("display").innerHTML = ''
})

document.getElementById('multiply').addEventListener('click', function(e) {
    calcarr.unshift(parseInt(dispCont))
    dispCont = ''
    operator = 'multiply'
    document.getElementById("display").innerHTML = ''
})

document.getElementById('divide').addEventListener('click', function(e) {
    calcarr.unshift(parseInt(dispCont))
    dispCont = ''
    operator = 'divide'
    document.getElementById("display").innerHTML = ''
})

document.getElementById('equals').addEventListener('click', function(e) {
    calcarr.unshift(parseInt(dispCont))
    let result = operate(operator, calcarr[1], calcarr[0])
    document.getElementById("display").innerHTML = result
})