// Task: Use destructuring to extract the first two colors from this array:
// const colors = ['red', 'green', 'blue', 'yellow'];
// Bonus Task: Using the same array, destructure it and capture the rest of the colors into a new array:

const ['red', 'green', ...restArr] = colors;

console.log(red, green, restArr);


// Task: Use object destructuring to extract properties from the following object:
// const student = {
//     name: 'John',
//     age: 21,
//     course: 'Computer Science',
//     year: 2023
// };



const {year, ...restArr} = 

console.log(name, age);


// Extract only the course and assign a default value of 'Unknown' to a non-existent grade property:

let {name = 'John', age = 21, course = 'Computer Science', year = 2023, grade} = {grade: 'A+'}

console.log(student)

// Bonus: grab all the rest of the values from an object except year

