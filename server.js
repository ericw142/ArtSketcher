const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const userRoutes = require("./models/route/user");
const passport = require('passport');
const User = require('./models/user');


const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Passport
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(User.authenticate())); 

// Serializing User
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 

app.use(passport.initialize()); 
app.use(passport.session()); 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/artsketcher_db", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

// Routing
app.use("/user", userRoutes);
app.use("/api", apiRoutes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
  
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});