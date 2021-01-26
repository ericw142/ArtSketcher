const passport = require("passport");

module.exports = {
  doLogin: function(req, res, next) {
    if(!req.body.username){ 
      res.json({success: false, message: "Username was not given"}) 
    } else { 
      if(!req.body.password){ 
        res.json({success: false, message: "Password was not given"}) 
      }else{ 
        passport.authenticate('local', function (err, user) {  
           if(err){ 
             res.json({success: false, message: err}) 
           } else{ 
            if (! user) { 
              res.json({success: false, message: 'username or password incorrect'}) 
            } else{ 
              req.login(user, function(err){ 
                if(err){ 
                  res.json({success: false, message: err}) 
                }else{
                   
                  console.log("successful login");

                  const token =  jwt.sign({userId : user._id,  
                     username:user.username}, secretkey,  
                        {expiresIn: '24h'}) 
                  res.json({success:true, message:"Authentication successful", token: token }); 
                } 
              }) 
            } 
           } 
        })(req, res, next); 
      } 
    } 
  }
};