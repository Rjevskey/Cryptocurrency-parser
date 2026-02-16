import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
	state: () => ({
		isAuthenticated: false,
	}),
	actions: {
		demoLogin() {
			this.isAuthenticated = true
		},
		logout() {
			this.isAuthenticated = false
		},
	},
})
