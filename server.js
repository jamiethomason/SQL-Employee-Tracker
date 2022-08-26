// Import and require mysql2
const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");
const { viewAllDepartments, viewAllEmployees, viewAllRoles, addDepartment, addRole, addEmployee } = require('./index');

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "sqlthomason",
    database: "company_db",
  },
  console.log(`Connected to the employee database.`)
);

async function showOptions() {
    try {
        const promptData = await inquirer
            .prompt([
            {
                type: "list",
                name: "choice",
                message: "What would you like to do?",
                choices: ["View All Employees", "View All Roles", "View All Departments", "Add Department", "Add Role", "Add Employee", "Quit"],
            },
            ]);

        switch (promptData.choice) {
            case "View All Employees":
                await viewAllEmployees();
                await showOptions();
                break;
            case "View All Roles":
                await viewAllRoles();
                await showOptions();
                break;
            case "View All Departments":
                await viewAllDepartments();
                await showOptions();
                break;
            case "Add Department":
                await addDepartment();
                await showOptions();
                break;
            case "Add Role":
                await addRole();
                await showOptions();
                break;
            case "Add Employee":
                await addEmployee();
                await showOptions();
                break;
            default:
            process.exit();
        }
        
    
    } catch (err) {
        console.log(err);
    }
}

showOptions();