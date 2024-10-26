// Goal: Understand how call works to invoke a function with a specific this value and arguments.
// Instructions:
// Create a superhero object with a name and a power property.
// Write a function usePower that logs a message about using the superhero's power.
// Use call to invoke the usePower function in the context of different superheroes.


const Spiderman = {
    name: "Spiderman",
    powers: "web sling"
}

const Elastigirl = {
    name: "Elastigirl",
    powers: "super stretch"
}

function usePowers() {
    console.log(`${this.name} is using ${this.powers}!`);
  }

usePowers.call(Spiderman);
usePowers.call(Elastigirl);




// Here's the class example solution:

const superhero1 = {
    name: "Superman",
    power: "fly"
  };
  
  const superhero2 = {
    name: "Flash",
    power: "run at light speed"
  };
  
  function usePower() {
    console.log(`${this.name} is using their ability to ${this.power}!`);
  }
  
  // Using `call` to change context
  usePower.call(superhero1);  // Superman is using their ability to fly!
  usePower.call(superhero2);  // Flash is using their ability to run at light speed!