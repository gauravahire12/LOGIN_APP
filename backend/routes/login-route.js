const express =  require('express');
const loginRoute = express.Router();
const { login } = require('../controllers/userDataController');

loginRoute.post( '/userLogin' , login );

module.exports = loginRoute;