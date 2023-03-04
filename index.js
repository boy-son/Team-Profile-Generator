const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const htmlGen = require('./src/template');
const team = [];

function init() {
    
return addManager()
.then(addTeamMember)
.then(() => team)
.then(buildTeam)
.catch(err => {
  console.log(err);
});

function addManager() {
return inquirer.prompt([
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
})
}

function addTeamMember() {
return inquirer.prompt ([
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
        addManager().then(addTeamMember);
        break;
    case 'Engineer': 
    addEngineer().then(addTeamMember);
    break;
    case 'Intern':
        addIntern().then(addTeamMember);
        break;
        case 'Done':
            buildTeam();
            break;
}    
})   
}

function addEngineer() {
    return inquirer.prompt ([{
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
})
}

function addIntern() {
    return inquirer.prompt ([{
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
})
}

function buildTeam() {
    fs.writeFileSync('dist/teamProfile.html', htmlGen(team), "utf-8");
}
}

init();