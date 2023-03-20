const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    users : Schema.Types.Mixed,
    username_password_mapping : Schema.Types.Mixed
});

module.exports = mongoose.model('users',userSchema);