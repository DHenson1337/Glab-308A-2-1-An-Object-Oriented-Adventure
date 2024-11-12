//Character Robin Object
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
};

//iterating through RObin's inventory
for (items of adventurer.inventory) {
  //   console.log(items);
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

//Part 2 ================================================
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  //can also add the roll function here
}

//Recreating Robin (cause the old one had no hp and died) **Had to comment out for him to become apart of adventurer class
/* const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"]; */

//Adding the roll Method to every character class
Object.assign(Character.prototype, { roll });

// robin.roll();
// robin.companion.roll(); //Leo the cat rolls
// robin.companion.companion.roll(); That darn dirty flea also rolls >.>

//Having adventurer inherient properties of character
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    //Adventurers have specialized roles.
    this.role = role;
    //Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
    this.companion = null; //Add companions later  (Part 3)
  }
  //Assign a companion to the adventurer (Part 3) I don't know how to do this without dropping it in here
  setCompanion(companion) {
    this.companion = companion;
    // console.log(`${this.name} has a companion: ${this.companion.name}`);
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scount ahead...`);
    super.roll();
  }
}

//Creating the companion class
class companion {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.inventory = [];
    this.companion = null; //for adding the flea back to the cat
  }
  //Companions can provide emotional support (unless its a flea)
  support() {
    if (this.type !== "Flea") {
      console.log(
        `${this.name} the ${this.type} is providing emotional support`
      );
    } else {
      console.log(
        `${this.name} the ${this.type} is a meance to society and is leeaching off this party`
      );
    }
  } //Companions can clear the perimeter
  search() {
    if (this.type !== "Flea") {
      console.log(
        `${this.name} the ${this.type} is searching the area for valuables`
      );
    } else {
      console.log(
        `${this.name} the ${this.type} is harrasing your party and needs to be stomped on`
      );
    }
  }
  //Assign a companion to companion
  setCompanion(companion) {
    this.companion = companion;
  }
}

//Finally, change the declaration
//of Robin and the companions to use the new Adventurer and Companion classes.

//Recreating robin again with properties of adventurer
//(name, role)
robin = new Adventurer("Robin", "Isekai protaganist"); //Ngl, this explain alot about robin
robin.inventory.push(
  "sword",
  "potion",
  "artifact",
  "deus ex machina",
  "mcguffin"
); //returning his old items and more

//Creating the companions
//(name, race)
const leo = new companion("Leo", "Cat");
const frank = new companion("Frank", "Flea"); //This one really bugs me.
frank.inventory = ["small hat", "sunglasses"];
leo.inventory = ["catterang", "MeowZooka"]; //They never said I couldn't add items :P

//Reassigning companions
robin.setCompanion(leo);
leo.setCompanion(frank); // Boooo!

// console.log(robin);
// console.log(leo);
// leo.search();
// frank.search();

//=======================Part 4=================================
