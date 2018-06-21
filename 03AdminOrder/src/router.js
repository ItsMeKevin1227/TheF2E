import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Order from './views/Order.vue';
import Product from './views/Product.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/order',
      component: Order,
    },
    {
      path: '/product',
      component: Product,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
