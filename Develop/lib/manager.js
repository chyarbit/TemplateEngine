// require the employee.js file to run
const Employee = require("./Develop/lib/employee");

// define a class called Manager that extends the Employee class (so this means that Employee is the superclass)
class Manager extends Employee {
    // use the construction function to pass parameter officeNumber
    constructor(officeNumber) {
        // using this syntax to turn into {officeNumber = officeNumber} 
        this.officeNumber = officeNumber
        // inherit name, id, and email from the Employee superclass
        super(name, id, email);
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

    //getRole(){
        //return Manager
    //}
  }

  