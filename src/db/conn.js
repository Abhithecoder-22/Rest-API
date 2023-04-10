 const mongoose=require('mongoose');
 const express = require('express');

mongoose.connect("mongodb://localhost:27017/Olympics",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful")
}).catch((e)=>{
    console.log("Error detected");
})

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

