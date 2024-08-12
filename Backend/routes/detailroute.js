const express = require('express')
const router = express.Router();
const { addDetails, 
    getDetails, 
    getDetail, 
    updateDetail,
    deleteDetail } = require('./../Handler/detailHandler');

router.post('/detail',async (req,res)=>{
    //detail addition operation
   let detail= await addDetails(req.body);
    res.send(detail);
})

router.get('/detail',async (req,res)=>{
//detail operation of getting whole data
let details = await getDetails();
res.send(details);
})

router.get('/detail/:id',async (req,res) => {
    //detail operation to get single data using ID
    console.log("id",req.params["id"]);
    let detail = await getDetail(req.params["id"]);
    res.send(detail);
})

router.put('/detail/:id',async (req , res) => {
        //detail  operation for updating data
        console.log("id",req.params["id"]);
        await updateDetail(req.params["id"], req.body);
        res.send({});
})

router.delete('/detail/:id',async (req , res) => {
    //detail  operation for updating data
    console.log("id",req.params["id"]);
    await deleteDetail(req.params["id"]);
    res.send({});
})
module.exports = router;