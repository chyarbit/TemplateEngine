// require the employee.js file to run
const Employee = require("./employee");

// define a class called Intern that extends the Employee class (so this means that Employee is the superclass)
class Intern extends Employee {
    // use the construction function to pass parameter school
    constructor(school) {
        // using this syntax to turn into {school = school} 
        this.school = school
        // inherit name, id, and email from the Employee superclass
        super(name, id, email);
    }

    // set up method to getSchool
    getSchool(){
        // if no school is provided
        if (!this.school){
        // console log "please provide the name of your school"
        console.log("Please provide the name of your school");
        }
        // if a school is provided
        else{
        // return the school
        return this.school;
        }
    }

    //getRole(){
        //return Manager
    //}
  }
