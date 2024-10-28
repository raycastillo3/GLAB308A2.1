//PART 1:
// const adventurer = {
    //     name: "Robin",
    //     health: 10,
    //     inventory: ["sword", "potion", "artifact"]
    // }
    
//create a loop that logs each item in Robin's inventory: 
// for (let item of adventurer.inventory){
//     console.log(item)
// }

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        subCompanion: {
            name: "Frank",
            type: "Flea",
            inventory: ["hat", "sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

// adventurer.roll();
// adventurer.roll();
// adventurer.roll();

// PART 2:
class Character {
    constructor(name) {
        this.name = name; 
        this.health = 100;
        this.inventory = [];
    }

    roll(mod = 0){
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
    static MAX_HEALTH(){
        let health = this.health = 100;
        console.log(health)
    }
}

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log(robin.roll());
// console.log(robin.companion.roll());
// console.log(robin.companion.companion.roll());

//PART 3:
class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];
    constructor (name, role, ability, fact, companion) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
        //Every adventurer have a special ability.
        this.ability = ability;
        //Every adventurer have an interesting fact. 
        this.fact = fact;  
        
        this.companion = companion;
        //PART 4: write a check to the constructor of the Adventurer class
        Adventurer.ROLES.forEach((rol) =>{
            if (this.role.toLowerCase() === rol.toLowerCase()){
                console.log(`The role ${this.role} matches one of our default roles!`);
            }
        })
    }

    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    //Adventurers have the ability to choose a random item from their inventory not including (bedroll & coins)
    chooseItem(){
        if (this.inventory.length > 2){
            const arr = this.inventory.slice(2); 
            const randomItem = Math.floor(Math.random() * arr.length);
            console.log(`${this.name} chose the: ${arr[randomItem]} `)
        } else {
            console.log(`${this.name} you dont have enough items`)
        }
    }
    // Adventurers have the ability to check coins
    checkCoins (){
        const coins = this.inventory[1];
        console.log(`${this.name} has: ${coins}`)
    }
    duel (adventurer){
        adventurer = this.name; 
        console.log(adventurer);
        super.roll()
    }
  }

  const adventurer1 = new Adventurer("Robin", "Carpenter", "woodChooper", "Great with the axe");
//   adventurer1.inventory.push("small hat", "sunglasses");
//   console.log(adventurer1.inventory);
//   console.log(adventurer1.checkCoins());
console.log(adventurer1.duel());


//create a Companion class with properties and methods to the companions
class Companion {
    constructor(name, type){
        this.name = name;
        this.type = type; 
    }
}

const companion2 = new Companion("Leo", "cat");
const adventurer2 = new Adventurer("Robin", "Carpenter", "Speed", "Great with the axe", companion2);
adventurer2.inventory.push("axe", "boots", "water bottle");
// console.log(adventurer2);
// console.log(adventurer2.scout());
// console.log(adventurer2.chooseItem());
// console.log(adventurer2.checkCoins());
// console.log(companion2);
// Character.MAX_HEALTH();
// console.log(adventurer2);

// const adventurer3 = new Adventurer("Bob", "Fighter", "Strong", "Great for lifting");


//PART 5:
class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");

