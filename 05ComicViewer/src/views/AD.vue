<template>
  <div id="ad"
       :style="{ 'backgroundImage': `url('${img}')` }">
  </div>
</template>
<script>
import Img1 from '@/assets/img/ad-1.png';
import Img2 from '@/assets/img/ad-2.png';
import Img3 from '@/assets/img/ad-3.png';

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

<style lang="scss">
#ad {
  width: 620px;
  height: 120px;
  background-size: contain;
  margin: 24px auto;
}
</style>
