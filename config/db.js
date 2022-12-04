const mysql = require('mysql')

// Create Connection with SQL
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'evocs2'
});


db.connect((err)=>{
     if(err){
        throw err;
     }
      console.log('Connection is done');
});



module.exports = db