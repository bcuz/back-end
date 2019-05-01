require('dotenv').config()
const express = require('express');
const router = express.Router();
const {generateToken} = require('../auth/token-service')
const studentRouter = require('./studentRoutes');
const authRouter = require('../auth/authRoutes')
const db = require('../data/dbconfig');
const { authenticate } = require('../auth/authenticate');


router.use('/',studentRouter,authRouter,authenticate);

router.get('/', generateToken, (req, res) => {
	db('students')
		.select('id', 'username')
		.then(users => {
			res.json({ users, decodedToken: req.decodedToken })
		})
		.catch(() => {
			res.status(500).json({ message: 'You shall not pass!' })
		})
})

module.exports = router;