import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import './assets/element-dark.css'
import './assets/element-tabs-override.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(ElementPlus, {})
app.mount('#app')
