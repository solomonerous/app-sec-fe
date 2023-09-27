import {createApp} from 'vue'
import App from './App.vue'
import {Quasar} from 'quasar'
import quasarUserOptions from './quasar-user-options'
import {router} from "@/router";

import('quasar/dist/quasar.css')
import('./styles/main.css')

const app = createApp(App)
app.use(Quasar, quasarUserOptions)
app.use(router)
app.mount('#app')
