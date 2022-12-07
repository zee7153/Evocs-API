const express = require("express");
const router = express.Router();
const db = require("../config/db")

// Create route for fetch the email of subscribers

router.get('/emails',(req,res)=>{
    const sql='SELECT * FROM `wp_mailpoet_subscribers` where STATUS = "subscribed"';
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
