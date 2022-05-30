const mongoose = require('mongoose');

const postanodyaSchema = new mongoose.Schema({
//set the attributes for the reservation done by hotel side
    TravellerName:{
        type:String,
        required:true
    },

    Age:{
    type:String,
    required:true
    },

    NationalID:{
    type:String,
    required:true
    },

    Address:{
    type:String,
    required:true
    },

    ContactNumber:{
        type:String,
        required:true
    },

    Email:{
        type:String,
        required:true
    },

    Type:{ 
        type:String,
        required:true
    },

    Bookingdate:{
        type:String,
        required:true
    }


});
//export the schema
module.exports = mongoose.model('HotelBooking',postanodyaSchema);