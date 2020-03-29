// require the employee.js file to run
const Employee = require("./employee");

// define a class called Engineer that extends the Employee class (so this means that Employee is the superclass)
class Engineer extends Employee {
    // use the construction function to pass parameters name, id, email, and gitHub
    constructor(name, id, email, gitHub) {
        // inherit name, id, and email from the Employee superclass
        super(name, id, email);
        // using this syntax to turn into {gitHub = gitHub} 
        this.gitHub = gitHub
    }

    // set up method to getGitHub
    getGitHub(){
        // if no gitHub username is provided
        if (!this.gitHub){
        // console log "please provide your gitHub username"
        console.log("Please provide your gitHub username");
        }
        // if a gitHub username is provided
        else{
        // return the gitHub username
        return this.gitHub;
        }
    }

    getRole(){
        // if this is not a new employee
        if (!new Employee){
            // console log error- please try again
            console.log("Error- Please try again");
        }
        // if this is an employee
        else {
            // return employee
            return "Engineer"
        }
    }
  }

  //var test3 = new Engineer("Cynthia", "#1116", "cynthia.h.yuen@gmail.com", "chyarbit");
  //console.log(test3);
  module.exports = Engineer;