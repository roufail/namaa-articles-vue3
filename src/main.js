import './assets/main.css'
import  {http , routes }  from '@/libs/axios'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.provide('$http', http)
app.provide('$routes', routes)

app.mount('#app')
