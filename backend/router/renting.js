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
    } finally {

        conn.release();
    }

})

const rentSchema = Joi.object({
    vehicle_id: Joi.number().integer(),
    s_date: Joi.string(),
    e_date: Joi.string(),
    total_time: Joi.number().integer(),
    total_price: Joi.number().integer(),
    payment_method: Joi.string().required(),
    pickup_location: Joi.string().required().max(100),
    return_location: Joi.string().required().max(100),
    image_path: Joi.string()

})

router.post('/rentCar', authToken.tranfer, async (req, res) => {
    console.log('in');

    try {
        await rentSchema.validateAsync(req.body, { abourtEarly: false })
    }
    catch (err) {
        console.log(err);

        return res.status(400).json(err)
    }

    const loanee = req.token.username;
    const vehicleID = req.body.vehicle_id;
    const s_date = req.body.s_date;
    const e_date = req.body.e_date;
    const total_time = req.body.total_time;
    const total_price = req.body.total_price;
    const payment_method = req.body.payment_method
    const image_path = req.body.image_path

    const pickup_location = req.body.pickup_location
    const return_location = req.body.return_location

    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try {

        const getLoaneeDetail = await conn.query('SELECT * FROM loanee WHERE user_username=?', [loanee])
        const loaneeID = getLoaneeDetail[0][0].loanee_no

        //RENTING QUERY
        const [rentingTable, field] = await conn.query('INSERT INTO `renting` (`status`, `total_time`,  `total_price`, `loanee_loanee_no`, `loanee_user_username`, `p_location`, `r_location`) VALUES (?, ?, ?, ?, ?, ?, ?)',
            ['0', total_time, total_price, loaneeID, loanee, pickup_location, return_location])
        //ADD RENTING_ID
        const [rentingRow, field2] = await conn.query('SELECT * FROM `renting` WHERE `renting_id`=?',
            [rentingTable.insertId])
        const rentingTableID = rentingTable.insertId

        //SENT STATUS TO VEHICLE TABLE
        const setVehicleStatus = await conn.query('UPDATE vehicle SET status=? WHERE vehicle_id =?', [1, vehicleID])

        //VEHICLE RENTING TABLE
        const [vehicleRentingTable, field3] = await conn.query('INSERT INTO `vehicle_renting` (`item_no`, `s_date`, `e_date`, `price`, `renting_renting_id`) VALUES (?, ?, ?, ?, ?) ',
            [vehicleID, s_date, e_date, total_price, rentingTableID])
        const rentingID = rentingTable.insertId
        //ADD ITEM_NO

        // const [add_item_no, field4] = await conn.query('SELECT * FROM `vehicle_renting` WHERE `item_no`=?',
        //     [vehicleRentingTable.insertId])

        //PAYMENT TABLE
        const [paymentTable, field5] = await conn.query('INSERT INTO `payment` (`payment_method`, `transaction_date`, `renting_renting_id`, `image_path`) VALUES (?, CURRENT_TIMESTAMP, ?, ?)',
            [payment_method, rentingID, image_path])
        //ADD payment_id
        const [add_payment_id, field6] = await conn.query('SELECT * FROM `payment` WHERE `payment_id`=?',
            [paymentTable.insertId])

        await conn.commit()
        res.json('success')



    } catch (error) {
        res.json(error)
        console.log(error);

        await conn.rollback()
    } finally {

        conn.release();
    }
})

router.put('/removeRenting/:rentingID', async (req, res) => { // dont needd
    const rentingID = req.params.rentingID;

    const conn = await pool.getConnection();
    await conn.beginTransaction()

    try {
        //GET VEHICLE ID
        const vehicleID = await conn.query('SELECT item_no FROM vehicle_renting WHERE renting_renting_id=?',
            [rentingID])
        //SET CAR FROM VEHICLE_TABLE TO STATUS=0
        await conn.query('UPDATE vehicle SET status=? WHERE vehicle_id =?', [0, vehicleID[0][0].item_no])

        await conn.query('UPDATE renting SET status=? WHERE renting_id=?', ['1', rentingID])

        await conn.commit()

        res.json('success');

    } catch (error) {
        console.log(error);
        res.json(error)
        await conn.rollback()



    } finally {
        await conn.query('SET FOREIGN_KEY_CHECKS=1;')
        conn.release();
    }
})

//router.use(lolza)


exports.router = router;