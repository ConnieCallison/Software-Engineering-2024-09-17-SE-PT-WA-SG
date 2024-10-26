// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

// console.log(ucFirstLetters("los angeles") ) //Los Angeles

const FirstLetters = "los angeles"
console.log(FirstLetters.toUpperCase())

// AFTER CLASS - FIX THIS ONE SO THAT IT ONLY SHOWS THE FIRST LETTERS AS CAPITALS NOT ALL ^^^^^

// 2. Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (...) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.

// console.log(truncate('This text will be truncated if it is too long', 25))
// // This text will be truncat...

const sentence = 'This text will be truncated if it is too long'
let truncated = sentence.slice(0,25)

console.log(truncated + "...")


// 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:

// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Global_Objects/Array

// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.
// const animals = ['Tiger', 'Giraffe']
// console.log(animals)

const animals = ['Tiger', 'Giraffe']

// a)
animals.push("Lion", "Bear")

// b)
animals.unshift("Elephant", "Zebra")

// c)
animals.sort

// d)
function replaceMiddleAnimal(newAnimal) {
    const halfway = math.floor(animals.length / 2);
    animals[halfway] = newAnimal;
}

replaceMiddleAnimal("Monkey")

console.log(animals)

// e)

function findMatchingAnimals(beginsWith) {
    return animals.filter((animal) => 
        animal.toLowerCase().startsWith(beginsWith.toLowerCase))
}

findMatchingAnimals(beginsWith)

console.log(findMatchingAnimals("HI"));

// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.
// console.log(camelCase('margin-left')) // marginLeft
// console.log(camelCase('background-image')) // backgroundImage
// console.log(camelCase('display')) // display

//  NEED TO WORK ON THIS ONE SOME MORE - TRY AFTER CLASS

sentence1 = 'here is an example with a dashed-word to check if it works'

// a)
function camelCase(cssProp) {
    return cssProp
    .filter('-')
}

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display


// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
// following:
// let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // 0.2 + 0.1 = 0.30000000000000004
// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:
// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen) //why is this not working?
// a) Explain why the above code returns the wrong answer
// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.
// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns
// the correct float result. https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.
// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// different values as well as the below:
// console.log(0.3 == currencyAddition(0.1, 0.2)) // true
// console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004 

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen)

// a) 

// it doesn't treat them as numbers (integers) but as a string so it just concats them - same addition issue we discussed 
// in the javascript fundamentals lab

// b)


function currencyAddition(float1, float2) {
    const wholeNumber1 = float1 * 100;
    const wholeNumber2 = float2 *100;

    const sum = wholeNumber1 + wholeNumber2;
    return sum / 100;
}

console.log(currencyAddtion(float1, float2))


// c)

function currencyOperation(float1, float2, operation){
const wholeNumber1 = float1 * 100;
const wholeNumber2 = float2 * 100;
let wholeResult = 0;

    switch (op) {
        case "+":
            wholeResult = wholeNumber1 + wholeNumber2;
            break;
        case "-":
            wholeResult = wholeNumber1 - wholeNumber2;
            break;
        // case "*":
        //     wholeResult = wholeNumber1 * wholeNumber2
        //     break;
        // case "/":
        //     wholeResult = wholeNumber2 / wholeNumber1;
        //     break;

        // THIS SECTION ISN'T WORKING SO I COMMENTED IT OUT FOR NOW

    return wholeResult /100;
    }
}
console.log(currencyOperation(twentyCents, tenCents, "*"))

// d) 

numDecimals


// 6. Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.
// Test with the following arrays and create another one of your own.
// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
// console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

function unique(array) {

    const uniqueArray = array.filter((value, index) => array.indexOf(value) === index)

    return uniqueArray
 }

console.log(unique(colours)) 
console.log(unique(testScores))



// 7. Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.
// const books = [
// { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
// { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
// { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
// { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
// { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
// ];
// a) Write a function getBookTitle(bookId) that uses the find function to return the
// title of the book object with the matching id.
// b) Write a function getOldBooks() that uses the filter function to return all book
// objects written before 1950.
// c) Write a function addGenre() that uses the map function to add a new genre property
// to all of the above books, with the value ‘classic’.
// d) (Extension) Write a function getTitles(authorInitial) that uses map and
// filter together to return an array of book titles for books written by authors whose
// names start with authorInitial.
// e) (Extension) Write a function latestBook() that uses find and forEach to get the
// book with the most recent publication date.

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];
    
    // a) 

    function getBookTitle(bookId) {
    
    }
    
    // b)
    
    function getOldBooks() {
        
    }
    
    // c)

    function addGenre() {
        return books.map(book => ({
            ...book,
            genre: "classic",
        }));
    }

    // d)

    function getTitles(authorInitial) {
        return books
            .filter(book => 
                book.author.toLowerCase().startsWith(authorInitial.toLowerCase())
            )
        .map((book) +. book.title);
    }

    // e)

    function latestBook() {
        let latestYear = 1900;

        books.forEach(book) => {
            latestYear = book.year > latestYear ? book.year : latestYear
        };

        console.log(latestYear);

        // need to look back at recording & add a line here to return the title for the book that has the latestYear found above
    }


// 8. The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
// const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')
// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
// c) Update the phone number for Caroline
// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map
// e) Combine the contents of the two individual Maps into a single phoneBook Map
// f) Print out the full list of names in the combined phone book

const phoneBookABC = new Map()
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) & b)

const phoneBookDEF = new Map([
    ['Drew', '0408914785'],
    ['Emily', '0433258689'],
    ['Frank', '04539687412']
])

// c) 

phoneBookABC.set('Caroline', 61455221182)

// d)

function printPhoneBook(contacts) {
    return 
}


// e) 




// f)



// 9. Given the below salaries object, perform the following tasks.
// let salaries = {
// "Timothy" : 35000,
// "David" : 25000,
// "Mary" : 55000,
// "Christina" : 75000,
// "James" : 43000
// };
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
// b) Write a function topEarner(salaries) that calculates and returns the name of the person
// earning the highest salary

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};


// a)
function sumSalaries(salaries) {
    const keys = Object.keys(objSalaries);

    return keys.reduce((acc, key) => acc + objSalaries[key], 0);
}

console.log(sumSalaries(salaries));

// b)
function topEarner(salaries) {
    const keys = Object.keys(objSalaries);
    let topEarner = { salary: objSalaries[keys[0]], name: keys[0] };

    keys.forEach((earner) => {
        if (objSalaries)

            //need to finish this code - look back at recording for Aaron's example
    })
}


// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:
// const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')
// a) Print the total number of minutes that have passed so far today
// b) Print the total number of seconds that have passed so far today
// c) Calculate and print your age as: 'I am x years, y months and z days old'
// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// of days in between the two given dates.

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

// a)

console.log(today.getMinutes() + ' minutes have passed so far today')

// b)

console.log(today.getSeconds() + ' seconds have passed so far today')

// c)



// d)


