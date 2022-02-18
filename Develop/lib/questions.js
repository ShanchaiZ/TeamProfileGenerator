//These are the prompts that the users will see to enter their data. These prompts are being exported:
module.exports = {
    //MANAGER QUESTIONS:

    managerQuestions: [
        {
            //Manager's Name: User input
            type: "input",
            name: "manager_name",
            message: "What is your manager's name?",
        },
        {
            //Manager's ID with validation check. Manager enters Valid ID or can not continue
            type: "input",
            name: "manager_id",
            message: "What is your manager's id?",
            validate: function (value) {
                if (isNaN(value)) return " Please enter valid ID";
                else return true;
            },
        },
        {
            //Manager's Email: input type with Validation check of: special characters are allowed in the email. if something other than those special characters are entered, it returns as enter valid ID to continue.
            type: "input",
            name: "manager_email",
            message: "What is your manager's email?",
            validate: function (value) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);

                if (valid) return true;
                else return "  Please enter valid email ID ";
            },
        },
        {
            //Manager's office number: input type with validation check of: enter valid office number or can not continue.
            type: "input",
            name: "manager_officeNo",
            message: "What is your manager's office number?",
            validate: function (value) {
                if (isNaN(value)) return " Please enter valid office number";
                else return true;
            },
        },
    ],

    //ENGINEER QUESTIONS:
    engineerQuestions: [
        {
            //Engineer's Name: User input
            type: "input",
            name: "engineer_name",
            message: "What is your engineer's name?",
        },
        {
            //Enginneer's ID with validation check. Engineer enters Valid ID or can not continue
            type: "input",
            name: "engineer_id",
            message: "What is your engineer's id?",
            validate: function (value) {
                if (isNaN(value)) return " Please enter valid ID";
                else return true;
            },
        },
        {
            //Engineer's Email: input type with Validation check of: special characters are allowed in the email. if something other than those special characters are entered, it returns as enter valid ID to continue.
            type: "input",
            name: "engineer_email",
            message: "What is your engineer's email?",
            validate: function (value) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);

                if (valid) return true;
                else return "  Please enter valid email ID ";
            },
        },
        {
            //Engineer's GitHub: User input
            type: "input",
            name: "engineer_github",
            message: "What is your engineer's github username?",
        },
    ],

    //INTERN QUESTIONS:

    internQuestions: [
        {
            //Intern's Name: User input
            type: "input",
            name: "intern_name",
            message: "What is your intern's name?",
        },
        {
            //Intern's ID with validation check. Intern enters Valid ID or can not continue
            type: "input",
            name: "intern_id",
            message: "What is your intern's id?",
            validate: function (value) {
                if (isNaN(value)) return " Please enter valid ID";
                else return true;
            },
        },
        {
            //Intern's Email: input type with Validation check of: special characters are allowed in the email. if something other than those special characters are entered, it returns as enter valid ID to continue.
            type: "input",
            name: "intern_email",
            message: "What is your intern's email?",
            validate: function (value) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);

                if (valid) return true;
                else return "  Please enter valid email ID ";
            },
        },
        {
            //Intern's School Name: User input
            type: "input",
            name: "intern_school",
            message: "What is your intern's school?",
        },
    ],
};