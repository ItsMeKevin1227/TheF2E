<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>
<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import '../public/config.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $ff;
}
a {
  text-decoration: none;
}
.clear {
  clear: both;
}
</style>
