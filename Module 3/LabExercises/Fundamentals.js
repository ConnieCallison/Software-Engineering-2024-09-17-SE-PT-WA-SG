// 1. What are the results of these expressions? (answer first, then use console.log() to check)
    // "" + 1 + 0
console.log("" + 1 + 0)
    // "" - 1 + 0
console.log("" - 1 + 0)
    // true + false
console.log(true + false)
    // !true
console.log(!true)
    // 6 / "3"
console.log (6/"3")
    // "2" * "3"
console.log ("2" * "3")
    // 4 + 5 + "px"
console.log (4 + 5 + "px")
    // "$" + 4 + 5
console.log("$" + 4 + 5)
    // "4" - 2
console.log("4" - 2)
    // "4px" - 2
console.log("4px" - 2)
    // " -9 " + 5
console.log("-9" + 5)
    // " -9 " - 5
console.log(" -9 " - 5)
    // null + 1
console.log(null + 1)
    // undefined + 1
console.log(undefined + 1)
    // undefined == null
console.log(undefined == null)
    // undefined === null
console.log(undefined === null)
    // " \t \n" - 2
console.log(" \t \n" - 2)

// 2. Which of the below are not giving the right answer? Why are they not correct? How can we
// fix them?
    // let three = "3"
    // let four = "4"
    // let thirty = "30"
    // //what is the value of the following expressions?
    // let addition = three + four

// CC - this will return 34 since the numbers have not been converted to integers yet (which would give you 7 as needed)
// parseint can be used to convert to numbers first 

    // let multiplication = three * four

// CC - this will return the correct answer of 12 because mutliplication automatically converts to integers

    // let division = three / four

// CC - this will return the correct answer of .75 because division automatically converts to integers

    // let subtraction = three - four

// CC - this will return the correct answer of -1 because subtraction automatically converts to integers
    
    // let lessThan1 = three < four

// CC - this will work because it is comparing as if it's a string and three is alphabetically before 

    // let lessThan2 = thirty < four

// CC - this WON'T work because it is comparing as if it's a string and thirty is alphabetically before four (not comparing as integers)


// 3. Which of the following console.log messages will print? Why?
    // if (0) console.log('#1 zero is true')
// CC - won't print becasue 0 is considered as falsey
    // if ("0") console.log('#2 zero is true')
// CC - will print because not an empty string
    // if (null) console.log('null is true')
// CC - won't print becasue null is considered as falsey
    // if (-1) console.log('negative is true')
// CC - will print
    // if (1) console.log('positive is true')
// CC - will print

// 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
// and b. What does the ‘+=’ do?
    // let a = 2, b = 3;
    // let result = `${a} + ${b} is `;
    // if (a + b < 10) {
    // result += 'less than 10';
    // } else {
    // result += 'greater than 10';
    // }

let a = 2, b = 3;

result += a + b < 10 ? 'less than 10' : 'greater than 10';

// console.log (result)

// CC - the += adds 1 to the previous value

// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.
    // function getGreeting(name) {
    // return 'Hello ' + name + '!';
    // }

const getGreeting = function(name) {
    return 'Hello' + name;
}

const getGreetingArrow = (name) => 'Hello' + name

// console.log(getGreetingArrow(Connie))

// 6. a) Complete the inigo object by adding a lastName property and including it in the
// greeting.
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
// prints his famous catch phrase to the console. HINT: see
// https://www.imdb.com/title/tt0093779/characters/nm0001597.
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
    // const westley = {
    // name: 'Westley',
    // numFingers: 5
    // }
    // const rugen = {
    // name: 'Count Rugen',
    // numFingers: 6
    // }
    // const inigo = {
    // firstName: 'Inigo',
    // greeting(person) {
    // let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
    // console.log(greeting + this.getCatchPhrase(person));
    // },
    // getCatchPhrase(person) {
    // return 'Nice to meet you.';
    // }
    // }
    // inigo.greeting(westley)
    // inigo.greeting(rugen)

// CC - START ANSWER FOR #6 HERE 

    // const westley = {
    // name: 'Westley',
    // numFingers: 5
    // }
    // const rugen = {
    // name: 'Count Rugen',
    // numFingers: 6
    // }


    // const inigo = {
    // firstName: 'Inigo',
    // lastName:'Montoya',
    // greeting(person) {
    // let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    // console.log(greeting + this.getCatchPhrase(person));
    // },
    // getCatchPhrase(person) += person.numFingers === 6 ? 'You killed my father. Prepare to die.':'Nice to meet you'

    // inigo.greeting(westley)
    // inigo.greeting(rugen)

// 7. The following object represents a basketball game and keeps track of the score as the
// game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to
// increment it, similar but separate to the score. Include the foul count in the half time and
// full time console messages
// d) Test your object by chaining all the method calls together in different combinations.
    // const basketballGame = {
    // score: 0,
    // freeThrow() {
    // this.score++;
    // },
    // basket() {
    // this.score += 2;
    // },
    // threePointer() {
    // this.score += 3;
    // },
    // halfTime() {
    // console.log('Halftime score is '+this.score);
    // }
    // }
// //modify each of the above object methods to enable function chaining as below:
    // basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

// CC - START ANSWER FOR #7 HERE

    // const basketballGame = {
    // score: 0,
    // freeThrow() {
    // this.score++;
    // },
    // basket() {
    // this.score += 2;
    // },
    // threePointer() {
    // this.score += 3;
    // },
    // halfTime() {
    // console.log('Halftime score is '+this.score);
    // }
    // }
    // setFoul {

    // }
    // halfTime() {
    //     console.log(
    //         "Half time score is" + this.score + " (" + this.foul + " fouls)."
    //     )
    // }
    // fullTime() {
    //     console.log(
    //         "Final score is" + this.score + " (" + this.foul + " fouls)."
    //     )
    // }

    // basketballGame
    //     .basket()
    //     .freeThrow()
    //     .freeThrow()
    //     .basket()
    //     .threePointer()
    //     .halfTime();

// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.
// b) Create a new object for a different city with different properties and call your function
// again with the new object.
    // const sydney = {
    // name: 'Sydney',
    // population: 5_121_000,
    // state: 'NSW',
    // founded: '26 January 1788',
    // timezone: 'Australia/Sydney'
    // }

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

function CityDetails(cityObj) {
    for (let CityDetails in cityObj) {
        console.log (CityDetails + " = " + cityObj[CityDetails]);
    }
}

const perth = {
    name: 'Perth',
    population: 2_143_490,
    state: 'WA',
    founded: '12 August 1829',
    timezone: 'Australia/Perth'  
}

CityDetails(sydney);
CityDetails(perth);


// 9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent
    // let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
    // let dog1 = 'Bingo';
    // let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// a)
    let teamSports = ['Hockey', 'Cricket', 'Volleyball'];

    let moreSports = teamSports;
    moreSports.push("Baseball");
    moreSports.unshift("Rugby");

// b)
    let dog1 = 'Bingo';
    let dog2 = dog1;
    dog2 = "Bluey"; 

// c)
    let cat1 = { name: 'Fluffy', breed: 'Siberian' };
    let cat2 = cat1
    cat2.name = "Whiskers"

// d)
    console.log(teamSports);
    console.log(dog1);
    console.log(cat1);

// e)
    let extraSports = [...teamSports];
    extraSports.push("Baseball");
    extraSports.unshift("Rugby");

    console.log(moreSports);


// 10. The following constructor function creates a new Person object with the given name and
// age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate
// variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.
    // function Person(name, age) {
    // this.name = name;
    // this.age = age;
    // this.human

    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.human
    }

    const person1 = new Person ("Connie", 31)
    const person2 = new Person ("Jake" , 24)


    function PersonDetails(personObj) {
        for (let PersonDetails in personObj) {
            console.log (PersonDetails + " = " + personObj[PersonDetails]);
        }
    }

    PersonDetails(person1)
    PersonDetails(person2)

    class PersonClass {
        constructor (name, age) {
            this.name = name;
            this.age = age;
            this.human = true;
        }

        canDrive() {
            return this.age >= 16
        }
    }

    // need to add function CanDrive() here

    // need to add person3 here

    if (person1.canDrive())
        console.log(
            person1.age
    )