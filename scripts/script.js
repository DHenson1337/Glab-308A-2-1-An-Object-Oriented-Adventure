//Character Robin Object
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
};

//iterating through RObin's inventory
for (items of adventurer.inventory) {
  console.log(items);
}

//Adding animal companion
adventurer.companion = {
  name: "Leo",
  type: "Cat",
};

// console.log(adventurer);
//Ticking on a flea to our poor cat
adventurer.companion.companion = {
  name: "Frank",
  type: "Flea",
  inventory: ["small hat", "sunglasses"],
};

// console.log(adventurer);

//creating roll function
function roll(mod = 0) {
  const result = Math.floor(Math.random() * 20) + 1 + mod;
  console.log(`${this.name} rolled a ${result}.`);
}

//adding roll function to adventurer
adventurer.roll = roll;

// adventurer.roll();
// adventurer.roll(5);
