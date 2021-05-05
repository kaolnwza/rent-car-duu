const express = require("express");
const pool = require("../config");
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { LocalStorage } = require('node-localstorage')
const authToken = require('./authToken')


router = express.Router();


/*
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

    console.log(file);

    localStorage.setItem('image_path', file)


})
*/

router.get('/calltoken', authToken.tranfer, (req, res) => {
    res.json(req.token)
})


router.get('/checkLocal', (req, res) => {

    res.json({

        access_token: localStorage.getItem('access_token'),
        image_path: localStorage.getItem('image_path'),
        select_user: localStorage.getItem('select_user'),
        edit_car_image: localStorage.getItem('edit_car_image'),
        add_car_image: localStorage.getItem('add_car_image'),
        edit_user_image: localStorage.getItem('edit_user_image'),
        payment_image: localStorage.getItem('payment_image'),

    })

})





//router.use(lolza);

router.get('/test01', (res, req, next) => {
    //router.use(lolza)
    console.log('01');
    //req.send(lolza)




})
router.get('/test02', (res, req, next) => {
    console.log('02');
    req.send('02')



})

function lolzag(req, res, next) {
    console.log('LOLZA1');
    res.location('/test02')



}
function lolza2(req, res, next) {
    console.log('LOLZA2');


}
function lolza3(req, res, next) {
    console.log('LOLZA3');

}




exports.router = router;