var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var key = require('../configurations/keys')
var user = require('../Model/user');
var expense = require('../Model/expense');

var bill_category = mongoose.model('bill-category', {
    category: {
        type: String
    }
}, 'bill-category');

exports.get_bill_category = (req, res, next) => {
    jwt.verify(req.body.token, key, (err, decoded) => {
        if (err) {
            res.status(201).json({ result: "failure", data: { message: "Unauthorized Access!" } });
        }
        else if (req.body.username === decoded.username && req.body.email === decoded.email) {
            bill_category.find({}).then((result) => {
                res.status(201).json({ "result": "success", data: { message: "categories retrieved", categories: result } });
            }).catch((err) => {
                console.log("Failed to fetch categories");
                res.status(201).json({ "result": "failure", data: { message: "cannot retrieve categories" } })
            });
        } else {
            res.status(201).json({ result: "failure", data: { message: "Invalid credentials" } })
        }
    });
}

exports.add_shared_expense = (req, res, next) => {
    jwt.verify(req.body.token, key, (err, decoded) => {
        if (err) {
            res.status(201).json({ result: "failure", data: { message: "Unauthorized Access!" } });
        }
        else if (req.body.username === decoded.username && req.body.email === decoded.email) {
            expense.findOne({ month: req.body.month, year: req.body.year, groupId: req.body.groupId, category: req.body.category }).then((result) => {
                if (result == null) {
                    user.find({ groupId: req.body.groupId }).count((err, count) => {
                        var no_members = count;
                        // var split = parseFloat(req.body.amount) / no_members;
                        // var newAmount = parseFloat(req.body.amount) - split;
                        var exp = new expense({
                            groupId: req.body.groupId,
                            month: req.body.month,
                            year: req.body.year,
                            amount: req.body.amount,
                            category: req.body.category,
                        });
                        exp.save().then((result) => {
                            res.status(201).json({ result: "success", data: { message: "Expense shared" } })
                        }).catch((err) => {
                            res.status(201).json({ result: "failure", data: { message: "Try later" } })
                        });
                    });

                } else {
                    (result.amount) = parseFloat(result.amount) + parseFloat(req.body.amount);
                    exp = new expense(result);
                    exp.save().then((result) => {
                        res.status(201).json({ result: "success", data: { message: "Expense shared" } })
                    }).catch((err) => {
                        res.status(201).json({ result: "failure", data: { message: "Try later" } })
                    });
                }
            }).catch((err) => {
                console.log(err);
                res.status(201).json({ result: "failure", data: { message: "Could not add. Try later." } })
            });
        } else {
            res.status(201).json({ result: "failure", data: { message: "Invalid credentials" } })
        }
    });
}

exports.delete_shared_expense = (req, res, next) => {
    jwt.verify(req.body.token, key, (err, decoded) => {
        if (err) {
            res.status(201).json({ result: "failure", data: { message: "Unauthorized Access!" } });
        }
        else if (req.body.username === decoded.username && req.body.email === decoded.email) {
            expense.findOne({ month: req.body.month, year: req.body.year, groupId: req.body.groupId, category: req.body.category }).then((result) => {
                if (result == null) {
                    res.status(201).json({ result: "failure", data: { message: "Could not add. Try later." } })
                } else {
                    if (parseFloat(result.amount) > parseFloat(req.body.amount)) {
                        (result.amount) = parseFloat(result.amount) - parseFloat(req.body.amount);
                        exp = new expense(result);
                        exp.save().then((result) => {
                            res.status(201).json({ result: "success", data: { message: "Expense updated" } })
                        }).catch((err) => {
                            res.status(201).json({ result: "failure", data: { message: "Try later" } })
                        });
                    }
                    else {
                        res.status(201).json({ result: "failure", data: { message: "What you trying to do noob." } })
                    }
                }
            }).catch((err) => {
                res.status(201).json({ result: "failure", data: { message: "Could not add. Try later." } })
            });
        } else {
            res.status(201).json({ result: "failure", data: { message: "Invalid credentials" } })
        }
    });
}

exports.view_profile = (req, res, next) => {
    jwt.verify(req.body.token, key, (err, decoded) => {
        if (err) {
            res.status(201).json({ result: "failure", data: { message: "Unauthorized Access!" } });
        }
        else if (req.body.username === decoded.username && req.body.email === decoded.email) {
            user.find({ username: req.body.username, email: req.body.email }).then((result) => {
                res.status(200).json({ result: "success", data: { username: result[0].username, email: result[0].email, role: result[0].role, group: result[0].groupId } })
            }).catch((err) => {
                res.status(201).json({ result: "failure", data: { message: "Could not load details.Try after some time." } })
            })
        } else {
            res.status(201).json({ result: "failure", data: { message: "Invalid credentials" } })
        }
    });
}

exports.view_monthly_expense = (req, res, next) => {

}

exports.view_polls = (req, res, next) => {

}

exports.approve_polls = (req, res, next) => {

}