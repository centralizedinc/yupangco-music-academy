import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Details from './views/Details.vue'
import Enrollment from './views/Enrollment.vue'
import Reservation from './views/Reservation.vue'
import CreditCard from './views/payment/CreditCard'
import ECPay from './views/payment/ECPay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/enroll',
      name: 'Enrollment',
      component: Enrollment
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component: Reservation
    },
    {
      path: '/payment/creditcard',
      name: 'Credit Card',
      component: CreditCard
    },
    {
      path: '/payment/ecpay',
      name: 'EC Pay',
      component: ECPay
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
