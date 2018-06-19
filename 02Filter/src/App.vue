<template>
  <div id="app">
    <Header/>
    <FilterArea/>
  </div>
</template>
<script>
import Header from './components/Header';
import FilterArea from './components/Filter';

export default {
  name: 'App',
  components: {
    Header, FilterArea,
  },
  mounted() {
    this.$store.dispatch('fetchApi');
    setInterval(() => {
      this.$store.dispatch('fetchApi');
    }, 100000);
  },
};
</script>
<style lang="scss">
@import '../static/styles/settings.scss';
html,
body {
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
}
</style>

