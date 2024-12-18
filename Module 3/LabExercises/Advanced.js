// 1. makeCounter below is a decorator function which creates and returns a function that
// increments a counter.
// a) Create a second counter counter2 using the makeCounter function and test to see if
// it remains independent to counter1
// b) Modify makeCounter so that it takes an argument startFrom specifying where the
// counter starts from (instead of always starting from 0)
// c) Modify makeCounter to take another argument incrementBy, which specifies how
// much each call to counter() should increase the counter value by.

// #1 Answers:

// a) 

// function makeCounter() {
//     let currentCount = 0;
//     return function() {
//     currentCount++;
//     console.log(currentCount)
//     return currentCount;
//     };
//     }
//     let counter1 = makeCounter();
//     counter1();
//     counter1(); 

// console.log("show counter 1: ")
// counter1(); // 1
// counter1()); // 2

// console.log("show counter 2: ")
// counter2(); // 1
// counter2(); // 2


// b)

    // function makeCounter(startFrom) {
    // let currentCount = startFrom;
    // return function() {
    // currentCount++;
    // console.log(currentCount)
    // return currentCount;
    // };
    // }
    // let counter1 = makeCounter(5);
    // counter1();
    // counter1(); 

    // console.log("show counter 1: ")
    // counter1(); 
    // counter1()); 

    // let counter2 = makeCounter(8);
    // counter2();
    // counter2(); 

    // console.log("show counter 2: ")
    // counter2(); 
    // counter2(); 

// c)

// function makeCounter(startFrom, incrementBy) {
//     let currentCount = startFrom;
//     return function() {
//     currentCount + incrementBy;
//     console.log(currentCount)
//     return currentCount;
//     };
//     }
//     let counter1 = makeCounter(3,4);
//     counter1();
//     counter1(); 

//     console.log("show counter 1: ")
//     counter1(); 
//     counter1()); 



// 2. The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.

// function delayMsg(msg)
// {
// console.log(`This message will be printed after a delay: ${msg}`)
// }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')


// a) What order will the four tests below print in? Why?

//  3, 4, 2, 1 because both 3 and 4 have no delay

// b) Rewrite delayMsg as an arrow function

// setTimeout ( () => console.log('This message will be printed after a delay with arrow function'), 100);

// c) Add a fifth test which uses a large delay time (greater than 10 seconds)

// let fifthTest = setTimeout(delayMsg, 10*1000, '#5: Delayed by 10s')

// d) Use clearTimeout to prevent the fifth test from printing at all.

// clearTimeout(fifthTest);



// 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
// similar requests until there's a brief pause, then only executing the most recent of those
// requests. See https://www.techtarget.com/whatis/definition/debouncing
// It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
// requests being initiated if a user clicks repeatedly on a button.
// Using the following code to test and start with:
// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// pause, the most recent call to func should be executed and any others ignored.
// b) Extend the debounce decorator function to take a second argument ms, which defines the
// length of the period of inactivity instead of hardcoding to 1000ms
// c) Extend debounce to allow the original debounced function printMe to take an argument
// msg which is included in the console.log statement.

    // function printMe() {
    // console.log('printing debounced message')
    // }
    // printMe = debounce(printMe); //create this debounce function for a)
    // //fire off 3 calls to printMe within 300ms - only the LAST one should print, after
    // // 1000ms of no calls
    // setTimeout( printMe, 100);
    // setTimeout( printMe, 200);
    // setTimeout( printMe, 300);



// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.

// function printFibonacci() {
//     let num1 = 0;
//     let num2 = 1;
//     let sum;
//     if (num === 1) {
//         return num1;
//     } else if (num === 2) {
//         return num2;
//     } else {
//         for (let i = 3; i <= num; i++) {
//             sum = num1 + num2;
//             num1 = num2;
//             num2 = sum;
//         }
//         return num2;
//     }
// }

// let Fibonacci = setInterval( () => console.log(num2), 1000)
// setTimeout( () => clearInterval(Fibonacci), 20*1000 )


// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing

// function printFibonacciTimeouts(delay, limit) {
//     let num1 = 0;
//     let num2 = 1;
//     let sum;
//     if (num === 1) {
//         return num1;
//     } else if (num === 2) {
//         return num2;
//     } else {
//         for (let i = 3; i <= num; i++) {
//             sum = num1 + num2;
//             num1 = num2;
//             num2 = sum;
//         }
//         return num2;
//     }
//     let counter = 1
//      setTimeout(function repeatThis(current) { 
//         console.log(num2);
//         if (current < limit) setTimeout(repeatThis, delay, current+1)
//     }, delay, counter)
// }


// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.

// repeatTimeout(2000, 10);


// 5. The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from
// within setTimeout fails. Why?

    // let car = {
    // make: "Porsche",
    // model: '911',
    // year: 1964,

    // description() {
    // console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    // }
    // };
    // car.description(); //works
    // setTimeout(car.description, 200); //fails

    // Answer: This doesn't work because the instance of object was already sent and javascript doesn't know
    // how to handle it.

// a) Fix the setTimeout call by wrapping the call to car.description() inside a
// function

function repeatTimeout(delay, limit) {
    let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    },
    }
};

setTimeout(() => car.description(), 200); 

// b) Change the year for the car by creating a clone of the original and overriding it

// car - {... car, year: 2015}

// c) Does the delayed description() call use the original values or the new values from
// b)? Why?

// if you use a setTimeout with a delay it will show the updated year (2015), if you just call the description
// directly, it will still refer to the original year (1964)

// d) Use bind to fix the description method so that it can be called from within
// setTimeout without a wrapper function

let describeCar = car.description.bind(car);

setTimeout(describeCar, 1000);

// e) Change another property of the car by creating a clone and overriding it, and test that
// setTimeout still uses the bound value from d)

car - {... car, year: 2020};

