const express=require('express');
const connt=require("../src/db/conn");
const MensRanking=require("../src/models/mens");
const { default: mongoose } = require('mongoose');
const app= express();

  
const port=process.env.PORT || 3000;

app.get("/",async(req,res)=>{
    res.send("hello from our server");
});

async function connect(){
    try {
        // const addmensRecords=new MensRanking(req.body)
        await mongoose.connect(connt)
        console.log("hello");
        //  addmensRecords.save();
        // res.send(insertmens);
    }catch(e){
        res.send(e);
    }
}
app.listen(port,()=>{
    console.log(`connection is live at ${port}`);
});
