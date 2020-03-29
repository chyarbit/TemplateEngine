// pull in needed reference files using require
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

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
.then(function({name, id, email, role, officeNumber, gitHub, school}){
    if (role === "Manager"){
        Manager.push([{name}, {id}, {email}, {role}, {officeNumber}])
    }
    else if (role === "Engineer"){
        Engineer.push([{name}, {id}, {email}, {role}, {gitHub}])
    }
    else if (role === "Intern"){
        Intern.push([{name}, {id}, {email}, {role}, {school}])
    }
})
