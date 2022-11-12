const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true,
    },      
    email: {
        type: 'string',
        required:true,
        unique: true
    },
    sub:{
        type: Boolean,
        required: true,
        default: false
    },
    gender: String,
})

const user = mongoose.model('user', userSchema); // shape of the userdb doucment is 'schema' and document name is 'userdb'
module.exports = user;