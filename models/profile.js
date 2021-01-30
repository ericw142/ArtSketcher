const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({ 

    username:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
    bio:{
        type: String
    },
    
    
})

const Profile = mongoose.model('profile',ProfileSchema)

module.exports = Profile;