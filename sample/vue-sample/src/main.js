import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import WideAngle from 'wideangle-vue'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(WideAngle, {
  siteId: "8D27G3B9ACA01F4241",
  domain: "wideangle.local:3000",
  fingerprint: true,
  supressDnt: true
})
app.mount('#app')
