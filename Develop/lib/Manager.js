const Employee = require("./Employee");

class Manager extends Employee{
    
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;

//Explanation of code:
//Manager is a subclass of Employee. Manager class inherits the properties from another class (Employee).
//Manager is a constructor class that uses Name, id, email, officeNumber as its parameters to gather data.
//getRole and get office number are returned from managers input
//the inputted data is exported in any page that uses the input of Manager!