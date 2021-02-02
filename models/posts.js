const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostsSchema = new Schema({
    user:{
        type: String,
        ref: 'User'
    },
    text: {
        type: String
    },
    
    image:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }

});



const Post = mongoose.model('Post',PostsSchema)

module.exports = Post;