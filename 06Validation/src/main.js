import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Step, Steps, Input, DatePicker, Select, Option } from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import '../public/validate/validate';

Vue.use(Button);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Input);
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Option);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
