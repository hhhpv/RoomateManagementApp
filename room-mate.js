//Require Modules
const express=require('express');
const parser=require('body-parser');
const app=express();

//Routes
const loginRoute=require('./routes/loginRoutes');
const errorRoute=require('./routes/errorRoutes');
const polls=require('./routes/pollingRoutes');
const profileRoute=require('./routes/profileRoutes');

//Route Handling
app.use('/login',loginRoute);
app.use('/polls',polls);
app.use('/profile',profileRoute);
app.use(errorRoute.getError);

//listen to request on port
app.listen(4000,()=>{console.log("Room-mate app running on port 4000.")})