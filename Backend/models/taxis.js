const mongoose= require('mongoose');

const taxiSchema = mongoose.Schema({

    Vehical_type:{
        type:String,
        required:true
    },
    Starting_point:{
        type:String,
        required:true
    },
    Destination_point:{
        type:String,
        required:true
    },
    Date_of_reserve:{
        type:String,
        required:true
    },
    Time_of_reserve:{
        type:String,
        required:true
    },
    Customer_name:{
        type:String,
        required:true
    },
    Customer_tel_number:{
        type:String,
        required:true
    }

});

module.exports=mongoose.model('Taxi',taxiSchema);