function isOdd() {
    return this % 2;
} // returns true if number is odd, false otherwise

function getOddNumbers() {
    // arguments is not an array, but it 'borrows' the filter function from Array by using call
    return Array.prototype.filter.call(arguments, isOdd); //-> [10, 1, 3, 4, 8, 9].filter(isOdd);
}

let results = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(results); // [ 1, 3, 9 ] (array of all odd arguments)