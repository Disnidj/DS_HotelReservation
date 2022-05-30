const express = require('express');
const hotel = require('../models/hotelposts');
const Hotelregister = require('../models/hotelposts');

const router = express.Router();

//add reservations from hotel

router.post('/hotelregister/save',(req,res)=>{

    let newHotel = new Hotelregister(req.body);

    newHotel.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post saved successfully"
        });
    });
});

//get reserved booking
router.get('/hotelregister',(req ,res) =>{
    Hotelregister.find().exec((err,hotel) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingHotelregister:hotel
        });
    });
});

//update posts

/*router.put('/hotelbooking/update/:id',(req,res)=>{
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
});*/


//delete reservation
/*router.delete('/hotelbooking/delete/:id',(req,res)=>{
    HotelBooking.findByIdAndRemove(req.params.id).exec((err,deletedHotelBooking) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedHotelBooking
        });
    });
});


//get specific booking
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
*/

module.exports = router;