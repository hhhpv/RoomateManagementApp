//require modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//declare schema
var User = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    groupId: {
        type: String,
        required: true,
    }
});

//Export the user model
module.exports = mongoose.model("user", User);
