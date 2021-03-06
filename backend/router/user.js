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


router.get('/getUserDetail', authToken.tranfer, async (req, res) => {
    const currentUser = req.token.username;

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    //const userWhat = req.params.userWhat;

    try {
        const user = await conn.query('SELECT *  FROM user WHERE username =?', [currentUser])

        res.json(user[0][0])
        await conn.commit()
    } catch (error) {
        res.json(error)
        console.log(error);

        await rollback()
    } finally {

        conn.release();
    }


})

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './static/UserImage')
    },


    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })


router.post('/submitUserImage', upload.single('image'), async (req, res) => {


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


    localStorage.setItem('edit_user_image', file.substring(9))

    res.json({ image: localStorage.getItem('edit_user_image') })


})

const userEditSchema = Joi.object({
    email: Joi.string().email().max(40),
    phone: Joi.string().required().pattern(/0[0-9]{9}/).max(10),
    fname: Joi.string().required().max(30),
    lname: Joi.string().required().max(30),

    // password: Joi.string().required().custom(passwordValidator).min(8).max(30),
    // confirm_password: Joi.string().required().valid(Joi.ref('password')),
    // username: Joi.string().required().min(5).max(20).external(usernameValiator),
    age: Joi.number().integer().required().max(99),
    dob: Joi.string().required(),
    gender: Joi.string().required(),
    address: Joi.string().required().max(200),
    id_card: Joi.string().required().min(13).max(13),
    driving_lc: Joi.string().required().min(8).max(8),
    image_path: Joi.string()

})
router.put('/editUser/:userID', async (req, res) => {
    console.log(req.body);

    try {
        await userEditSchema.validateAsync(req.body, { abourtEarly: false })
    }
    catch (err) {
        console.log(err);

        return res.status(400).json(err)
    }

    const username = req.params.userID
    // const password = await bcrypt.hash(req.body.password, 2)
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    const phone = req.body.phone
    const age = req.body.age
    const dob = req.body.dob
    const address = req.body.address
    const gender = req.body.gender
    const id_card = req.body.id_card
    const driving_lc = req.body.driving_lc

    var imagePath = req.body.image_path


    const conn = await pool.getConnection()
    await conn.beginTransaction()


    try {

        await conn.query('UPDATE user SET fname=?, lname=?, email=?, phone=?, age=?, dob=?, address=?, gender=?, id_card=?, driving_lc=?, image_path=? WHERE username=?',
            [fname, lname, email, phone, age, dob, address, gender, id_card, driving_lc, imagePath, username])



        await conn.commit()

        res.json({
            message: 'success'
        })
    } catch (err) {

        res.json(err)
        console.log(err);
        await conn.rollback();
    } finally {

        conn.release();
    }






})

exports.router = router;