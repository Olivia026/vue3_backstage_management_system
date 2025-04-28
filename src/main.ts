import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const fun = () => {
	console.log('这是没有格式化的代码')
}

createApp(App).mount('#app')
