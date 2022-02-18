const Employee = require("./Employee");

class Engineer extends Employee{
    
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;

//Explanation of code:
//Engineer is a subclass of Employee. Engineer class inherits the properties from another class (Employee).
//Enginner is a constructor class that uses name, id, email, and github as its parameters to gather the Engineer's inputted data.
//getRole and getGithub are returned from Engineers input
//the inputted data is exported in any page that uses the input of Engineer!