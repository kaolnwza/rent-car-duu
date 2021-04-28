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


        const user = await conn.query('SELECT fname, lname, email, phone FROM user WHERE username = ?',
            [selectedUser])

        conn.commit()

        res.json(user[0][0])
    }

    catch (error) {
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


        const user = await conn.query('SELECT  fname, lname, phone, email FROM user WHERE username =?',
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



router.get("/allCar", function (req, res, next) {

    const promise1 = pool.query("SELECT * FROM vehicle");



    Promise.all([promise1])
        .then((results) => {
            const [vehicle, blogFields] = results[0];

            res.json({
                vehicle: vehicle,
                error: null,
            });
        })
        .catch((err) => {
            return res.status(500).json(err);
        });
});


exports.router = router;