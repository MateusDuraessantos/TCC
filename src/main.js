import { createApp } from 'vue'


import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import App from './App.vue'
import router from './router'

createApp(App).use(ElementPlus).use(router).mount('#app')
