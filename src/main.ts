/*
 * @Description: 
 * @Autor: fylih
 * @Date: 2022-01-06 11:18:24
 * @LastEditors: fylih
 * @LastEditTime: 2022-01-21 14:55:43
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { elementPlugin } from './plugins/elementPlugin'
import { vuePlugin } from './plugins/vuePlugin'
import "./styles/reset.less"
import "./utils/rem"

const app = createApp(App)
elementPlugin(app)
vuePlugin(app)
app.use(router)
app.mount('#app')
