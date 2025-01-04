import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 

import "./style.css"
import 'element-plus/theme-chalk/dark/css-vars.css'
import "./assets/css/dark.element.scss"
import { createPinia } from 'pinia'
import i18n from '@/assets/languages/i18n'
const app = createApp(App)
app.use(router) 
app.use(i18n)
app.use(createPinia())
app.mount('#app')