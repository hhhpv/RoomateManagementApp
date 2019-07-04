const jwt = require('jsonwebtoken');
const key = require('../configurations/keys');
exports.auth = async (req, res, next) => {
    var username = req.body.username;
    var email = req.body.email;
    await jwt.verify(req.body.token, key, (err, decoded) => {
        if (err) {
            res.status(201).json({ result: "failure", data: { message: "Unauthorized Access!" } });
        }
        else if (username === decoded.username && email === decoded.email) {
            req.isAuthorized = true;
            next();
        } else {
            res.status(201).json({ result: "failure", data: { message: "Invalid credentials" } })
        }
    });
}