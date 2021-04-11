import Vue from 'vue'
import VueRouter from 'vue-router'
import UserProfile from '../components/UserProfile'
import Home from '../components/Home'
import RegisterCar from '../components/RegisterCar'
import LoaneeCarHistory from '../components/LoaneeCarHistory'
import LoanerCarHistory from '../components/LoanerCarHistory'
import AddCar from '../components/AddCar'

Vue.use(VueRouter)



const router = new VueRouter({
    routes: [
        { path: '/userprofile', component: UserProfile },
        { path: '/Home', component: Home },
        { path: '/RegisterCar', component: RegisterCar },
        { path: '/LoaneeCarHistory', component: LoaneeCarHistory },
        { path: '/LoanerCarHistory', component: LoanerCarHistory },
        { path: '/AddCar', component: AddCar },
        { path: '/', redirect: '/Home' }

    ],
    mode: 'history',
    base: process.env.BASE_URL

})

export default router