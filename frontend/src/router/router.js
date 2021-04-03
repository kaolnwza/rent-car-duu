import Vue from 'vue'
import VueRouter from 'vue-router'
import UserProfile from '../components/UserProfile'

Vue.use(VueRouter)



const router = new VueRouter({
    routes: [
        { path: '/userprofile', component: UserProfile },

    ],
    mode: 'history',
    base: process.env.BASE_URL

})

export default router