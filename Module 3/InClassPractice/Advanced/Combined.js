const chef1 = {
    name: "Gordon Ramsay",
  };
  
  function cookDish(dish, ingredients) {
      console.log(`${this.name} is preparing ${dish} with ${ingredients.join(", ")}!`);
    }
  
  const chef2 = {
    name: "Jamie Oliver"
  };
  
  // Using `call` to invoke `cookDish` with individual arguments

    cookDish.call(chef1, "Beef Wellington", ['beef', 'puff pastry', 'filling']);
  
  // Using `apply` to invoke `cookDish` with an array of arguments

    cookDish.apply(chef2,["steak", ["salt", "pepper", "olive oil"]])
  
  // Using `bind` to create a new function for always making Pizza

    const makePizza = cookDish.bind(chef1, "Pizza");
  
  makePizza(["cheese", "tomatoes"]);  // Gordon Ramsay is preparing Pizza with cheese, tomatoes!

  // you can use the below to keep the dish below but then change the ingredients

  makePizza(["pineapples", "olives"]);