const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // {TODO: Add your MySQL password}
      password: 'sqlthomason',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );
  
module.exports = db