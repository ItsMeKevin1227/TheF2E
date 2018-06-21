import Vue from 'vue';
import ElementUI from 'element-ui';
import VeLine from 'v-charts/lib/line.common';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI);
Vue.component(VeLine.name, VeLine);

Vue.use(require('vue-faker'));
Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
