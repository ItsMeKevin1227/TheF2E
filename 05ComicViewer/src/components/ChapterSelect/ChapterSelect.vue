<script>
export default {
  name: 'ChapterSelect',
  props: ['chapterSelected', 'pageSelected'],
  data() {
    return {
      selectChapter: false,
      selectPage: false,
    };
  },
  computed: {
    pageCurrent: {
      get() {
        return this.pageSelected;
      },
      set(newValue) {
        this.$emit('newPage', newValue);
      },
    },
  },
};
</script>
<template src="./ChapterSelect.html"></template>
<style lang="scss" src="./ChapterSelect.scss"></style>
