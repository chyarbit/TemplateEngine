// require the employee.js file to run
const Employee = require("./employee");

// define a class called Intern that extends the Employee class (so this means that Employee is the superclass)
class Intern extends Employee {
    // use the construction function to pass parameters name, id, email and school
    constructor(name, id, email, school) {
        // inherit name, id, and email from the Employee superclass
        super(name, id, email);
        // using this syntax to turn into {school = school} 
        this.school = school
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

  var test4 = new Intern("Cynthia", "#1116", "cynthia.h.yuen@gmail.com", "Emory");
  console.log(test4);
