const express = require("express");
const pool = require("../config");
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { LocalStorage } = require('node-localstorage')
const authToken = require('./authToken')


require('dotenv').config()

router = express.Router();




router.post('/user/login', async (req, res, next) => {


    console.log(req.body);


    var loginStatus = false;
    const conn = await pool.getConnection()
    await conn.beginTransaction()

    const username = req.body.username;
    const password = req.body.password


    try {


        const hashedPassword = await conn.query('SELECT password FROM user  WHERE username = ?', [username])

        if (await bcrypt.compare(password, hashedPassword[0][0].password)) {
            console.log('Login Success')
            loginStatus = true

        }

    } catch (err) {
        loginStatus = false
        console.log('error', err.message);

    } finally {
        res.json({
            loginStatus: loginStatus,
        })
        conn.commit()
    }
})











router.get('/dbtest', authToken.tranfer, async (req, res, next) => {
    const userX = req.token
    console.log(userX);
    const conn = await pool.getConnection()
    await conn.beginTransaction()
    try {
        const dbtest = await conn.query('SELECT model FROM vehicle WHERE owner=?', [userX])

        res.json(dbtest[0])
        conn.commit()

    } catch (error) {
        conn.rollback()
        next(error)
    }
})

//INPUT USER TO TOKEN
router.post('/accessToken', async (req, res) => {
    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {
        const usernameREQ = req.body.username;

        const SQL = await conn.query('SELECT * FROM user WHERE username = ?', [usernameREQ])

        const calledSQL = SQL[0][0]

        const user = {
            username: usernameREQ,
            fname: calledSQL.fname,
            lname: calledSQL.lname,
            email: calledSQL.email,
            phone: calledSQL.phone,
            age: calledSQL.age,
            gender: calledSQL.gender,
            address: calledSQL.sex,
            dob: calledSQL.dob,
            insurance_id: calledSQL.insurance_id,
            id_card: calledSQL.id_card,
            driving_lc: calledSQL.driving_lc
        }

        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        localStorage.setItem('access_token', accessToken)


        res.json({ accessToken: accessToken })

    } catch (error) {
        res.json(error)
    }


})

//before conn sql
// router.post('/accessToken', (req, res) => {
//     const username = req.body.username;
//     const user = { tokenUsername: username }
//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//     localStorage.setItem('username', user.tokenUsername)
//     localStorage.setItem('access_token', accessToken)
//     // const test = localStorage.getItem('access_token');
//     // console.log('localStorage - \n' + test);

//     res.json({ accessToken: accessToken })
// })



//router.use(lolza)


exports.router = router;