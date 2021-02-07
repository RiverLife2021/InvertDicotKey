import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import 'primevue/resources/themes/nova-vue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import Galleria from 'primevue/galleria'

const app = createApp(App)

app.component('Galleria', Galleria)
app.use(router)

app.mount('#app')
