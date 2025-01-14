import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/row1col2.css'
import './assets/row3col3.css'
import store from './assets/src/JS/store'


const app = createApp(App)

app.use(router).use(ElementPlus).use(store)

app.mount('#app')
