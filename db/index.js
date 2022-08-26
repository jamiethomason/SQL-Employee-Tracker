const db = require('../config/connection');

module.exports = {
    getAllDepartments() {
        return db.query('select * from department')
    },

    getAllRoles() {
        return db.query('select * from role')
    },

    getAllEmployees() {
        return db.query('select * from employee')
    },
    
    addDepartment(promptData) {
        return db.query('INSERT INTO department SET ?', promptData);
    },

    addRole(promptData) {
        return db.query('INSERT INTO role SET ?', promptData);
    },

    addEmployee(promptData) {
        return db.query('INSERT INTO employee SET ?', promptData);
    },
};