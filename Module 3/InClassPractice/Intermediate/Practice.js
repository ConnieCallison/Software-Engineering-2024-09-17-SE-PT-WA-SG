// Step 1: Declare variables and convert the string of 15 and 7.5

var num1 = parseInt("15")
var num2 = parseFloat("7.5")

console.log(num1, num2)

// Step 2: Perform operations + - * /

function Add(a,b) {
    return a + b;
}

function Subtract(a,b) {
    return a - b;
}

function Multiply(a,b){
    return a * b;
}

function Divide(a,b){
    return a / b;
}

console.log(Add(num1,num2));
console.log(Subtract(num1,num2));
console.log(Multiply(num1,num2));
console.log(Divide(num1,num2))

Number.isInteger(num1);

