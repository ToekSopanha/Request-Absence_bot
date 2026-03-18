import { createApp } from 'vue'
import App from './App.vue'
import './assets/hearder.css'

import { createRouter, createWebHashHistory } from 'vue-router'
import Hearder from './components/for_yourseft/Hearder.vue'
import HearderP from './components/for_parents/HearderP.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/Hearder", component: Hearder },
    { path: "/HearderP", component: HearderP },
    { path: "/", redirect: "/Hearder" } // optional: default route
  ]
})

createApp(App).use(router).mount('#app')
// rebuild
