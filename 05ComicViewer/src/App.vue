<template>
  <div id="app">
    <Header/>
    <AD :adNumber="1" />
    <ComicCover/>
    <AD :adNumber="2" />
    <ComicChapter/>
    <AD :adNumber="3" />
  </div>
</template>

<script>
import Header from './views/Header.vue';
import AD from './views/AD.vue';
import ComicCover from './views/ComicCover.vue';
import ComicChapter from './views/ComicChapter.vue';

export default {
  name: 'app',
  components: {
    Header, AD, ComicCover, ComicChapter,
  },
};
</script>

<style lang="scss">
@import '../public/style.scss';
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
