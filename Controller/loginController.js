//Required modules
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var User = require('../Model/user');
var key = require('../configurations/keys');


exports.login = (req, res, next) => {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    // var groupId = req.body.groupId;
    User.findOne({ username: username, email: email }).then((result) => {
        if (result == null) {
            res.status(201).json({ result: "failure", data: { message: "No user found. Please SignUp and try again!" } })
        } else {
            if (bcrypt.compareSync(password, result.password)) {
                var token = jwt.sign({ username: username, email: email }, key, { expiresIn: '30 days' });
                res.status(201).json({ result: "success", data: { message: "Login Successful", token: token } });
            }
            else {
                res.status(201).json({ result: "failure", data: { message: "Invalid Password!" } });
            }
        }
    });
}
// // There is no need of logout functionality while using jwt tokens
// exports.logout = (req, res, next) => {
//     res.end("admin logged out");
// }