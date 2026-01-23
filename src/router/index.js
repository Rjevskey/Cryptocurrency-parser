import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import DashboardPage from '@/views/DashboardPage.vue'
import MaintenancePage from '@/views/MaintenancePage.vue'

const routes = [
	{ path: '/', component: HomePage },
	{ path: '/dashboard', component: DashboardPage },
	{ path: '/maintenance', component: MaintenancePage },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
