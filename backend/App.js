const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
//const morgan = require('morgan')
const path = require('path')
const { LocalStorage } = require('node-localstorage')

localStorage = new LocalStorage('./scratch');
const app = express()




//app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())


app.use(express.static('static'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//route
const testRoute = require('./router/test')
const carRoute = require('./router/vehicle')
const registerUser = require('./router/registerUser')
const login = require('./router/login')
const renting = require('./router/renting')
const carMarketplace = require('./router/carMarketplace')
const userRoute = require('./router/user')
const historyRoute = require('./router/history')
const paymentRoute = require('./router/payment')

app.use(testRoute.router)
app.use(carRoute.router)
app.use(registerUser.router)
app.use(login.router)
app.use(renting.router)
app.use(carMarketplace.router)
app.use(userRoute.router)
app.use(historyRoute.router)
app.use(paymentRoute.router)



app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})

