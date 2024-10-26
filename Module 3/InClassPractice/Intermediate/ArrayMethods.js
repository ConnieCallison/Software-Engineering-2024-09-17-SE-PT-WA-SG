// Array Methods:
// Create an array numbers with values [1, 2, 3, 4, 5].

arr1 = [1, 2, 3, 4, 5]

// Write code to:
// Add the number 6 to the end using push().

arr1.push(6)
console.log(arr1)

// Remove the first number using shift().

arr1.shift()
console.log(arr1)

// Use map() to create a new array where each number is multiplied by 2.

console.log(arr1.map((item, 1) =>  item * 2));

// Use reduce() to find the sum of all numbers in the numbers array.

console.log(arr1.reduce ((acc, item, i) => acc + item,0));

// Find the index of the number 4 in the array.

console.log(arr1.find((num) => num === 4));

// Filter the array to only include numbers greater than 2.

console.log(arr1.filter((item) => item > 2));