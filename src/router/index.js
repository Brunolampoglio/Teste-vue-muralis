import { createRouter, createWebHistory } from 'vue-router'
import Home from '../main/Dashboard.vue'
import ingressantes from '../main/Ingressantes.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        {path: '/ingressantes', component: ingressantes },
    ]
})

export default router