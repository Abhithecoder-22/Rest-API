const express= require('express');
const mongoose = require('mongoose');


const menschema=new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    }

});
const MensRanking=new mongoose.model("MensRanking", menschema);
module.exports=MensRanking;