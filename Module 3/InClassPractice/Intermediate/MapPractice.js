// Exercise 1: Iterating through Iterables
// Task: Write a program to loop through the following iterable objects using a for..of loop:
// Array: const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']
// Set: const animalSet = new Set(['cat', 'dog', 'rabbit', 'turtle'])
// Map: const animalMap = new Map([['bird', 'parrot'], ['fish', 'goldfish'], ['insect', 'bee']])
// Questions:
// What happens when you try to use for..of with a regular object?
// How would you make an object iterable?

const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']

const animalMap = new Map([
    ['bird', 'parrot'], 
    ['fish', 'goldfish'], 
    ['insect', 'bee']
])

for (const element of animalsArr) {
    console.log(element);
  }

for (const element of animalMap) {
    console.log(element);
}

// Destructuring:
// if you want to "destructure" the map values so that they appear an individual items and not arrays, 
// you can write something like this:

// I missed this example, need to go back to recording & rewatch !!


