const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((prev, current) => prev + current, 0)
};

const multiply = function(a) {
  return a.reduce((prev, current) => prev * current);
};

const operate = function(op, num1, num2) {
    if (op == 'add') {return add(num1, num2)}
    if (op == 'subtract') {return subtract(num1, num2)}
    if (op == 'divide') {return divide(num1, num2)}
    if (op == 'multiply') {return multiply(num1, num2)}
}

for(let i = 0; i<10; i++) {
    document.getElementById(i).addEventListener('click', function(e) {
        document.getElementById("display").innerHTML += this.id;
    })
}

