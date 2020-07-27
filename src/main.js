import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ประกาศ Axios
import VueAxios from "vue-axios";
import axios from "axios";

// เรียกใช้
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
