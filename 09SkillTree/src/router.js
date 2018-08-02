import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/views/Homepage/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage,
    },
  ],
});
