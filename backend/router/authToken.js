const express = require("express");
const pool = require("../config");
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


module.exports = {
    tranfer: function authenticateToken(req, res, next) {
        //const authHeader = req.headers['authorization']
        const authHeader = "Bearer " + localStorage.getItem('access_token')
        const token = authHeader && authHeader.split(' ')[1]

        if (token == null) {
            return res.sendStatus(401)
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                console.log(err)
                    // return res.sendStatus(403)
                    ;
            }
            console.log('authenticateToken Complete');

            req.token = user
            next()
        })
    }

}