<script>
import Ad from '@/components/Ad/Ad.vue';
import ChapterSelect from '@/components/ChapterSelect/ChapterSelect.vue';
import ComicPage from '@/components/ComicPage/ComicPage.vue';

export default {
  name: 'ComicChapter',
  data() {
    return {
      pageSelected: 1,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  components: {
    Ad, ChapterSelect, ComicPage,
  },
  methods: {
    onNewPage(newVal) {
      this.pageSelected = newVal;
    },
    onPageChanged(newVal) {
      this.pageSelected = newVal;
    },
  },
};
</script>
<template src="./ComicChapter.html"></template>
<style lang="scss" src="./ComicChapter.scss" scoped></style>
