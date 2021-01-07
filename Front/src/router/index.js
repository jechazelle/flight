import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../modules/home/router/homeRouter'
import Traffic from '../modules/traffic/router/trafficRouter'

Vue.use(VueRouter)

const routes = [
    ...Home,
    ...Traffic
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
