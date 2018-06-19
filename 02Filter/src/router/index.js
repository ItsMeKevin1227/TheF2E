import Vue from 'vue';
import Router from 'vue-router';
import Search from '../components/Search';
import BlogContent from '../components/BlogContent';
import FileNotFound from '../components/FileNotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Search,
    },
    {
      path: '/content/:id',
      component: BlogContent,
    },
    {
      path: '*',
      component: FileNotFound,
    },
  ],
});
