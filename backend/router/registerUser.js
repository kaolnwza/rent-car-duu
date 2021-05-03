const express = require("express");
const pool = require("../config");
const Joi = require('joi');
const bcrypt = require('bcrypt');

router = express.Router();


function passwordValidator(val) {
    if (val.length < 8) {
        throw new Joi.ValidationError('short')
    }
    if (!(val.match(/[a-z]/) && val.match(/[A-Z]/) && val.match(/[0-9]/))) {
        throw new Joi.ValidationError('EZ')
    }
    return val
}

async function usernameValiator(val) {
    const [rowsUser, _] = await pool.query("SELECT username FROM user WHERE username = ?", [val])
    // const [rowsLoanee, _2] = await pool.query("SELECT user_username FROM loanee WHERE user_username = ?", [val])
    // const [rowsLoaner, _3] = await pool.query("SELECT user_username FROM loaner WHERE user_username = ?", [val])

    Promise.all([rowsUser])

        .catch(err => { console.log(err) })

    //console.log(rows);

    if (rowsUser.length > 0) {
        const message = 'already'
        throw new Joi.ValidationError(message, { message })
    }
    return val
}

const signupSchema = Joi.object({
    email: Joi.string().email().max(40),
    phone: Joi.string().required().pattern(/0[0-9]{9}/).max(10),
    f_name: Joi.string().required().max(30),
    l_name: Joi.string().required().max(30),

    password: Joi.string().required().custom(passwordValidator).min(8).max(30),
    confirm_password: Joi.string().required().valid(Joi.ref('password')),
    username: Joi.string().required().min(5).max(20).external(usernameValiator),
    age: Joi.number().integer().required().max(99),
    dob: Joi.string().required(),
    gender: Joi.string().required(),
    address: Joi.string().required().max(200),
    id_card: Joi.string().required().min(13).max(13),
    driving_lc: Joi.string().required().min(8).max(8)

})

router.post('/user/signup', async (req, res, next) => {



    try {
        await signupSchema.validateAsync(req.body, { abourtEarly: false })
    }
    catch (err) {
        return res.status(400).json(err)
    }

    try {
        const username = req.body.username
        const password = await bcrypt.hash(req.body.password, 2)
        const f_name = req.body.f_name
        const l_name = req.body.l_name
        const email = req.body.email
        const phone = req.body.phone
        const age = req.body.age
        const dob = req.body.dob
        const address = req.body.address
        const gender = req.body.gender
        const id_card = req.body.id_card
        const driving_lc = req.body.driving_lc

        const conn = await pool.getConnection()
        await conn.beginTransaction();


        await conn.query(
            'INSERT INTO user(username, password, fname, lname, email, phone, age, dob, address, gender, id_card, driving_lc) ' +
            'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )', [username, password, f_name, l_name, email, phone, age, dob, address, gender, id_card, driving_lc]

        )
        await conn.query('INSERT INTO `loanee` (`user_username`) VALUES (?)', [username]);

        await conn.query('INSERT INTO `loaner` (`user_username`) VALUES (?)', [username]);


        await conn.commit()
        console.log('done');

        res.send('Done')
    } catch (err) {
        console.log(err);

        return res.json(err)
        //res.send(error)
    }



}
)




exports.router = router;