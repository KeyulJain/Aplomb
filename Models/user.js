const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,   
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }],
});

const User = mongoose.model('User', userschema);

module.exports = User;
