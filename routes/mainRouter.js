const express = require('express');
const router = express.Router();

const studentRouter = require('./studentRoutes');

router.use('/',studentRouter);

module.exports = router;