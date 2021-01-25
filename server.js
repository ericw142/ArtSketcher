const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// const passport = require("./client/src/config/passport");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(
//   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/artsketcher_db");

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
  
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});