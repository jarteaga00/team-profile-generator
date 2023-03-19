// node module 
const inquirer = require("inquirer"); 
const fs = require("fs");

// team profiles 
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

//generate HTML 
const generateHTML = require("./src/generateHTML");

//team
const team = [];

//prompts for adding manager 

const addManager = () => {
    return inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the name of the manager of the team?",
        },
        {
            type:"input",
            name:"ID", 
            message:"What is the manager email address?", 
        }, 
        {
            type:"input", 
            name:"officeNumber", 
            message:"What is the office number?", 
        },
    ])
    .then (managerInput => {
        const {name, ID, email, officeNumber} = managerInput; 
        const manager = new Manager (name, ID, email, officeNumber);
        team.push(manager);
        console.log(manager);
    })
}

// add employee 
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type:"list", 
            name:"role", 
            choices:["Engineer", "Intern"]
        }, 
        {
            type:"input",
            name:"name", 
            message:"What is the name of the engineer of the team?",
        },
        {
            type:"input", 
            name:"ID",
            message:"What is the engineer's ID?", 
        },
        {
            type:"input", 
            name:"email",
            message:"What is the engineer's email address?",
        },
        {
            type:"input",
            name:"github",
            when: (input) => input.role === "Engineer",
            message:"What is the Github username of the engineer?", 
        },
        {
            type:"input",
            name:"school",
            when: (input) => input.role === "Intern",
            message:"What is the school of the intern?",
        },
        {
            type:"confirm",
            name:"oneMore",
            message:"Would you like to add one more employee to the team?", 
            default: false
        }
    ])
    .then (employeeInput => {
        let {name, ID, email, role, gthub, chool, oneMore} = employeeInput;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, ID, email, github);
            console.log(employee)
        }

        if (role === "Intern") {
            employee = new Intern (name, ID, email, school);
            console.log(employee)
        }

        team.push(employee);

        if (oneMore) {
            return addEmployee(team);
        }
        else {
            return team;
        }
    })
}

const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if(err) {
            console.log(err)
        }
        else {
            console.log("Your team profile has been successfully generated!")
        }
    })
};

addManager()
    .then (addEmployee)
    .then (team => {
        return generateHTML(team);
    })
    .then (pageHTML => {
        return writeFile(pageHTML);
    })
    .catch (err => {
        console.log(err)
    })