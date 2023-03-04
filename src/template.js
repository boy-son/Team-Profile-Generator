const index = require("../index");

function createHTML(team) {
  let html = "";
  team.forEach((member) => {
    if (member.constructor.name === "Manager") {
      html += `<div class="card"> 
    <div class="card-header">
    ${member.getName()}<br>${member.getRole()}
    </div>
    <ul class="list-group p-3">
    <li class="list-group-item d-flex justify-content-between align-items-center"> ID: ${member.getID()}</li>
    <li class="list-group-item d-flex justify-content-between align-items-center"> Email: <a href="mailto:${member.getEmail()}" class="card link">${member.getEmail()}</a></li>
    <li class="list-group-item d-flex justify-content-between align-items-center"> Office Number: ${member.getOfficeNumber()}</li>
    </ul>
        </div>`;
    }
    if (member.constructor.name === "Engineer") {
      html += `<div class="card"> 
    <div class="card-header">
    ${member.getName()}<br>${member.getRole()}
    </div>
    <ul class="list-group p-3">
    <li class="list-group-item d-flex justify-content-between align-items-center"> ID: ${member.getID()}</li>
    <li class="list-group-item d-flex justify-content-between align-items-center"> Email: <a href="mailto:${member.getEmail()}" class="card link">${member.getEmail()}</a></li>
    <li class="list-group-item d-flex justify-content-between align-items-center"> Github: <a href="https://github.com/${member.getGithub()}" target="_blank" class="card-link">${member.getGithub()}</a></li>
    </ul>
        </div>`;
    }
    if (member.constructor.name === "Intern") {
      html += `<div class="card"> 
    <div class="card-header">
    ${member.getName()}<br>${member.getRole()}
    </div>
    <ul class="list-group p-3">
    <li class="list-group-item d-flex justify-content-between align-items-center"> ID: ${member.getID()}</li>
    <li class="list-group-item d-flex justify-content-between align-items-center"> Email: <a href="mailto:${member.getEmail()}" class="card link">${member.getEmail()}</a></li>
    <li class="list-group-item d-flex justify-content-between align-items-center"> School: ${member.getSchool()}</li>
    </ul>
        </div>`;
    }
  });
  return html;
}

module.exports = (team) => {
  return `<!DOCTYPE html>
<html lang = "en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Team Profile</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
</head>
<body>
<header>
<h1>My Team</h1>
</header>
<div class="card-container">
<div class="row justify-content-center">
${createHTML(team)}
</div>
</div>
</body>
</html>`;
};
