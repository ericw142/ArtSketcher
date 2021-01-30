const jwt = require("jsonwebtoken");
module.exports = function generateToken(user) {
  var u = {
   username: user.username,
   _id: user._id.toString()
  };
  return token = jwt.sign(u, process.env.JWT_SECRET, {
     expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}