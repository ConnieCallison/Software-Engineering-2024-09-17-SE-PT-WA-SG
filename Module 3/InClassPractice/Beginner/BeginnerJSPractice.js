const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    owner: {
        name: "Jake",
        age: 27,
    },
};

// Make a shallow copy of another car here

let clonecar ={... car};

// Update the value of the shallow copy make to "BMW"

clonecar.make = "BMW";

// Update the value of the second level owner's age of the clone one to 31

clonecar.owner.age = 31;

// compare car first level with clone
console.log(car.make === clonecar.make, false); // should return false

// compare car second level with clone
console.log(car.owner.age === clonecar.owner.age, true); // should return true

// Make a deep copy this time using the same car object

deepCopycar = JSON.parse(JSON.stringify(car));

// Update the value of the second level owner's age of the deep clone one to 77

deepCopycar.owner.age = 77;

// compare car second level with deep clone
console.log(car.owner.age === deepCopycar.owner.age, false); // should return false

// Bonus: delete the owner property of the original object "car"

delete car.owner;

console.log(car);