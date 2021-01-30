// importing modules  
const express = require('express');  
const router = express.Router(); 
const userController = require("../../controllers/userController");

// importing User Schema  
const User = require('../user');

router.post("/signup", (req, res) => {
    Users=new User({email: req.body.email, username : req.body.username}); 
        User.register(Users, req.body.password, function(err, user) { 
            if (err) { 
              res.json({success:false, message:"Your account could not be saved. Error: ", err})  
            }else{ 
              let token = generateToken(User);
              res.json({user:User, token: token, success: true, message: "Your account has been saved"}) 
            } 
        }); 
});

router.post("/login", (req, res, next) => {
    userController.doLogin(req, res, next);
});


module.exports = router;