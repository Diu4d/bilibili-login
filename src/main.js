import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import Vant from 'vant';
import 'vant/lib/index.css'
import http from '../http'
import {Toast} from 'vant'

Vue.prototype.$http = http;
Vue.prototype.$msg = Toast
//挂载在实例上
Vue.use(Vant)
Vue.config.productionTip = false
Vue.config.devtools = true;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
