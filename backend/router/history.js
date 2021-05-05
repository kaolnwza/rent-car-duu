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


router.get('/getLoanerHistory', authToken.tranfer, async (req, res) => {
    const conn = await pool.getConnection()
    await conn.beginTransaction()


    const myUsername = req.token.username

    try {
        //get rent id from RENTING
        //const connRenting = await conn.query('SELECT')

        const loanerHistory = await conn.query('SELECT r.renting_id, v.model, v.plate_num, u.fname, u.lname, u.phone, \
        DATE_FORMAT(vr.s_date, "%Y-%m-%d") `s_date`, \
        DATE_FORMAT(vr.e_date, "%Y-%m-%d") `e_date`, \
        DATE_FORMAT(p.transaction_date, "%Y-%m-%d") `transaction_date`, r.total_price FROM vehicle v \
        JOIN vehicle_renting vr ON (v.vehicle_id = vr.item_no) \
        JOIN renting r ON (r.renting_id = vr.renting_renting_id) \
        JOIN user u ON (u.username = r.loanee_user_username)\
        JOIN payment p ON (p.renting_renting_id = r.renting_id)\
        WHERE v.loaner_user_username = ? ORDER BY r.renting_id', [myUsername])

        //get my vehicle id from VEHICLE
        // const vehicle_id = await conn.query('SELECT vehicle_id FROM vehicle WHERE loaner_user_username=?',
        //     [myUsername])



        await conn.commit()
        res.json(loanerHistory[0])


    } catch (error) {
        await conn.rollback()
        res.json(error)
    } finally {

        conn.release();
    }
})

router.get('/getLoaneeHistory', authToken.tranfer, async (req, res) => {
    const conn = await pool.getConnection()
    await conn.beginTransaction()


    const myUsername = req.token.username

    try {
        //get rent id from RENTING
        //const connRenting = await conn.query('SELECT')

        const loaneeHistory = await conn.query('SELECT r.renting_id, v.model, v.plate_num, u.fname, u.lname, u.phone,  \
        DATE_FORMAT(vr.s_date, "%Y-%m-%d") `s_date`, \
        DATE_FORMAT(vr.e_date, "%Y-%m-%d") `e_date`, \
        DATE_FORMAT(p.transaction_date, "%Y-%m-%d") `transaction_date`, r.total_price \
        FROM vehicle v \
        JOIN vehicle_renting vr ON (v.vehicle_id = vr.item_no) \
        JOIN renting r ON (r.renting_id = vr.renting_renting_id) \
        JOIN user u ON (u.username = r.loanee_user_username)\
        JOIN payment p ON (p.renting_renting_id = r.renting_id)\
        WHERE r.loanee_user_username = ? ORDER BY r.renting_id', [myUsername])

        //get my vehicle id from VEHICLE
        // const vehicle_id = await conn.query('SELECT vehicle_id FROM vehicle WHERE loaner_user_username=?',
        //     [myUsername])



        await conn.commit()
        res.json(loaneeHistory[0])


    } catch (error) {
        await conn.rollback()
        res.json(error)
    } finally {

        conn.release();
    }
})

router.get('/getPaymentHistory', authToken.tranfer, async (req, res) => {
    const conn = await pool.getConnection()
    await conn.beginTransaction()


    const myUsername = req.token.username

    try {
        //get rent id from RENTING
        //const connRenting = await conn.query('SELECT')

        const paymentHistory = await conn.query('SELECT p.payment_id, r.renting_id, p.payment_method, \
        DATE_FORMAT(p.transaction_date, "%Y-%m-%d") `transaction_date`, r.total_price \
        FROM payment p JOIN renting r ON (r.renting_id = p.renting_renting_id) \
        WHERE r.loanee_user_username = ? ORDER BY p.payment_id', [myUsername])

        //get my vehicle id from VEHICLE
        // const vehicle_id = await conn.query('SELECT vehicle_id FROM vehicle WHERE loaner_user_username=?',
        //     [myUsername])



        await conn.commit()
        res.json(paymentHistory[0])


    } catch (error) {
        await conn.rollback()
        res.json(error)
    } finally {

        conn.release();
    }
})


exports.router = router;