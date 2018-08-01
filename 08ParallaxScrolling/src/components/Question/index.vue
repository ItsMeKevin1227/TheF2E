<script>
export default {
  name: 'question',
  data() {
    return {
      show: false,
      // myImg: [
      //   require('../../../public/img/img-ship-noob.png'),
      //   require('../../../public/img/img-ship-beginner.png'),
      //   require('../../../public/img/img-ship-developer.png'),
      //   require('../../../public/img/img-ship-master.png'),
      // ],
    };
  },
  mounted() {
    this.show = true;
  },
  props: ['detail', 'options'],
  methods: {
    onClick() {
      this.$router.push(this.detail.nextPage);
    },
  },
};
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
