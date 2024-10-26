// Create a string variable called sentence with the value: "The quick brown fox jumps over the lazy dog".
// Write code to:
// Print the length of the string.
// Convert the entire string to uppercase.
// Extract the word "fox" using the substring method.
// Replace the word "lazy" with "energetic".
// Check if the sentence ends with "dog".
// Split the string into an array of words and print the array.
// Trim any extra spaces at the beginning or end (if any were present).

const sentence = "The quick brown fox jumps over the lazy dog"

console.log(sentence)

console.log(sentence.toUpperCase())

console.log(sentence.substring(16, 19))

console.log(sentence.replace('lazy', 'energetic'))

console.log(sentence.endsWith('dog'))

console.log(sentence.split(' '))

console.log(sentence.trim())