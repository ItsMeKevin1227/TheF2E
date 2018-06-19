// 引用Vue
import Vue from 'vue';
// 引用ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引用vue-router
import router from './router';
// 引用vuex
import store from './store';
import App from './App';

// 使用ElementUI
Vue.use(ElementUI);

// 關閉生產模式提示
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
