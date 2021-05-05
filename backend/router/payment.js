const express = require("express");
const pool = require("../config");
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { LocalStorage } = require('node-localstorage')
const authToken = require('./authToken')
const multer = require('multer')
const path = require('path')

router = express.Router();

router.get('/paymentDetail/:rentingID', async (req, res) => {

    const renting_id = req.params.rentingID

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {

        const payment = await conn.query('SELECT * FROM payment WHERE renting_renting_id = ?', renting_id)


        res.json(payment[0][0])
        await conn.commit()

    } catch (error) {
        await conn.rollback()
        res.json(error)
        console.log(error);

    }
    finally {
        conn.release()
    }

})

exports.router = router;