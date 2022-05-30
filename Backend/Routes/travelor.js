const express = require ('express');
const travelor = require('../models/travelor');

//import the user model
const Travelors = require('../models/travelor');

//a variable to access the routes (to write the http requests)
const router = express.Router();

//to save bookings
router.post('/travelor/save', (req, res) => {
    
    let newTravelor = new Travelors(req.body);

    //to save the content
    //if there is an error in saving
    newTravelor.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        //to show whether it is been saved
        return res.status(200).json({
            success:"Reservation has been added successfully.....!"
        });
    });
});


//to get details of bookings
router.get('/travelors', (req,res) =>{ //declaring the end point
    //uses the find method from mongoose
    Travelors.find().exec((err,travelors) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        //if we can find the categories without any error
        return res.status(200).json({
            success:true,
            existingTravelors:travelors
        });
    });
});


//update function 
router.put('/travelor/update/:id', (req,res)=>{ //declaring the end point
    Travelors.findByIdAndUpdate(
        req.params.id,{
        //gets the id of the selected post
        $set:req.body //body-updates all the information
        } ,
        (err, travelor)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            //if no error
            return res.status(200).json({
                success:"Reservation has been updated successfully....!"
            });
        }
    );
});



//delete 
router.delete('/travelor/delete/:id', (req, res) =>{
    Travelors.findByIdAndRemove(req.params.id).exec((err, deletedTravelor) =>{
        if(err) 
        return res.status(400).json({
            message:"Failed to delete !", err
        });
        //if success
        return res.json({
            message:"Reservation has been deleted successfully...!",deletedTravelor
        });
    });
});

//get a specific reservation

router.get("/travelor/:id",(req,res)=>{
    let travelorId = req.params.id;

    Travelors.findById(travelorId,(err,travelor)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            travelor
        });
    });
});

module.exports = router;