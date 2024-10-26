// Exercise 3: “Monster Battle” - Pre-configuring Functions with bind
// Goal: Understand how bind can create a new function with a specific this value and optionally, pre-configure some arguments.
// Instructions:
// Use the monster object with a name and a method attack.
// Write a function attackMonster that logs a message about attacking a city.
// Use bind to create a new function for the monster to attack specific cities.


const monster = {
    name: "Godzilla",
};

function attack(city) {
    console.log(`${this.name} is attacking ${city}!`);
}

// write your code here


// const BoundAttack = monster.attack.bind(city)

attackNewYork();  // Godzilla is attacking New York!
attackTokyo();    // Godzilla is attacking Tokyo!