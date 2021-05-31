**Classes Challenge**:

Create a class Player with the following:
- Add a Name and Country properties
- Add a function that when it runs should print into the console ("Messi was born in Argentina");
- Make sure to adapt this function to receive dynamic Names and Clubs.

Create a Subclass called TennisPlayer that extends from the class Player
- Add a new property Age.
- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
- Make sure the Name and Age are dynamic.

class Player {
    
    constructor(name, country){
        this.name = name;
        this.country = country;
    }
    
    printDetails = (name = "Messi", country = "Argentina") => {
        console.log(`${name} is from ${country}`)
    }
    
}

class TennisPlayer extends Player {
    
    constructor(name, country, age){
        super(name, country);
        this.age = age;
    }
    
    printDetails = (name = "Messi", country = "Argentina") => {
        console.log(`${this.name} is from ${this.country} aged ${this.age}`)
    }    
}


const Ronaldo = new Player;
Ronaldo.name = "Ronaldo"
Ronaldo.country = "Portugal"
// Ronaldo.printDetails()


const Nadal = new TennisPlayer;
Nadal.name = "Nadal"
Nadal.country = "Spain"
Nadal.age = 34
Nadal.printDetails()