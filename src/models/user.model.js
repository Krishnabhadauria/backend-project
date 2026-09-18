const mongoose = require('mongoose');

const userSchema =  mongoose.Schema({
    email:{
        type:String,
        required:[true,'Email is required for creating an account'],
        trim:true,
        lowercase:true,
    }

})
