const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    
    image:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = Post = mongoose.model('post',PostsSchema)