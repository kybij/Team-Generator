const inquirer = require("inquirer")
const fs = require('fs')
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")


const employeeArray = []

inquirer.prompt([{
    type: "input",
    message: "What is your name?",
    name: "managersName"
},
{
    type: "input",
    message: "What is your ID number?",
    name: "managersId"
},
{
    type: "input",
    message: "What is your email address?",
    name: "managersEmail"
},
{
    type: "input",
    message: "What is your office number?",
    name: "managersNumber"
}])
    .then(response => {
        const manager = new Manager(response.managersName, response.managersId, response.managersEmail, response.managersNumber)

        employeeArray.push(manager)
        mainMenu()

    })

function mainMenu() {

    inquirer.prompt({
        type: "list",
        message: "Choose the following",
        choices: ["Engineer", "Intern", "Exit"],
        name: "selection"
    })
        .then(response => {

            if (response.selection === "Engineer") {
                addEngineer()
            }
            else if (response.selection === "Intern") {
                addIntern()
            }
            else {
                exit()
            }

        })
}


function addEngineer() {
inquirer.prompt([
    {
        type: "input",
        message: "What is your namge?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is your ID number?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is your github?",
        name: "engineerGithub"
    }
])
.then(response => {
    const engineer = new Engineer(response.engineerName,response.engineerId,response.engineerEmail,response.engineerGithub)
    employeeArray.push(engineer)
    mainMenu()
})
}

function addIntern() {
inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is your ID number?",
        name: "internId"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is your school?",
        name: "internSchool"
    },    
])
.then(response => {
    const intern = new Intern(response.internName,response.internId,response.internEmail,response.internSchool)
    employeeArray.push(intern)
    mainMenu ()
})
}
function exit() {
    fs.wrtieFileSync()
console.log(employeeArray)
}

const generatePage = (answers) => {

}