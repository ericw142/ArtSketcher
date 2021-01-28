const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({ 

    user:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    
    bio:{
        type: String
    },
    
    
})

module.exports = Profile = mongoose.model('profile',ProfileSchema)