// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who collaborated on this project with you?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Place your tests here.'
    },
    {
        type: 'rawlist',
        name: 'licenseSelection',
        message: 'Which license did you use for your project?',
        choices: [
            'MIT License',
            'Apache 2.0', 
            'GNU GPL 3.0',
            'Mozilla Public 2.0',
            'None'
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('README successfully written!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        var documentData = generateMarkdown(data);
        writeToFile("README.md", documentData);
    });
}

// Function call to initialize app
init();
