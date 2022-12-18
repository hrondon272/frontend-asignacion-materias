import { createApp } from 'vue'


import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.css'
import router from './router'
import toaster from '@meforma/vue-toaster'
import './assets/css/estilos.css'

// Instancia
const app = createApp(App)
app.use(router)
app.use(Oruga)
app.use(VueAxios, axios)
app.use(toaster)
app.provide('axios', app.config.globalProperties.axios)

app.mount('#app')