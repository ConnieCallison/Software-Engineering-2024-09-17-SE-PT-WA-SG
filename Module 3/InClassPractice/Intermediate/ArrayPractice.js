// Array Manipulation:
// Create an array colors containing the values: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].

const arr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// Write code to:
// Slice the array to get the first 3 colors.

console.log(arr.slice(0,3));

// Use splice to remove the last 2 colors and replace them with 'cyan' and 'magenta'.

arr.splice(arr.length-2,2, "cyan", "magenta")
console.log(arr);

// Use concat to merge the colors array with another array ['black', 'white'].

const arr2 = ['black', 'white']

const combinedarr = arr.concat(arr2)

console.log(combinedarr)

// Sort the combined array alphabetically.

combinedarr.sort()
console.log(combinedarr)

// Reverse the sorted array.

combinedarr.reverse()
console.log(combinedarr)