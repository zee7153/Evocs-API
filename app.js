const express = require('express')
require("dotenv").config()
const emails = require('./routes/emailRoute')
const app = express()

// Check for Connectio to server
app.get('', (req,res)=>{
    res.send('Server is connect....')
});

// Routes
app.use('/',emails)

const port = process.env.PORT
app.listen(port, () => console.log(`Server running on the port 4000 ......`))