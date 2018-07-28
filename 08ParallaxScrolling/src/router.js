import Vue from 'vue';
import Router from 'vue-router';

import Homepage from '@/views/Homepage/index.vue';
import Page1 from '@/views/Page1/index.vue';
import Page2 from '@/views/Page2/index.vue';
import Page3 from '@/views/Page3/index.vue';
import Done from '@/views/Done/index.vue';
import Result from '@/views/Result/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage,
    },
    {
      path: '/page1',
      component: Page1,
    },
    {
      path: '/page2',
      component: Page2,
    },
    {
      path: '/page3',
      component: Page3,
    },
    {
      path: '/done',
      component: Done,
    },
    {
      path: '/result',
      component: Result,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
