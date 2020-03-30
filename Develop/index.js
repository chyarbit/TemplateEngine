// pull in needed reference files using require
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// define constant html to receive the pushed information from the promise into an array
const html = [];

// require the render file
const render = require("./lib/htmlRenderer");

// define a function to utilize the program
function start(){
  // define constant questions for the inquirer prompt
  const questions = [
    {
        type: "input",
        message: "Please enter the name",
        name: "name"
    },

    {
        type: "input",
        message: "Please enter the employee ID number",
        name: "id"
    },

    {
        type: "input",
        message: "Please enter the email",
        name: "email"
    },

    {
        type: "list",
        message: "Please select the role",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role"
    },

    {
        type: "input",
        message: "Please enter the office number",
        name: "officeNumber",
        when: function(answers){
        return answers.role === "Manager";
        }
    },

    {
        type: "input",
        message: "Please enter the gitHub username",
        name: "gitHub",
        when: function(answers){
        return answers.role === "Engineer";
        }
    },

    {
        type: "input",
        message: "Please enter the school name",
        name: "school",
        when: function(answers){
        return answers.role === "Intern";
        }
    }
  ]


  // use inquirer to gather information about the development team members by prompting the questions variable
  inquirer
  .prompt(questions)
    // use .then promise and feed in the parameters of name, id, email, role, officeNumber, gitHub, and school
    .then(function({name, id, email, role, officeNumber, gitHub, school}){
        // if role is equal to Manager, push the information received for name, id, email, role, and office number
        if (role === "Manager"){
        html.push([{name}, {id}, {email}, {role}, {officeNumber}]);
        addMember();
        //console.log(html[0]);
        }
        // if role is equal to Engineer, push the information received for name, id, email, role, and gitHub
        else if (role === "Engineer"){
        html.push([{name}, {id}, {email}, {role}, {gitHub}]);
        addMember();
        }
        // if role is equal to Intern, push the information received for name, id, email, role, and school
        else if (role === "Intern"){
        html.push([{name}, {id}, {email}, {role}, {school}]);
        addMember();
        } 
    })  
}

function addMember(){
    inquirer
    .prompt([
        {    
        type: "confirm",
            message: "Do you want to add another team member?",
            name: "addTeam",
        },
    ])
    .then(function(answers){
        if (answers.addTeam){
            start();
        }
        else{
            render(html);
        }
    })
}

// call functions
start();


