//to get the database model
const mongoose = require('mongoose');

const TravelorSchema = new mongoose.Schema({

//columns, properties of the schema

    Name:{
        type : String,
        required:true
    },
    NIC:{
        type : String,
        required:true
    },
    Phone:{
        type : String,
        required:true
    },
    Email:{
        type : String,
        required:true
    },
    type:{
        type : String,
        required:true
    },
    date:{
        type : String,
        required:true
    }

});

module.exports = mongoose.model('Travelors', TravelorSchema)