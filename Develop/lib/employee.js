// define class called Employee
class Employee {
    // use a constuctor function to pass parameters name, id, and email
    constructor(name, id, email) {
        // using this syntax to turn into {name: name}, {id: id}, {email: email}
      this.name = name;
      this.id = id;
      this.email = email; 
    }

    // set up method to getName
    getName() {
        // if no name is provided
        if (!this.name){
            // console log "please provide a name"
            console.log("Please provide a name");
        }
        // if a name is provided
        else{
            // return the name
            return this.name;
        }
      }

    // set up method to getID
    getId(){
        // if no id number is provifed
        if (!this.id){
            // console log "please provide an id number"
            console.log("Please provide an ID number");
        }
        // if an id is provided
        else{
            // return the id number
            return this.id;
        }
    }

    // set up method to getEmail
    getEmail(){
        // if no email is provided
        if (!this.email){
            // console log "please provide an email"
            console.log("Please provide an email");
        }
        // if an email is provided
        else{
            // return the email
            return this.email;
        }
    }

    // set up method to getRole
    getRole(){
        // TBD- this will return that the individual is an employee
        //return Employee
    }
}

//var test = new Employee("Cynthia", "1116", "cynthia.h.yuen@gmail.com");
//console.log(test);

module.exports = Employee;