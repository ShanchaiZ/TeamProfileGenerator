const Employee = require("./Employee");

class Intern extends Employee{
    
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getRole(){
        return "Intern";
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;

//Explanation of code:
//Intern is a subclass of Employee. Intern class inherits the properties from another class (Employee).
//Intern is a constructor class that uses name, id, email, and school as its parameters to gather the Intern's inputted data.
//getRole and getSchool are returned from Intern's input
//The inputted data is exported in any page that uses the input of Intern!