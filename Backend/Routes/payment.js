const express = require('express');
//create two variables from models
const Payment = require('../models/payment');
const pay = require('../models/payment');

const router = express.Router();

//add payment details

//set the POST method to save payment details
router.post('/payment/save',(req,res)=>{

    let newPayment = new Payment(req.body);

    newPayment.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        //if the post saved successfully the success massage will print
        return res.status(200).json({
            success:"payment saved successfully"
        });
    });
});

//get all  payment details using GET method
router.get('/payment',(req ,res) =>{
    Payment.find().exec((err,Pay) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingPay:Pay
        });
    });
});

//update the existing payment details using PUT method
router.put('/payment/update/:id',(req,res)=>{
    Payment.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, Pay) =>{
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
router.delete('/payment/delete/:id',(req,res)=>{
    // find specific reservation details from id
    Payment.findByIdAndRemove(req.params.id).exec((err,deletedPayment) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedPayment
        });
    });
});


//get specific revervation detail by using its id
router.get('/payment/:id',(req,res) =>{
    let PaymentId = req.params.id;
    Payment.findById(PaymentId,(err,Pay)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            Pay
        });
    });
});


module.exports = router;