<script>
import Img1 from '@/assets/images/storyboard-1.png';
import Img2 from '@/assets/images/storyboard-2.png';
import Img3 from '@/assets/images/storyboard-3.png';
import Img4 from '@/assets/images/storyboard-4.png';
import Img5 from '@/assets/images/storyboard-5.png';
import Img6 from '@/assets/images/storyboard-6.png';
import Img7 from '@/assets/images/storyboard-7.png';
import Img8 from '@/assets/images/storyboard-8.png';
import Img9 from '@/assets/images/storyboard-9.png';
import Img10 from '@/assets/images/storyboard-10.png';
import Img11 from '@/assets/images/storyboard-11.png';
import Img12 from '@/assets/images/storyboard-12.png';

export default {
  name: 'ComicPage',
  props: ['pageSelected'],
  data() {
    return {
      fullScreen: false,
    };
  },
  computed: {
    pageCurrent: {
      get() {
        return this.pageSelected;
      },
      set(value) {
        if (value > 12) return;
        if (value < 1) return;
        this.$emit('pageChanged', value);
      },
    },
    comicPage() {
      if (this.pageCurrent === 1) {
        return Img1;
      } else if (this.pageCurrent === 2) {
        return Img2;
      } else if (this.pageCurrent === 3) {
        return Img3;
      } else if (this.pageCurrent === 4) {
        return Img4;
      } else if (this.pageCurrent === 5) {
        return Img5;
      } else if (this.pageCurrent === 6) {
        return Img6;
      } else if (this.pageCurrent === 7) {
        return Img7;
      } else if (this.pageCurrent === 8) {
        return Img8;
      } else if (this.pageCurrent === 9) {
        return Img9;
      } else if (this.pageCurrent === 10) {
        return Img10;
      } else if (this.pageCurrent === 11) {
        return Img11;
      } else if (this.pageCurrent === 12) {
        return Img12;
      } return '';
    },
  },
  methods: {
    pageChange(val) {
      if (this.pageCurrent >= 1 && this.pageCurrent <= 12) {
        this.pageCurrent += val;
      }
    },
  },
};
</script>
<template src="./ComicPage.html"></template>
<style lang="scss" src="./ComicPage.scss"></style>
