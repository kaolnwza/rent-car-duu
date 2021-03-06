import Vue from 'vue'
import VueRouter from 'vue-router'
import UserProfile from '../components/UserProfile'
// import Home from '../components/Home'
import RegisterCar from '../components/RegisterCar'
import LoaneeCarHistory from '../components/LoaneeCarHistory'
import LoanerCarHistory from '../components/LoanerCarHistory'
import CarMarketplace from '../components/CarMarketplace'

import PaymentHistory from '../components/PaymentHistory'
import ManageCar from '../components/ManageCar'
import LoaneeRentingCar from '../components/LoaneeRentingCar'
import ViewUserProfile from '../components/ViewUserProfile'
import RentCar from '../components/RentCar'
import AdminCar from '../components/AdminCar'
import AdminUser from '../components/AdminUser'

Vue.use(VueRouter)



const router = new VueRouter({
    routes: [
        { path: '/userprofile', component: UserProfile },
        // { path: '/Home', component: Home },
        { path: '/RegisterCar', component: RegisterCar },
        { path: '/LoaneeCarHistory', component: LoaneeCarHistory },
        { path: '/LoanerCarHistory', component: LoanerCarHistory },
        { path: '/CarMarketplace', component: CarMarketplace },

        { path: '/PaymentHistory', component: PaymentHistory },
        { path: '/ManageCar', component: ManageCar },
        { path: '/LoaneeRentingCar', component: LoaneeRentingCar },
        { path: '/ViewUserProfile', component: ViewUserProfile },
        { path: '/RentCar', component: RentCar },
        { path: '/AdminCar', component: AdminCar },
        { path: '/AdminUser', component: AdminUser },
        { path: '/', redirect: '/CarMarketplace' }

    ],
    mode: 'history',
    base: process.env.BASE_URL

})

export default router