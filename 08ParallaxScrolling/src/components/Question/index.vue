<script>
export default {
  name: 'question',
  data() {
    return {
      show: false,
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
