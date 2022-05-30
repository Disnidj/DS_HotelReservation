const express = require('express');
//create two variables from models
const hotelreser = require('../models/anodyaposts');
const HotelBooking = require('../models/anodyaposts');

const router = express.Router();

//add reservations from hotel

//set the POST method to create a new reservation
router.post('/hotelbooking/save',(req,res)=>{

    let newHotel = new HotelBooking(req.body);

    newHotel.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        //if the post saved successfully the success massage will print
        return res.status(200).json({
            success:"reservation saved successfully"
        });
    });
});

//get all  booking details using GET method
router.get('/hotelbooking',(req ,res) =>{
    HotelBooking.find().exec((err,hotelreser) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingHotelBooking:hotelreser
        });
    });
});

//update the existing booking details using PUT method
router.put('/hotelbooking/update/:id',(req,res)=>{
    HotelBooking.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, hotelreser) =>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});


//delete  a specific reservation details using DELETE method
router.delete('/hotelbooking/delete/:id',(req,res)=>{
    // find specific reservation details from id
    HotelBooking.findByIdAndRemove(req.params.id).exec((err,deletedHotelBooking) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedHotelBooking
        });
    });
});


//get specific revervation detail by using its id
router.get(`/hotelbooking/:id`,(req,res) =>{
    let HotelbookingId = req.params.id;
    HotelBooking.findById(HotelbookingId,(err,hotelreser)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            hotelreser
        });
    });
});


module.exports = router;