const express = require("express");
const pool = require("../config");
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { LocalStorage } = require('node-localstorage')
const authToken = require('./authToken')


router = express.Router();


router.get('/getUserDetail', authToken.tranfer, async (req, res) => {
    const currentUser = req.token.username;

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    const userWhat = req.params.userWhat;

    try {
        const user = await conn.query('SELECT *  FROM user WHERE username =?', [currentUser])

        res.json(user[0][0])
        conn.commit()
    } catch (error) {
        res.json(err)
    }


})




exports.router = router;