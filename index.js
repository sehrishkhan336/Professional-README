// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection,
    generateMarkdown
} = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:',
        validate: (input) => input.trim() !== '' ? true : 'Installation instructions are required',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide usage instructions:',
        validate: (input) => input.trim() !== '' ? true : 'Usage information is required',
    },
    {
        type: 'input',
    name: 'contributing',
    message: 'Please provide contributing guidelines:',
    validate: (input) => input.trim() !== '' ? true : 'Contributing guidelines are required',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:',
        validate: (input) => input.trim() !== '' ? true : 'Test instructions are required',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (input) => input.trim() !== '' ? true : 'GitHub username is required',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (input) => input.trim() !== '' ? true : 'Email address is required',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const fileName = `${data.title.toLowerCase().split(' ').join('-')}.md`;
            const markdownContent = generateMarkdown(data);
            writeToFile(fileName, markdownContent);
        });
}

// Function call to initialize app
init();
