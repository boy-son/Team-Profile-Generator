const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
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

function addTeamMember() {
inquirer.prompt ([
    {
        type: 'list',
        name: 'role',
        message: "What is the role of the team member?",
        choices: ['Manager','Engineer', 'Intern', 'Done']
    },
])
.then((answers) => {
switch (answers.role) {
    case 'Manager':
        addManager();
        break;
    case 'Engineer': 
    addEngineer();
    break;
    case 'Intern':
        addIntern();
        break;
        case 'Done':
            buildTeam();
            break;
}    
})   
}
}

function addEngineer() {
    inquirer.prompt ([{
        type: 'input',
        name: 'name',
        message: "What is the name of the engineer?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?",

    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github username?",
    },
])
.then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    team.push(engineer);
    addTeamMember();
})
}

function addIntern() {
    inquirer.prompt ([{
        type: 'input',
        name: 'name',
        message: "What is the name of the intern?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
    },
])
.then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    team.push(intern);
    addTeamMember();
})
}

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR))
    fs.mkdirSync(OUTPUT_DIR);
    fs.writeFileSync(outputPath, render(team), "utf-8");
}