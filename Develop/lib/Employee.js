class Employee{
    
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;

//Explanation of code:
//Employee is a superclass (parent class) of Manager, Engineer, and Intern (3 subclasses). It has properties (name, id, email) that pass it to its subclassess.
//Enginner is a constructor class that uses name, id, email, and github as its parameters to gather the Engineer's inputted data.
//getRole and getGithub are returned from Engineers input
//the inputted data is exported in any page that uses the input of Engineer!