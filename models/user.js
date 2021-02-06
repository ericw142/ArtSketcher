const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose'); 

const UserSchema = new Schema({
    username:{ type:String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    bio: { type: String, required: false},
    date:{
        type: Date,
        default: Date.now
    }
});

// plugin for passport-local-mongoose 
UserSchema.plugin(passportLocalMongoose); 

module.exports = mongoose.model("User", UserSchema);