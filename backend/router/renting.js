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


        res.json('done')

    } catch (error) {
        res.json(error)
    }

})

router.post('/rentCar', authToken.tranfer, async (req, res) => {
    console.log('in');

    const loanee = req.token.username;
    const vehicleID = req.body.vehicle_id;
    const s_date = req.body.s_date;
    const e_date = req.body.e_date;
    const total_time = req.body.total_time;
    const total_price = req.body.total_price;
    const payment_method = req.body.payment_method

    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try {

        const getLoaneeDetail = await conn.query('SELECT * FROM loanee WHERE user_username=?', [loanee])
        const loaneeID = getLoaneeDetail[0][0].loanee_no

        //RENTING QUERY
        const [rentingTable, field] = await conn.query('INSERT INTO `renting` (`total_time`,  `total_price`, `loanee_loanee_no`, `loanee_user_username`) VALUES (?, ?, ?, ?)',
            [total_time, total_price, loaneeID, loanee])
        //ADD RENTING_ID
        const [rentingRow, field2] = await conn.query('SELECT * FROM `renting` WHERE `renting_id`=?',
            [rentingTable.insertId])
        const rentingTableID = rentingTable.insertId

        //SENT STATUS TO VEHICLE TABLE
        const setVehicleStatus = await conn.query('UPDATE vehicle SET status=? WHERE vehicle_id =?', [1, vehicleID])

        //VEHICLE RENTING TABLE
        const [vehicleRentingTable, field3] = await conn.query('INSERT INTO `vehicle_renting` (`s_date`, `e_date`, `price`, `renting_renting_id`) VALUES (?, ?, ?, ?) ',
            [s_date, e_date, total_price, rentingTableID])
        const rentingID = rentingTable.insertId
        //ADD ITEM_NO
        const [add_item_no, field4] = await conn.query('SELECT * FROM `vehicle_renting` WHERE `item_no`=?',
            [vehicleRentingTable.insertId])

        //PAYMENT TABLE
        const [paymentTable, field5] = await conn.query('INSERT INTO `payment` (`payment_method`, `transaction_date`, `renting_renting_id`) VALUES (?, CURRENT_TIMESTAMP, ?)',
            [payment_method, rentingID])
        //ADD payment_id
        const [add_payment_id, field6] = await conn.query('SELECT * FROM `payment` WHERE `payment_id`=?',
            [paymentTable.insertId])

        await conn.commit()
        res.json('success')



    } catch (error) {
        res.json(error)
        console.log(error);

        await conn.rollback()
    }
})

router.delete('/removeRenting/:rentingID', async (req, res) => { // dont needd
    const rentingID = req.params.rentingID;

    const conn = await pool.getConnection();
    await conn.beginTransaction()

    try {
        //GET VEHICLE ID
        const vehicleID = await conn.query('SELECT item_no FROM vehicle_renting WHERE renting_renting_id=?',
            [rentingID])
        //SET CAR FROM VEHICLE_TABLE TO STATUS=0
        await conn.query('UPDATE vehicle SET status=? WHERE vehicle_id =?', [0, vehicleID])

        await conn.query('SET FOREIGN_KEY_CHECKS=0;')

        //DELETE vehicle_renting table column
        await conn.query("DELETE FROM vehicle_renting WHERE renting_renting_id = ?", [rentingID])

        //DELETE payment table column
        await conn.query("DELETE FROM vehicle_renting WHERE renting_renting_id = ?", [rentingID])



        await conn.query('SET FOREIGN_KEY_CHECKS=1;')

    } catch (error) {
        console.log(error);
        res.json(error)

        await conn.query('SET FOREIGN_KEY_CHECKS=1;')
        await conn.rollback()
    }
})

//router.use(lolza)


exports.router = router;