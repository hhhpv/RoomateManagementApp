//Require Modules
const express = require('express');
const parser = require('body-parser');
const app = express();
var jwt = require('jsonwebtoken');
var key = require('./configurations/keys');
var mongoose = require('mongoose');

//Routes
const loginRoute = require('./routes/loginRoutes');
const errorRoute = require('./routes/errorRoutes');
const polls = require('./routes/pollingRoutes');
const profileRoute = require('./routes/profileRoutes');
const signUp = require('./routes/signUp');
let auth = require('./routes/authorize');

//Connect to database before listening on routes
mongoose.connect("mongodb://127.0.0.1:27017/room-mate", { useNewUrlParser: false }).then(
    () => {
        //Route Handling
        app.use(parser.json());
        app.use('/signUp', signUp);
        app.use('/login', loginRoute);
        app.use('/polls', auth, polls);
        app.use('/profile', profileRoute);
        app.use(errorRoute.getError);

        //listen to request on port
        app.listen(4000, () => { console.log("Room-mate app running on port 4000.") })
    }
).catch(err => {
    console.log("Error connecting to database!  ", err);
    console.log("Check Mongo Connection and then restart server...!");
})
