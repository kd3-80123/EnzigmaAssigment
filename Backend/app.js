const express = require('express')
 const app=express();
 const port = 4550;
 const mongoose = require('mongoose');
const detailRoutes = require("./routes/detailroute")
var cors =require('cors');

app.use(cors());
app.use(express.json());


 app.get('/',(req,res)=>{

    res.send('Running Good ')
 })
 
 app.use(detailRoutes)

 async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017',{
        dbName:"enzigma",
    })
    
 };
 connectDB().catch((err)=>{console.error(err)});
 app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
    
 })