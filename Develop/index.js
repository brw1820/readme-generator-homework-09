
const generateMarkdown = require("./utils/generateMarkdown")
var inquirer = require("inquirer")
const fs = require("fs")


const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your GitHub repository called?",
        name: "repo"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a description of your application here:",
        name: "description"
    },

    {
        type: "input",
        message: "Please provide instructions for installing your application here:",
        name: "installation"
    },

    {
        type: "input",
        message: "Please provide instructions for for properly using your application here:",
        name: "usage"
    },

    {
        type: "input",
        message: "How can people contribute to your project?",
        name: "contributors"

    },

    {
        type: "input",
        message: "How would someone test your deployed application?",
        name: "testing",
    },
    
    {
        type: "input",
        message: "How would someone test your deployed application?",
        name: "testing",
    }



];


function init() {
    inquirer.prompt(questions)
        .then(function(answers) {
            console.log(answers)
                    fs.writeFileSync("README.md", generateMarkdown(answers), function (err) {
                        if (err) {
                            throw err;
                        }})
                })
            };
init();

// modules.export {
//     init:init,
// }