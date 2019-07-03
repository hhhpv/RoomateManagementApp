//require modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//declare schema
var Group = new Schema({
    groupId: {
        type: String,
        required: true,
        unique: true
    }
});

//Export the user model
module.exports = mongoose.model("group", Group);
