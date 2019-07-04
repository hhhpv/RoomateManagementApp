//require modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//declare schema
var Expense = new Schema({
    category: {
        type: String,
        required: true
    },
    amount: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    month: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
    groupId: {
        type: String,
        required: true,
    }
});

//Export the user model
module.exports = mongoose.model("expense", Expense);