const mongoose = require('mongoose');

const hotelpostsSchema = new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },

    NationalID:{
    type:String,
    required:true
    }, 

    Email:{
        type:String,
        required:true
    },

    UserName:{
        type:String,
        required:true
    },

    Password:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('hotelregister',hotelpostsSchema);