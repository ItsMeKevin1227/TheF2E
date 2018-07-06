<template>
  <div id="app">
    <HeaderPage />
    <router-view/>
  </div>
</template>
<script>
import HeaderPage from '@/components/HeaderPage/HeaderPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
  },
};
</script>

<style lang="scss">
@import './assets/style.scss';
html,
body {
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
}
* {
  font-family: $ff;
  font-weight: 400;
}
</style>
