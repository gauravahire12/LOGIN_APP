const mongoose = require('mongoose');
const Users = require('../models/userData');
const LoginResponse = require('../helper/LoginResponse');

const addUser = async(req,res,next) => {
    let users = [];
    let usersObj = {};
    let userEmailMappingObj = {};
    let usersObjListForFirstEntry = [];
    let LoginResp = new LoginResponse(); //initializing helpers
    //fetching request 
    let user_email = req.body.user_email;
    let user_name = req.body.user_name;
    let user_mobile_number = req.body.user_mobile_number;
    let user_password = req.body.user_password;

    try{
        users = await Users.find();
        usersObj[user_email] = { user_name, user_email , user_mobile_number , user_password};
        userEmailMappingObj[user_name] = user_password;

        if(!(users.length)){ // for inserting first record
            usersObjListForFirstEntry = [{ users: usersObj, username_password_mapping: userEmailMappingObj }];
            Users.insertMany(usersObjListForFirstEntry).then((err,resp)=>{
                LoginResp.setStatus('success');
                LoginResp.setDescription('user added successfully');
                res.status(200).json(LoginResp);
            });
        } else { // for updating existing record

            //Validation checks for email and user_name
            if(users[0].users[user_email]) {
                // res.send("EMAIL ID ALREADY PRESENT!!!");
                LoginResp.setStatus('failure');
                LoginResp.setDescription('Email already present');
                res.status(404).json(LoginResp);
            } else if(users[0].username_password_mapping[user_name]) {
                // res.send("USERNAME IS ALRAEDY PRESENT!!!");
                LoginResp.setStatus('failure');
                LoginResp.setDescription('username already present');
                res.status(404).json(LoginResp);
            } else { 
                //updating record
                usersObj = {
                    ...users[0].users,
                    ...usersObj
                }
                userEmailMappingObj = {
                    ...users[0].username_password_mapping,
                    ...userEmailMappingObj
                }
                Users.updateOne({ $set: { users: usersObj , username_password_mapping: userEmailMappingObj }}).then((err,resp)=>{
                    // res.send("DONE UPDATE!!!");
                    LoginResp.setStatus('success');
                    LoginResp.setDescription('user added successfully');
                    res.status(200).json(LoginResp);
                });
            }
        }
        
    } catch(err) {
        console.log(err);
        LoginResp.setStatus('failure');
        LoginResp.setDescription('some error occured');
        res.status(404).json(LoginResp);
    }
}

const login = async(req,res,next)=>{
    let users;
    let user_name = req.body.user_name;
    let user_password = req.body.user_password;
    let LoginResp = new LoginResponse(); //initializing helpers
    try {
        users = await Users.find();
        if(users[0].username_password_mapping && users[0].username_password_mapping[user_name] === user_password){
            // res.send("LOGIN SUCCESS!!!");
            LoginResp.setStatus('success');
            LoginResp.setDescription('login successfully');
            res.status(200).json(LoginResp);
        } else {
            // res.send("WRONG USERNAME OR PASSWORD");
            LoginResp.setStatus('failure');
            LoginResp.setDescription('wrong username or password');
            res.status(404).json(LoginResp);
        }
    } catch (error) {
        console.log(error);
        LoginResp.setStatus('failure');
        LoginResp.setDescription('some error occured');
        res.status(404).json(LoginResp); 
    }
}

module.exports = { addUser,login };