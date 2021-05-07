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


    console.log('req body = ', req.body);


    var loginStatus = false;
    const conn = await pool.getConnection()
    await conn.beginTransaction()

    const username = req.body.username;
    const password = req.body.password;




    try {


        const hashedPassword = await conn.query('SELECT password FROM user  WHERE username = ?', [username])
        if (hashedPassword[0][0] == undefined) {
            return res.status(400).json('error')
        }
        console.log(hashedPassword[0][0]);


        if (await bcrypt.compare(password, hashedPassword[0][0].password)) {

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
            loginStatus = true

            res.json({ accessToken: accessToken, username: user.username, fname: user.fname, lname: user.lname, loginStatus: loginStatus })

        }
        else {
            return res.status(400).json('error')
        }

    } catch (err) {
        loginStatus = false
        console.log('error', err.message);
        res.json(err)

    } finally {
        // res.json({
        //     loginStatus: loginStatus,
        // })
        conn.release()
    }
})











// router.get('/dbtest', authToken.tranfer, async (req, res, next) => {
//     const userX = req.token
//     console.log(userX);
//     const conn = await pool.getConnection()
//     await conn.beginTransaction()
//     try {
//         const dbtest = await conn.query('SELECT model FROM vehicle WHERE owner=?', [userX])

//         res.json(dbtest[0])
//         conn.commit()

//     } catch (error) {
//         conn.rollback()
//         next(error)
//     } finally {

//         conn.release();
//     }
// })

// //INPUT USER TO TOKEN
// router.post('/accessToken', async (req, res) => {
//     const conn = await pool.getConnection()
//     await conn.beginTransaction()

//     try {
//         const usernameREQ = req.body.username;

//         const SQL = await conn.query('SELECT * FROM user WHERE username = ?', [usernameREQ])

//         const calledSQL = SQL[0][0]

//         const user = {
//             username: usernameREQ,
//             fname: calledSQL.fname,
//             lname: calledSQL.lname,
//             email: calledSQL.email,
//             phone: calledSQL.phone,
//             age: calledSQL.age,
//             gender: calledSQL.gender,
//             address: calledSQL.sex,
//             dob: calledSQL.dob,
//             insurance_id: calledSQL.insurance_id,
//             id_card: calledSQL.id_card,
//             driving_lc: calledSQL.driving_lc
//         }

//         const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//         localStorage.setItem('access_token', accessToken)


//         res.json({ accessToken: accessToken, fname: user.fname, lname: user.lname })

//     } catch (error) {
//         res.json(error)
//     } finally {

//         conn.release();
//     }


// })

router.put('/logout', async (req, res) => {


    try {
        localStorage.setItem('access_token', '');

        res.json('success')
    } catch (error) {
        res.json(error)
    }



})

function passwordValidator(val) {
    if (val.length < 8) {
        throw new Joi.ValidationError('short')
    }
    if (!(val.match(/[a-z]/) && val.match(/[A-Z]/) && val.match(/[0-9]/))) {
        throw new Joi.ValidationError('EZ')
    }
    return val
}

const changepasswordSchema = Joi.object({
    input_password: Joi.string(),
    new_password: Joi.string().required().custom(passwordValidator).min(8).max(30),
    new_confirm_password: Joi.string().required().valid(Joi.ref('new_password'))


})

router.put('/changePassword', authToken.tranfer, async (req, res) => {


    try {
        await changepasswordSchema.validateAsync(req.body, { abourtEarly: false })
    }
    catch (err) {
        console.log('scheme error', err);

        return res.status(400).json(err)
    }

    const username = req.token.username

    const input_password = req.body.input_password

    const new_password = req.body.new_password;
    const new_confirm_password = req.body.new_confirm_password;

    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try {
        const hashedPassword = await conn.query('SELECT password FROM user  WHERE username = ?', [username])

        if (await bcrypt.compare(input_password, hashedPassword[0][0].password)) {

            const password = await bcrypt.hash(new_password, 2)

            await conn.query('UPDATE user SET password = ? WHERE username = ?', [password, username])

            res.json('success')

        }
        else {
            console.log('wrong');

            return res.status(400).json('ERR');

        }
        await conn.commit()

    } catch (err) {
        await conn.rollback()
        res.json(err)
        console.log(err);

    } finally {
        conn.release()
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