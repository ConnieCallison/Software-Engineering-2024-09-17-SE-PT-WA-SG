function Sum(a,b) {
    return a + b;
}
// Add first number to second number

function Subtract(a,b) {
    return a - b;
}
// Subtract the second number from the first number

function Multiply(a,b){
    return a * b;
}
// Multiply first number by second number

function Divide(a,b){
    return a / b;
}
// Divide the first number by the second number

function printHello(firstname) {
    console.log ('Hello ' + firstname)
}


console.log("Add the numbers 4 and 5", Sum(4,5));

console.log("Subtract the number 3 from 5", Subtract(5,3))

console.log("Multiply the numbers 1 and 2", Multiply(1,2));

console.log("Divide the number 6 by 2", Divide(6,2))

console.log(Multiply(-2,8))
console.log(Multiply(0,4))
console.log(Multiply(.2,8))

console.log(Sum(-1,1))
console.log(Sum(1000,90))
console.log(Sum(.2,8))

console.log(Subtract(-7,3))
console.log(Subtract(7,-3))
console.log(Subtract(.2,8))

console.log(Divide(0,100))
console.log(Divide(9,2))
console.log(Divide(.2,8))

console.log(printHello(2))
console.log(printHello("Callison"))
console.log(printHello("Connie"))

if(Sum(-1,1) !=0) throw Error("Addition failed test");

if(printHello('someone') !=undefined) throw Error ("printHello failed test");