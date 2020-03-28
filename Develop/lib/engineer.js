// require the employee.js file to run
const Employee = require("./employee");

// define a class called Engineer that extends the Employee class (so this means that Employee is the superclass)
class Engineer extends Employee {
    // use the construction function to pass parameter gitHub
    constructor(gitHub) {
        // using this syntax to turn into {gitHub = gitHub} 
        this.gitHub = gitHub
        // inherit name, id, and email from the Employee superclass
        super(name, id, email);
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

    //getRole(){
        //return Engineer
    //}
  }