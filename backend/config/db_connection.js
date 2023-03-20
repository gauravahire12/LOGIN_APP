const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LOGIN_APP').then((resp)=>{
    console.log('DB connection successful!!!');
}).catch((err)=>{
    console.log('DB connection failure!!!');
});
