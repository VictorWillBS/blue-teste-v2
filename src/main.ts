import { createApp } from 'vue'
import './styles/general.css'
import App from './App.vue'
import dayjs from "dayjs"
import ptbr from 'dayjs/locale/pt-br'
dayjs.locale(ptbr)
const app = createApp(App)
app.mount('#app')
