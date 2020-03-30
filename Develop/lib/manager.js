// require the employee.js file to run
const Employee = require("./employee");

// define a class called Manager that extends the Employee class (so this means that Employee is the superclass)
class Manager extends Employee {
    // use the construction function to pass parameters name, id, email, and officeNumber
    constructor(name, id, email, officeNumber) {
        // inherit name, id, and email from the Employee superclass
        super(name, id, email);
        // using this syntax to turn into {officeNumber = officeNumber} 
        this.officeNumber = officeNumber
    }

    // set up method to getOfficeNumber
    getOfficeNumber(){
        // if no office number is provided
        if (!this.officeNumber){
        // console log "please provide your office number"
        console.log("Please provide your office number");
        }
        // if an office number is provided
        else{
        // return the office number
        return this.officeNumber;
        }
    }

    getRole(){
        return "Manager"
    }
}

  //var test2 = new Manager("Cynthia", "#1116", "cynthia.h.yuen@gmail.com","651-292-6034");
  //console.log(test2);
  module.exports = Manager;