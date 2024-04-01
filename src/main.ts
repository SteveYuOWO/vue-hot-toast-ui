import { createApp } from 'vue'
import router from './router/router'
import '../src/assets/css/global.css'
import App from './App.vue'

createApp(App).use(router).mount('#app')