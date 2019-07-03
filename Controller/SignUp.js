//required modules
var key = require('../configurations/keys');
var bcrypt = require('bcrypt');
var User = require('../Model/user');
var GroupId = require('../Model/groups');

exports.admin = (req, res, next) => {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var groupId = req.body.groupId;
    var hashedPassword = bcrypt.hashSync(password, 12);
    const user = new User({
        username: username,
        email: email,
        password: hashedPassword,
        role: 'admin',
        groupId: groupId
    });
    const groupid = new GroupId({
        groupId: groupId
    });
    User.findOne({ username: username, email: email }).then((result) => {
        if (result == null) {
            user.save().then((result) => {
                groupid.save().then((result) => {
                    res.status(201).json({ result: "success", data: { message: "User created!" } });
                });
            }).catch((err) => {
                res.status(201).json({ result: "failure", data: { message: "User already registered!" } });
            });
        } else {
            res.status(201).json({ result: "failure", data: { message: "User already registered!" } });
        }
    })
}

exports.user = (req, res, next) => {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var groupId = req.body.groupId;
    var hashedPassword = bcrypt.hashSync(password, 12);
    const user = new User({
        username: username,
        email: email,
        password: hashedPassword,
        role: 'user',
        groupId: groupId
    });
    GroupId.findOne({ groupId: groupId }).then((result) => {
        console.log(result, " this");
        if (result != null) {
            User.findOne({ username: username, email: email }).then((result) => {
                if (result == null) {
                    user.save().then((result) => {
                        res.status(201).json({ result: "success", data: { message: "User created!" } });
                    }).catch((err) => {
                        console.log(err)
                        res.status(201).json({ result: "failure", data: { message: "User already registered!" } });
                    });
                }
                else {
                    res.status(201).json({ result: "failure", data: { message: "User already registered!" } });
                }
            })
        }
        else {
            res.status(201).json({ result: "failure", data: { message: "Group Not Found!" } });
        }
    }).catch((err) => {
        console.log(err);
    });
}