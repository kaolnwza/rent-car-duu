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

router.get('/adminCar', authToken.tranfer, async (req, res) => {

    const conn = await pool.getConnection()
    await conn.beginTransaction()



    try {
        if (req.token.username == 'admin') {
            const allCar = await conn.query('SELECT r.status `renting_status`, r.renting_id, v.*, i.*, u.* , \
        DATE_FORMAT(vr.s_date, "%Y-%m-%d") `s_date`, \
        DATE_FORMAT(vr.e_date, "%Y-%m-%d") `e_date` FROM vehicle v \
        JOIN insurance i ON (v.vehicle_id = i.vehicle_vehicle_id)\
        JOIN user u ON (v.loaner_user_username = u.username) \
        LEFT OUTER JOIN vehicle_renting vr ON (v.vehicle_id = vr.item_no)  \
        LEFT OUTER JOIN renting r ON (vr.renting_renting_id = r.renting_id)  \
        LEFT OUTER JOIN user u_loanee ON (u_loanee.username = r.loanee_user_username) \
        WHERE r.status = ? OR r.status IS NULL', ['0'])

            res.json(allCar[0])
        }
        await conn.commit()

    } catch (error) {
        await conn.rollback()
        res.json(error)
    } finally {
        conn.release()
    }

})

router.get('/adminUser', authToken.tranfer, async (req, res) => {


    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {
        if (req.token.username == 'admin') {
            const allUser = await conn.query('SELECT * FROM user WHERE username != ? ', ['admin'])

            res.json(allUser[0])
        }
        await conn.commit()

    } catch (error) {
        await conn.rollback()
        res.json(error)
    } finally {
        conn.release()
    }


})

router.put('/verifyUser/:userID', authToken.tranfer, async (req, res) => {

    const userID = req.params.userID

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {
        if (req.token.username == 'admin') {
            await conn.query('UPDATE user SET verify_status = ? WHERE username = ?', ['1', userID])

            res.json('success')
        }
        await conn.commit()

    } catch (error) {
        await conn.rollback()
        res.json(error)
    } finally {
        conn.release()
    }

})



exports.router = router;