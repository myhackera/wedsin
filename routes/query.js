const express = require('express');
const router = express.Router();
const model = require('../models/query_model.js')

router.post('/query', async (req, res)=>{
    console.log(req.body);
    const data = new model({
        response: req.body.response
    });
    
    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch(error){
        res.status(400).json({message: error});
    }
});

module.exports = router;