const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const app = express()




app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('static'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//route
const testRoute = require('./router/test')
app.use(testRoute.router)

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})