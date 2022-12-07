const mysql = require('mysql')
require("dotenv").config()

// Create Connection with SQL
const db = mysql.createConnection({
    host:process.env.DB_host,
    user:process.env.DB_user,
    password:process.env.DB_password,
    database:process.env.DB_database,
    port:process.env.DB_port
});

db.connect((err)=>{
     if(err){
        throw err;
     }
      console.log('Database is connected....');
});

module.exports = db