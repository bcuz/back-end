const express = require('express');
const db = require('../data/dbHelpers/studentDb.js');
const router = express.Router();

router.get('/students', async (req, res)=>{
    try{
        const students = await db.getAllStudents()
        res.status(200).json(students);
    }
    catch(error){
        res.status(500),json(error)
    }
})

module.exports = router;