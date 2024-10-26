const str = "hello world";

console.log(str);

// \t above adds a tab space in front of "hello world"



const str = 'quote by someone "hello world"'

// using the ' above allows the "hello world" to be printed with the 
// quotes appearing as a speical character



const str = "Hello World Tomorrow";

console.log(str.split(" "));

// the split string fuction above will split the words into an array at every space
// so it will return 'Hello', 'World', 'Tomorrow' as the array



const str = "Hello World Tomorrow";

const strArr - str.split(" ");

strArr[1] = "awesome";

console.log(strArr)

// using this method to conver the string to an array will then allow you to change the second
// word from "world" to "awesome" as shown


console.log(strArr.join(" "));

// this "join" fucntion will then allow you to make the array back into a string
// so that the result would look like this: Hello Awesome Tomorrow
// could also be written as console.log(strArr.join("_")) which would join the words by underscore
// so that the result would look like this: Hello_Awesome_Tomorrow


console.log(str.replace("world", "awesome"));

// this is another of how you could replace the word "world" with "awesome" without converting
// from string to array and then back

