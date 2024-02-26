const express = require('express');
const { Event} = require('../../db/models');

const router = express.Router();


router.get('/',async (req,res)=>{
const events = await Event.findAll()
res.json({events})
})

module.exports = router;
