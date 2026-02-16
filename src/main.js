import './assets/css/reset.css'
import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).mount('#app')
