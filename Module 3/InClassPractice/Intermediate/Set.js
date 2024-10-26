// Task: Create a Set with the names of your classmates:

// const classmates = new Set(['Alice', 'Bob', 'Charlie', 'Alice', 'Dave']);
//      Check how many unique classmates you have using .size.
//      Add a new classmate to the Set.
//      Check if 'Charlie' is in the Set.
//      Remove 'Alice' from the Set.

// Bonus Task: Iterate through the Set using both for..of and forEach() to print each classmate.

const classmates = new Set(['Alice', 'Bob', 'Charlie', 'Alice', 'Dave']);

console.log(classmates.size);

classmates.add('Oliver');

console.log(classmates);

console.log(classmates.has('Charlie'));

console.log(classmates.delete('Alice'));

console.log(classmates)

for (const element of classmates) {
    console.log(element);
}

classmates.forEach(name => console.log(name))



// to convert back to an array (refresher)

console.log(Array.from(classmates))
