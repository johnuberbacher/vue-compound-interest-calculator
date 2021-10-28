import Vue from 'vue'
import App from './App.vue'
import './index.css'
import VueTailwind from 'vue-tailwind/dist/full'
import './assets/tailwind.css'

const settings = {}

Vue.use(VueTailwind, settings)

Vue.config.productionTip = false

new Vue({  
  render: h => h(App),
}).$mount('#app')
