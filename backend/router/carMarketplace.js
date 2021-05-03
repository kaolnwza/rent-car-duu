const express = require("express");
const pool = require("../config");
const authToken = require('./authToken')
const path = require('path')
const multer = require('multer')
router = express.Router();


router.get('/selectUser/:user', async (req, res) => {
    const selectedUser = req.params.user

    const conn = await pool.getConnection()
    await conn.beginTransaction()
    try {


        const user = await conn.query('SELECT * FROM user WHERE username = ?',
            [selectedUser])

        await conn.commit()

        res.json(user[0][0])
    }

    catch (error) {
        await conn.rollback()
        res.json(error)
    }
})

router.get('/selectUser/vehicle/:vehicleID', async (req, res) => {
    const selectedUser = req.params.user
    const vehicleID = req.params.vehicleID
    const conn = await pool.getConnection()
    await conn.beginTransaction()
    try {

        const arr = []
        const vehicle = await conn.query('SELECT * FROM vehicle WHERE vehicle_id = ?',
            [vehicleID])



        const insurance = await conn.query('SELECT * FROM insurance WHERE vehicle_vehicle_id = ?',
            [vehicleID])


        const user = await conn.query('SELECT  * FROM user WHERE username =?',
            [vehicle[0][0].loaner_user_username])
        // asd.forEach(x => {

        // });
        // arr.push(user[0][0])
        // arr[0].push(user2[0][0].insurance_id)
        await conn.commit()

        res.json({
            vehicle: vehicle[0][0],
            insurance: insurance[0][0],
            user: user[0][0]
        })
    }

    catch (error) {
        res.json(error)
    }
})

//user will differrnt here will get current login user but on top of here will get loaner user
router.get('/selectUser/vehicle/renting/:vehicleID', authToken.tranfer, async (req, res) => {
    const selectedUser = req.token.username
    const vehicleID = req.params.vehicleID
    const conn = await pool.getConnection()
    await conn.beginTransaction()
    try {

        const arr = []
        const vehicle = await conn.query('SELECT * FROM vehicle WHERE vehicle_id = ?',
            [vehicleID])



        const insurance = await conn.query('SELECT * FROM insurance WHERE vehicle_vehicle_id = ?',
            [vehicleID])


        const user = selectedUser
        // asd.forEach(x => {

        // });
        // arr.push(user[0][0])
        // arr[0].push(user2[0][0].insurance_id)
        await conn.commit()

        res.json({
            vehicle: vehicle[0][0],
            insurance: insurance[0][0],
            user: user
        })
    }

    catch (error) {
        res.json(error)
    }
})

router.get("/allCar", async (req, res, next) => {



    const conn = await pool.getConnection();
    await conn.beginTransaction()

    try {

        const vehicle = await conn.query("SELECT * FROM vehicle WHERE status = 0");

        res.json(
            vehicle[0]
        )
        await conn.commit()

    } catch (error) {
        await conn.rollback();
        res.json(error)
    }


});


router.get('/search/:data', async (req, res) => {

    const data = req.params.data

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {

        const searchList = await conn.query('SELECT * FROM vehicle WHERE model LIKE ? ',
            ['%' + data + '%'])



        res.json(searchList[0])
        await conn.commit()
    } catch (error) {
        conn.rollback()
        console.log(error);

    }

})
exports.router = router;