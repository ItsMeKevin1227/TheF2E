import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/comics',
      name: 'Comic',
      component: () => import('@/views/HomePage/HomePage.vue'),
    },
    {
      path: '/comics/chapter/:id',
      name: 'ComicChapter',
      component: () => import('@/views/ComicChapter/ComicChapter.vue'),
    },
    {
      path: '*',
      redirect: '/comics',
    },
  ],
});
