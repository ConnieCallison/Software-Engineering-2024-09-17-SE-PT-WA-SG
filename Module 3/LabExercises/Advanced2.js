// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.
    // function multiply(a, b) {
    // console.log( a * b );
    // }
    // multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
// a) Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters

    // function multiply(a, b) {
    // console.log( a * b );
    // }

//    Function.protoype.delay = function (ms) {
//         let originalFunction = this;
//         return function(arg1, arg2) {
//             setTimeout(originalFunction, ms, arg1, arg2);
//         };
//     }

    // multiply.delay(500)(5,5);

// b) Use apply to improve your solution so that delayed functions can take any number of
// parameters

// Function.protoype.delay = function (ms) {
//     let originalFunction = this;
//     return function(arg1, arg2) {
//         setTimeout(originalFunction.apply(this, arguments), ms);
//     };
// }

// multiply.delay(500)(1, 2, 3)

// c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// delay prototype function still works.

// the above should work with additional numbers since you used .apply

// multiply.delay(500)(1, 2, 2, 3)




// 7. The following DigitalClock class uses an interval to print the time every second once
// started, until stopped.
    // class DigitalClock {
    // constructor(prefix) {
    // this.prefix = prefix;
    // }
    // display() {
    // let date = new Date();
// create 3 variables in one go using array destructuring
    // let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

    // if (hours < 10) hours = '0' + hours;
    // if (mins < 10) mins = '0' + mins;
    // if (secs < 10) secs = '0' + secs;
    // console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    // }
    // stop() {
    // clearInterval(this.timer);
    // }
    // start() {
    // this.display();
    // this.timer = setInterval(() => this.display(), 1000);
    // }
    // }
    // const myClock = new DigitalClock('my clock:')
    // myClock.start()

// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
// parameter precision – the number of ms between 'ticks'. This precision parameter
// should default to 1 second if not supplied.

// class PrecisionClock extends DigitalClock {
//     precision() {
//         this.timer.delay(ms = 1000)
//     }
// }

// const myPrecisionClock = new PrecisionClock('my precision clock: ')
// myPrecisionClock.start(5000)

// b) Create a new class AlarmClock that inherits from DigitalClock and adds the
// parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
// should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
// default to 07:00 if not supplied.

// class AlarmClock extends DigitalClock {
//     wakeupTime() {
//         this.stop(0o7)
//     }
// }



// 8. Using the following starter code, create a decorator function to validate function arguments
// as strings. Test it by decorating the given orderItems function below.
    // function orderItems(itemName) {
    // return `Order placed for: ${itemName}`;
    // }
// create a decorated version of the original function
    // const validatedOrderItem = validateStringArg(orderItems);
    // console.log(validatedOrderItem("Apple Watch")); // should run the function
    // console.log(validatedOrderItem(123)); // should throw an error
// a) Create a decorator function validateStringArg(fn) which will validate an
// argument passed to fn to ensure that it is a string, throwing an error if not
// b) Extend orderItems to use the ... rest operator, allowing multiple item name
// arguments, and include them all in the returned string
// c) Extend the decorator function to validate as strings all arguments passed to fn
// d) When testing the decorated function, use try-catch blocks to handle errors thrown for
// non-string arguments

// #8 Answers:

    // function orderItems(itemName) {
    // return `Order placed for: ${itemName}`;
    // }

    // function validateStringArg (fn) {
    //     return function (arg) {
    //         if (typeof arg !== "string") {
    //             throw new Error("Argument must be a string");
    //         }
    //         return fn(arg);
    //     };
    // }

    // const validatedOrderItem = validateStringArg(orderItems);
    // console.log(validatedOrderItem("Apple Watch")); // should run the function
    // console.log(validatedOrderItem(123)); // should throw an error


// #8 Solution from Muskan:

//     // b) allow multiple order item arguments
// function orderItems(...itemNames) {
//     return `Order placed for: ${itemNames.join(", ")}`;
//   }
//   // a) decorator function to validate argument as string
//   function validateStringArg(fn) {
//     return function (arg) {
//       if (typeof arg !== "string") {
//         throw new Error("Argument must be a string");
//       }
//       return fn(arg);
//     };
//   }
//   // c) decorator function to validate multiple arguments as string
//   function validateStringArgs(fn) {
//     return function () {
//       for (let arg of arguments) {
//         if (typeof arg !== "string") {
//           throw new Error(`Argument ${arg} must be a string`);
//         }
//       }
//       return fn.apply(this, arguments);
//     };
//   }
//   // create decorated versions of the original function
//   const validatedOrderItem = validateStringArg(orderItems);
//   const validatedOrderItems = validateStringArgs(orderItems);
//   // d) handle errors with a try-catch block
//   try {
//     console.log(validatedOrderItem("Apple Watch")); // should run the function
//     // console.log(validatedOrderItem(123)); // should throw an error
  
//     console.log(validatedOrderItems("Apple Watch", "Airpods")); // should run the function
//     console.log(validatedOrderItems("abc", 123)); // should throw an error
//   } catch (err) {
//     console.log(err);
//   }


// 9. We can delay execution of a function using setTimeout, where we need to provide both
// the callback function and the delay after which it should execute.
// a) Create a promise-based alternative randomDelay() that delays execution for a
// random amount of time (between 1 and 20 seconds) and returns a promise we can use
// via .then(), as in the starter code below
// b) If the random delay is even, consider this a successful delay and resolve the promise,
// and if the random number is odd, consider this a failure and reject it
// c) Update the testing code to catch rejected promises and print a different message
// d) Try to update the then and catch messages to include the random delay value
    // function randomDelay() {
    // // your code
    // }
    // randomDelay().then(() => console.log('There appears to have been a delay.'));


    // function randomDelay() {
    //     let delayTime = Math.random * 20

    //     const promise = new Promise(function(resolve, reject) {
    //         if (delayTime % 2 == 0) setTimeout( () => resolve('Delay time is even'), 250 ) // success
    //         else setTimeout( () => reject('Delay time is odd'), 250 ) // failure
    //     });
    // }
    // randomDelay().then(() => console.log('There appears to have been a delay of ' + delayTime + ' seconds'));
    // randomDelay().catch(() => console.log('There was an odd delay time, so it was rejected'));


// 10.Fetch is a browser-based function to send a request and receive a response from a server,
// which uses promises to handle the asynchronous response.
// The below fetchURLData uses fetch to check the response for a successful status
// code, and returns a promise containing the JSON sent by the remote server if successful
// or an error if it failed. (To run this code in a node.js environment, follow the instructions in the
// comments before the function.)
// a) Write a new version of this function using async/await
// b) Test both functions with valid and invalid URLs
// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
// using Promise.all to combine the results.

// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'

    import fetch from 'node-fetch'
    globalThis.fetch = fetch
    function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
    if (response.status === 200) {
    return response.json();
    } else {
    throw new Error(`Request failed with status ${response.status}`);
    }
    });
    return fetchPromise;
    }

    fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

// a & b)

async function waitForPromise() { // async function allows synchronous promise handling internally
          // since we have synchronous code and no .catch(), we use try ... catch for errors
          try {
              let promiseResult = await promise; // waits here as long as promise needs to resolve
              console.log(`Success: ${promiseResult}`) // then continues executing other code
              return true;
          } catch(error) {
              console.error(`Failure: ${error.message}`)
}
          //only gets here if return true above did NOT happen, ie. there was an error
          return false;
      }
