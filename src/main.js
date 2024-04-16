import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';



const app = createApp(App)

// Set base URL for Axios
axios.defaults.baseURL = 'http://mandula-cakeshop.local/wp-json';

// Make Axios accessible globally in Vue components
app.config.globalProperties.$http = axios;

app.use(router)

app.mount('#app')
