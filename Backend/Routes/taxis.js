const express = require('express');
const taxis = require('../models/taxis');
const Taxis= require('../models/taxis');
const router =express.Router();


//save taxi booking details
router.post('/taxi/save',(req,res)=>{
    let newTaxi= new Taxis(req.body);

    newTaxi.save((err)=>{
        if(err){
            return res.status(400).json(
                {
                error:err
            });
        }

        return res.status(200).json({
            success:"details saved successfuly!"
        });
    });
});

//get specific detail
router.get("/taxidetailsone/:id",(req,res)=>{
    let taxidetailsId=req.params.id;

    Taxis.findById(taxidetailsId,(err,taxis)=>{
        if(err){
            return res.status(400).json({
                success:false,err
            })
        }
        return res.status(200).json({
            success:true,taxis
        });
    });
});


// get all taxi booking details
router.get('/taxidetails',(req,res)=>{
    Taxis.find().exec((err,taxis)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingTaxis:taxis
        });
    });
});


//update taxi booking details
router.put('/taxi/update/:id',(req,res)=>{
    Taxis.findByIdAndUpdate(
    req.params.id,
    {
        $set:req.body
    },
    (err,taxis)=>{
        if (err){
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success:"Details updated"
    });

    });
});

//delete taxi details

router.delete('/taxi/delete/:id',(req,res)=>{
    Taxis.findByIdAndRemove (req.params.id)
    .exec(
            (err,deletedTaxi)=>{
                if(err) return res.status(400).json({
                    message:"Deleted unsuccessful",err
                });
                return res.json({
                    message:"Delete successfull",deletedTaxi
                });
            });
    
});






module.exports=router;