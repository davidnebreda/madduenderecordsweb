import { createApp } from 'vue'

import 'normalize.css/normalize.css'
import 'bulma/css/bulma.min.css'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.min.css'
import './style.css'
import router from "./router";
import App from './App.vue'

createApp(App).use(router).mount('#app')
