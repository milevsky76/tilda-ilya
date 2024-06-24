import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import HeaderApp from '@/components/HeaderApp.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('HeaderApp', HeaderApp);

app.mount('#app')
