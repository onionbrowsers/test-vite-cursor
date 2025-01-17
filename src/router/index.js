import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import StorePage from '../views/StorePage.vue'
import MacPage from '../views/products/MacPage.vue'
import iPadPage from '../views/products/iPadPage.vue'
import iPhonePage from '../views/products/iPhonePage.vue'
import WatchPage from '../views/products/WatchPage.vue'
import AirPodsPage from '../views/products/AirPodsPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/store',
        name: 'store',
        component: StorePage
    },
    {
        path: '/mac',
        name: 'mac',
        component: MacPage
    },
    {
        path: '/ipad',
        name: 'ipad',
        component: iPadPage
    },
    {
        path: '/iphone',
        name: 'iphone',
        component: iPhonePage
    },
    {
        path: '/watch',
        name: 'watch',
        component: WatchPage
    },
    {
        path: '/airpods',
        name: 'airpods',
        component: AirPodsPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
