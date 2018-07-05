<script>
import Img1 from '../../../public/images/ad-1.png';
import Img2 from '../../../public/images/ad-2.png';
import Img3 from '../../../public/images/ad-3.png';

export default {
  props: ['adNumber'],
  computed: {
    img() {
      if (this.adNumber === 1) {
        return Img1;
      } else if (this.adNumber === 2) {
        return Img2;
      } else if (this.adNumber === 3) {
        return Img3;
      } return '';
    },
  },
};
</script>
<template src="./Ad.html"></template>
<style lang="scss" src="./Ad.scss"></style>
