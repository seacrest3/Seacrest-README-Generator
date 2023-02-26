const fs = require("fs");
// import * as fs from 'fs';
// const path = require('path');
const inquirer = require("inquirer");
// import inquirer from 'inquirer';
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of the Project:",
      },
      {
        type: "input",
        name: "description",
        message: "Please provide a description of the project:",
      },
      {
        type: "input",
        name: "instruction",
        message: "Please provide the installaion instructions of the project:"
      },
      {
        type: "input",
        name: "usage",
        message: "Please provide the usage information of the application:"
      },
      {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
      },
      {
        type: "input",
        name: "contribution",
        message: "Please provide the contribution guidelines",
        default: "",
      },
      {
        type: "input",
        name: "test",
        message: "Please provide the test instructions:",
      },
      {
        type: "input",
        name: "username",
        message: "Please provide your GitHub username.",
      },
      {
        type: "input",
        name: "email",
        message: "Please provide your email address.",
      },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Success!'))
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            writeToFile("./output/README.md", generateMarkdown(response));
        });
}

// function call to initialize program
init();
