const inquirer = require("inquirer");
const fs = require('fs');
// const { EXDEV } = require("constants");
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    // questions to user using "inquirer"
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },

    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },

    {
        type: "input",
        message: "What is your GitHub repository?",
        name: "repo"
    },

    {
        type: "input",
        message: "Please provide a short description of your project here:",
        name: "desc"
    },

    {
        type: "input",
        message: "Please provide instructions for properly installing your application here:",
        name: "install"
    },

    {
        type: "input",
        message: "Please provide instructions on how to use your application here:",
        name: "usage"
    },

    {
        type: "input",
        message: "Were there any contributors on your project?",
        name: "contribution"

    },
    {
        type: "list",
        message: "Which license are you using?",
        name: "License:",
        choices: [
          "MIT", 
          "ISC", 
          "Apache", 
        ]},

    {
        type: "input",
        message: "How would someone test your application?",
        name: "test"
    }

        ];

// const response = [

// ];


function init() {
    inquirer
        .prompt(questions)
        .then(function(answers) {
            console.log(answers);

            // var filename = answers.title.toLowerCase().split(' ').join('') + ".json";
          
            fs.writeFile("README.md", generateMarkdown(answers), function(err) {
          
              if (err) {
                return console.log(err);
              }
            });
        });
    };
              console.log("Success!");

// function to write README file
// fs.appendFile("README.md", generateMarkdown(answers), function (err) {
//     if (err) {
//         throw err;
//     }})

// function call to initialize program
init();


module.exports = {
    inti:init,
};