const employee = require('./lib/Employee');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

const team = [];

function init() {
function addManager() {
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the name of the manager?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's id?",
    },
    {
    type: 'input',
    name: 'email',
    message: "What is the manager's email?",
},
{
    type: 'input',
    name: 'officeNumber',
    message: "What is the manager's office number?",
},
])
.then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    team.push(manager);
    addTeamMember();
})
}

function addTeamMember() {}
}