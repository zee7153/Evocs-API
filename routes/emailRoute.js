const express = require("express");
const router = express.Router();
const db = require("../config/db")




// Create route for fetch the email of subscribers

router.get('/emails',(req,res)=>{
    const sql='SELECT * FROM wp_mailpoet_subscribers;';
    const query= db.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }
        res.send(result.map((subscriber)=>{
            return(subscriber.email)
        }))
    })

})

module.exports = router
