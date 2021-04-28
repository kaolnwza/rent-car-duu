const express = require("express");
const pool = require("../config");
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { LocalStorage } = require('node-localstorage')
const authToken = require('./authToken')


require('dotenv').config()

router = express.Router();



router.post('/testRent', authToken.tranfer, async (req, res) => {

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {


        //const SQL = await conn.query('')


        res.json('done')

    } catch (error) {
        res.json(error)
    }

})

//router.use(lolza)


exports.router = router;