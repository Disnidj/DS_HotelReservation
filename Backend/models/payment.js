const mongoose = require('mongoose');

const postdeborahSchema = new mongoose.Schema({
//set the attributes for the reservation done by hotel side
    travellerName:{
        type:String,
        required:true
    },

    cardNumber:{
        type:String,
        required:true
    },

    cvc:{ 
        type:String,
        required:true
    },

    amount:{
        type:String,
        required:true
    }
});
//export the schema
module.exports = mongoose.model('Payment', postdeborahSchema);