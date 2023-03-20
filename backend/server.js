const express = require('express');
const signupRoute = require('./routes/signup-route');
const loginRoute = require('./routes/login-route');
require("./config/db_connection");
const cors = require('cors');
var bodyParser = require("body-parser");

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());
app.set("view engine","ejs");
app.use(express.json());

app.use('/api/signup',signupRoute);
app.use('/api/login',loginRoute);

app.use('/api',(req,res,next) =>{
    res.send("hello")
})

app.listen(3000, () => console.log("app started at 3000..."));