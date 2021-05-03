const express = require("express");
const pool = require("../config");
const authToken = require('./authToken')
const path = require('path')
const multer = require('multer')
router = express.Router();




router.get("/myCarDetail", authToken.tranfer, async (req, res, next) => {

    const username = req.token.username;

    const promise1 = pool.query("SELECT v.*, i.* FROM vehicle v JOIN insurance i ON (v.vehicle_id = vehicle_vehicle_id) WHERE loaner_user_username = ?", [username]);

    // res.json(promise1[0]);


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

})


router.post('/addCar', authToken.tranfer, async function (req, res, next) {
    const conn = await pool.getConnection()
    // Begin transaction

    await conn.beginTransaction();
    var carModel = req.body.carModel;
    var carType = req.body.carType;
    var carRegNo = req.body.carRegNo;
    var carLocation = req.body.carLocation;
    var carPrice = req.body.carPrice;

    var carOwner = req.token.username;

    var carInsurDesc = req.body.carInsurDesc
    var carInsurType = req.body.carInsurType;

    var imgPath = localStorage.getItem('image_path')

    try {



        //vehicle table
        const [row1, field1] = await conn.query(
            'INSERT INTO `vehicle` (`vehicle_type`, `plate_num`, `current_location`, `r_price`, `model`, `register_date`, `image_path`, `loaner_user_username`) VALUES (?, ?, ?,  ?, ?, CURRENT_DATE, ?, ?)',
            [carType, carRegNo, carLocation, carPrice, carModel, imgPath, carOwner])
        const [row2, field2] = await conn.query(
            'SELECT * FROM `vehicle` WHERE `vehicle_id` = ?',
            [row1.insertId])

        const [row3, field3] = await conn.query(
            'INSERT INTO `insurance` (`insurance_type`, `insurance_description`, `vehicle_vehicle_id`) VALUES (?, ?, ?)',
            [carInsurType, carInsurDesc, row1.insertId])
        const [row4, field4] = await conn.query(
            'SELECT * FROM `insurance` WHERE `insurance_id` = ?',
            [row3.insertId])


        await conn.commit()
        return res.json('complete')

    } catch (err) {
        await conn.rollback();
        console.log(err);

        return res.status(500).json(err)

    } finally {
        console.log('finally')
        conn.release();
    }
});

router.delete('/deleteCar/:vehicleID', authToken.tranfer, async (req, res) => {


    const vehicleID = req.params.vehicleID

    //const getInsuranceId = await pool.query('SELECT insurance_id FROM vehicle WHERE vehicle_id = ?', [vehicleID])

    //const insuranceID = getInsuranceId[0][0].insurance_id;

    const conn = await pool.getConnection()
    await conn.beginTransaction()


    try {


        // await conn.query("ALTER TABLE insurance DROP CONSTRAINT fk_insurance_vehicle WHERE vehicle_vehicle_id=?", [vehicleID])

        //const za = await conn.query("select * from INFORMATION_SCHEMA.KEY_COLUMN_USAGE where TABLE_NAME='insurance'")
        await conn.query('SET FOREIGN_KEY_CHECKS=0;')

        await conn.query("DELETE FROM vehicle WHERE vehicle_id = ?", [vehicleID])

        await conn.query("DELETE FROM insurance WHERE vehicle_vehicle_id = ?", [vehicleID])

        await conn.query('SET FOREIGN_KEY_CHECKS=1;')

        //const [vehicle, blogFields] = results[0];
        await conn.commit();
        console.log('success');

        res.json({

            message: 'success',
            error: null,
        });
    }
    catch (err) {

        res.json({
            message: err
        });
        console.log(err);
        await conn.rollback();
    }

})

router.put('/editCar/:vehicleID', async (req, res) => {
    console.log('ion');

    var vehicleID = req.params.vehicleID;

    var carModel = req.body.model;
    var carType = req.body.vehicle_type;
    var carPlate = req.body.plate_num;
    var carLocation = req.body.current_location;
    var carPrice = req.body.r_price;


    var carInsurDesc = req.body.insurance_description;
    var carInsurType = req.body.insurance_type;

    var imagePath = localStorage.getItem('image_path');

    console.log(vehicleID);
    console.log(imagePath);
    const conn = await pool.getConnection()
    await conn.beginTransaction()



    try {

        // await conn.query('SELECT insurance_id FROM vehicle WHERE vehicle_id = ?', [vehicleID])

        //const insuranceID = getInsuranceId[0][0].insurance_id;

        await conn.query('UPDATE vehicle SET model=?, vehicle_type=?, plate_num=?, current_location=?, r_price=?, image_path=? WHERE vehicle_id = ?',
            [carModel, carType, carPlate, carLocation, carPrice, imagePath, vehicleID])

        await conn.query('UPDATE insurance SET insurance_type=?, insurance_description=? WHERE vehicle_vehicle_id=?', [carInsurType, carInsurDesc, vehicleID])

        await conn.commit()

        res.json({
            message: 'success'
        })
    } catch (err) {
        await conn.rollback();
        res.json(err)
        console.log(err);

    }






})


//img
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './static/CarImage')
    },


    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

router.post('/submitImage', upload.single('image'), async (req, res) => {


    const file = req.file.destination + '/' + req.file.filename;
    if (!file) {
        const error = new Error("Please upload a file");
        error.httpStatusCode = 400;
        console.log('Fucking ERROR');

    }


    const title = req.body.title;
    const content = req.body.content;
    const status = req.body.status;
    const pinned = req.body.pinned;


    localStorage.setItem('image_path', file.substring(9))

    res.json({ image: localStorage.getItem('image_path') })


})

router.get('/getImage', async (req, res) => {
    const image = localStorage.getItem('image_path')
    console.log(image);

    res.json({ image: image })
})

router.put('/confirmLoaneePayment/:vehicleID', async (req, res) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    const vehicleID = req.params.vehicleID;

    try {


        await conn.query('UPDATE vehicle SET status=? WHERE vehicle_id=?', ['2', vehicleID])

        await conn.commit()
        res.json('success')

    } catch (error) {
        await conn.rollback()
        console.log(error);

        res.json(error)

    }
})

exports.router = router;
