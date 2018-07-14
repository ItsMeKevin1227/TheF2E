import Vue from 'vue';
import Router from 'vue-router';

// eslint-disable-next-line
import CreateAccount from '@/views/CreateAccount';
// eslint-disable-next-line
import GeneralInformation from '@/views/GeneralInformation';
// eslint-disable-next-line
import UpdateProfilePicture from '@/views/UpdateProfilePicture';
// eslint-disable-next-line
import PaymentMethod from '@/views/PaymentMethod';
// eslint-disable-next-line
import Congratulation from '@/views/Congratulation';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/step1',
      name: 'CreateAccount',
      component: CreateAccount,
    },
    {
      path: '/step2',
      name: 'GeneralInformation',
      component: GeneralInformation,
    },
    {
      path: '/step3',
      name: 'UpdateProfilePicture',
      component: UpdateProfilePicture,
    },
    {
      path: '/step4',
      name: 'PaymentMethod',
      component: PaymentMethod,
    },
    {
      path: '/congratulation',
      name: 'Congratulation',
      component: Congratulation,
    },
    {
      path: '*',
      redirect: '/step1',
    },
  ],
});
