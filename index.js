const db = require('./db');
const inquirer = require("inquirer");

async function viewAllDepartments() {
    const [department] = await db.getAllDepartments();
    console.log('\n')
    console.table(department)
};

async function viewAllRoles() {
    const [role] = await db.getAllRoles();
    console.log('\n')
    console.table(role)
};

async function viewAllEmployees() {
    const [employee] = await db.getAllEmployees();
    console.log('\n');
    console.table(employee)
};

async function addDepartment() {

    const promptData = await inquirer
    .prompt([
    {
        type: "input",
        name: "department_name",
        message: "What department are you in?",
    },
    ]);

    console.log(promptData);

    const [department] = await db.addDepartment(promptData);
    console.log('\n');
    console.log('Insert Complete')
    await viewAllDepartments();
};

async function addRole() {

    const promptData = await inquirer
    .prompt([
    {
        type: "input",
        name: "title",
        message: "What is your title?",
    },
    {
        type: "input",
        name: "salary",
        message: "What is your salary?",
    },
    {
        type: "input",
        name: "department_id",
        message: "What is your Department ID?",
    }
    ]);

    console.log(promptData);

    const [role] = await db.addRole(promptData);
    console.log('\n');
    console.log('Insert Complete')
    await viewAllRoles();
};

async function addEmployee() {

    const promptData = await inquirer
    .prompt([
    {
        type: "input",
        name: "first_name",
        message: "What is your first name?",
    },
    {
        type: "input",
        name: "last_name",
        message: "What is your last name?",
    },
    {
        type: "input",
        name: "role_id",
        message: "What is your Role ID?",
    },
    {
        type: "input",
        name: "manager_id",
        message: "What is your Manager's ID?",
    }
    ]);

    console.log(promptData);

    const [employee] = await db.addEmployee(promptData);
    console.log('\n');
    console.log('Insert Complete')
    await viewAllEmployees();
};


module.exports = {
    viewAllDepartments,
    viewAllEmployees,
    viewAllRoles,
    addDepartment,
    addRole,
    addEmployee
}