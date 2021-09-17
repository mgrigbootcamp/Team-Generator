const inquirer = require("inquirer");
const generateHtml= require("./util/generatehtml");
const fs= require("fs");
const Manager= require("./classes/Manager");
const Engineer= require("./classes/Engineer");
const Intern= require("./classes/Intern");
const data= [];
const empQ= [
    {

        message: "What is the persons name?",
        name: "Name",
    },
    {
        message: "What is the persons ID?",
        name: "ID"

    },
    {
        message: "What is the persons email?",
        name: "Email"
    }
];
const mgrQ= [
    ...empQ, {
        message: "What is the person's office number?",
        name: "OfficeNumber"
    }
];

const engQ= [
    ...empQ, {
        message: "What is the person's Github",
        name: "Github"
    }
];

const intQ= [
    ...empQ, {
        message: "What is the person's school?",
        name: "School"
    }
];
start ();

function start(){
    console.log("Welcome to my app!");
    mainMenu();
}
function mainMenu(){
    inquirer.prompt({
        message: "What would you like to do?",
        name: "Action",
        type: "list",
        choices: [
            "Create Manager",
            "Create Engineer",
            "Create Intern",
            "Exit"
        ]
    })
    .then(takeAction);
}
function takeAction(response){
    switch (response.Action){
        case "Create Manager": return createManager();
        case "Create Engineer": return createEngineer();
        case "Create Intern": return createIntern();
        case "Exit": return finish();
    }
}
function finish (){
    const html= generateHtml(data);
    fs.writeFileSync("./dist/team.html",html);
    console.log("team.html created in dist folder, thanks for using my app.");
    process.exit();
}
function createManager(){
    inquirer.prompt(mgrQ).then(addManager);

}
function addManager (response){
    const mgr= new Manager(response.Name, response.ID, response.Email, response.OfficeNumber);
    data.push(mgr);
    console.log("Manager Created");
    mainMenu();
}
function createEngineer(){
    inquirer.prompt(engQ).then(addEngineer);
}
function addEngineer (response){
    const eng= new Engineer(response.Name, response.ID, response.Email, response.Github);
    data.push(eng);
    console.log("Engineer Created");
    mainMenu();
}

function createIntern(){
    inquirer.prompt(intQ).then(addIntern);
}
    function addIntern (response){
        const int= new Intern (response.Name, response.ID, response.Email, response.School);
        data.push(int);
        console.log("Intern Created");
        mainMenu();
    }