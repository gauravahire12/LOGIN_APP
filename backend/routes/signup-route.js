const express =  require('express');
const signupRoute = express.Router();
const { addUser } = require('../controllers/userDataController');

signupRoute.post( '/addUser' , addUser );

module.exports = signupRoute;