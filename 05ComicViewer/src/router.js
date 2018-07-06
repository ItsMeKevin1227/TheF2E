import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage/HomePage.vue';
import ComicChapter from '@/views/ComicChapter/ComicChapter.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/comics',
      name: 'Comic',
      component: HomePage,
    },
    {
      path: '/comics/chapter/:id',
      name: 'ComicChapter',
      component: ComicChapter,
    },
    {
      path: '*',
      redirect: '/comics',
    },
  ],
});
