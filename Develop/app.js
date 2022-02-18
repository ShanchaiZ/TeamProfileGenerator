// Declare variables:

const Manager = require("./lib/Manager");//How Manager data is inputted
const Engineer = require("./lib/Engineer"); //How Engineer data is inputted
const Intern = require("./lib/Intern"); // how Intern data is inputted
const inquirer = require("inquirer"); //inquirer package will be used for prompts
const questions = require("./lib/questions") //the questions that will be used to enter team members
const path = require("path"); // path is used to join different files directories
const fs = require("fs"); //fs library allowed us to work with the file system on the computer

const OUTPUT_DIR = path.resolve(__dirname, "output"); //output directory -->what we will be outputting once data is entered
const outputPath = path.join(OUTPUT_DIR, "team.html"); // the full team roster will be displayed as output once data for each team member is entered.

const render = require("./lib/htmlRenderer"); // Render refers to showing the output in the browser.

//Team Member Array

let team = [];

//Function to create manager and build team based on manager's input:
function buildManager() {
    try {
        inquirer.prompt(questions.managerQuestions).then(function (answers) {
            //create manager object and pushes manager data in team array
            const manager = new Manager(
                answers.manager_name,
                answers.manager_id,
                answers.manager_email,
                answers.manager_officeNo
            );
            team.push(manager);

            buildTeam();
        });
    } catch (error) {
        console.log(error);
    }
}


/*Explanation of code above: to build a team using manager's input, BuildManager function is created. This function TRIES to use the inquirer library to prompt the Manager User to manager's question. Then it takes the manager's answers of name,id,email and office number and build the start of a team. IF the function fails then it catch the failure of team building as a console error. */



//Function to build a team:

// function to build team
async function buildTeam() {
    while (true) {
        await inquirer
            .prompt([
                {
                    type: "list",
                    name: "team_member",
                    message: "What type of team member would you like to add?",
                    choices: [
                        "Engineer",
                        "Intern",
                        "I don't want to add any more team members.",
                    ],
                },
            ])

            //While we building team with manager input "buildTeam", the inquirer will PROMPT the manager to add the type of team member as an array of choices...The Manager will THEN select the type of team member they want for their team.

            /**If the manager selects an Engineer for their team, 
             * THEN the Engineer function will TRY to run an inquirer prompt which will create an Engineer object from the manager's response and,
             * then PUSHES it into an array. 
             * IF TRYING to enter an engineer data FAILS by the function, 
             * it will CATCH the function as an error. 
             * The function of selecting a team member, inputting their data, trying and failing to input as a console.log error is repeated if manager selects an intern for their team. */

            .then(async function (response) {
                //If manager selects to include "Engineer"
                if (response.team_member === "Engineer") {
                    try {
                        await inquirer
                            .prompt(questions.engineerQuestions)
                            .then(function (engineerData) {
                                //creates engineer object from manager's response and push into team array
                                const engineer = new Engineer(
                                    engineerData.engineer_name,
                                    engineerData.engineer_id,
                                    engineerData.engineer_email,
                                    engineerData.engineer_github
                                );

                                team.push(engineer);
                            });
                    } catch (error) {
                        console.log(error);
                    }

                    //if manager selects to include "intern"
                } else if (response.team_member === "Intern") {

                    try {
                        await inquirer.prompt(questions.internQuestions).then(function (internData) {
                            //creates intern object from manager response and push them into team array
                            const intern = new Intern(
                                internData.intern_name,
                                internData.intern_id,
                                internData.intern_email,
                                internData.intern_school
                            );
                            team.push(intern);
                        });
                    } catch (error) {
                        console.log(error);
                    }
                    //if Manager completes inputting team memebers:
                } else if (
                    response.team_member === "I don't want to add any more team members."
                ) {
                    //called render function by passing team array and html data of team roster is obtained from that function
                    const htmlData = render(team);
                    //Function called to write to file and generate html output in a file
                    writeToFile(htmlData);
                    //to exit from process and while loop
                    process.exit(0);
                }

            })
            .catch(function (err) {
                console.log(err);
            });
    }
}


// Function to write to output file:
function writeToFile(htmlData) {

    // First checks if 'output' folder exists in current directory, if it doesnt exist then creates for in the output folder
    if (!fs.existsSync(OUTPUT_DIR)) {

        // Create 'output' folder if does not exists
        fs.mkdirSync(OUTPUT_DIR, 0744);
        console.log("output folder Created!");

    }

    // write htmldata to 'team.html' file:
    fs.writeFileSync(outputPath, htmlData, "utf8");

    console.log("Output File generated!");
}


//Function to initialize teambuilding:
function init() {
    console.log("Welcome to Team Profile Generator! Build your team :");
    buildManager();
}

init();

