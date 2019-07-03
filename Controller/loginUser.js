var jwt = require('jsonwebtoken');
var key = require('../configurations/keys');
var bcrypt = require('bcrypt');

exports.login = (req, res, next) => {
    console.log(JSON.stringify(req.body));
    var password = req.body.password;
    var hashPassword = bcrypt.hashSync(password, 12);
    var token = jwt.sign({ username: req.body.username, email: req.body.email }, key, { expiresIn: "30 days" });
    res.status(201).json({ "result": "success", data: { token: token, message: "login Successful" } })
}
exports.logout = (req, res, next) => {

    res.end("user logged out");
}