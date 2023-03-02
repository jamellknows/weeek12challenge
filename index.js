const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template");

let response = []
let classList = []
// TODO: Write Code to gather information about the development team members, and render the HTML file.

const questions = inquirer.prompt([
    {
        message:"What is your team manager's name?",
        type:"input",
        name: "managerName"
    },
    {
        message:"What is your team manager's employee ID?",
        type: "input",
        name: "managerID"
    },
    {
        message:"What is your team manager's email?",
        type: "input",
        name:"managerEmail"

    },
    {
        message:"What is your team manager's office number?",
        type: "input",
        name:"managerOfficeNumber"

    },
    {
        message: "Select",
        type: "list",
        name:"selector",
        choices: ["Add an engineer", "Add an intern", "Finish building the team"]
    }
]).then((answers) => {
    //response.push([answers])
    let manager = new Manager.Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber)
    classList.push(manager)
    //console.log(manager.getRole())
    //console.log(classList)
    if(answers.selector == "Add an engineer"){
        engineerQuestions()

    }
    if(answers.selector == "Add an intern"){
        internQuestions()

    }
    if(answers.selector == "Finish building the team"){
       
       let html = render.generateTeam(classList)
       fs.writeFileSync('./output/team.html',html)
       //console.log(render)
        return 
    }
})

function internQuestions(){
    const internQuestions = inquirer.prompt([
        {
            message: "What is the intern's name?",
            name: "internName",
            type: "input"
        },
        {
            message: "What is the intern's ID?",
            name: "internID",
            type: "input"
        },
        {
            message: "What is the intern's email?",
            name: "internEmail",
            type: "input"
        },
        {
            message: "What is the intern's school?",
            name: "internSchool",
            type: "input"
        },
        {
            message: "Select",
            type: "list",
            name:"selector",
            choices: ["Add an engineer", "Add an intern", "Finish building the team"]
        }
    ]).then((answers) =>{
        //response.push([answers])
        let intern = new Intern.Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
        classList.push(intern)
        if(answers.selector == "Add an engineer"){
            engineerQuestions()
    
        }
        if(answers.selector == "Add an intern"){
            internQuestions()
    
        }
        if(answers.selector == "Finish building the team"){
            let html = render.generateTeam(classList)
            fs.writeFileSync('./output/team.html',html)
            
            return 
        }
    })
}


function engineerQuestions(){
    const engineerQuestions = inquirer.prompt([
        {
            message: "What is the engineer's name?",
            name: "engineerName",
            type: "input"
        },
        {
            message: "What is the engineer's ID?",
            name: "engineerID",
            type: "input"
        },
        {
            message: "What is the engineer's email?",
            name: "engineerEmail",
            type: "input"
        },
        {
            message: "What is the engineer's github?",
            name: "engineerGithub",
            type: "input"
        },
        {
            message: "Select",
            type: "list",
            name:"selector",
            choices: ["Add an engineer", "Add an intern", "Finish building the team"]
        }
    ]).then((answers) =>{
        response.push([answers])
        let engineer = new Engineer.Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub)
        classList.push(engineer)
        if(answers.selector == "Add an engineer"){
            engineerQuestions()
    
        }
        if(answers.selector == "Add an intern"){
            internQuestions()
    
        }
        if(answers.selector == "Finish building the team"){
            let html = render.generateTeam(classList)
            fs.writeFileSync('./output/team.html',html)

            return 
        }
    })

}