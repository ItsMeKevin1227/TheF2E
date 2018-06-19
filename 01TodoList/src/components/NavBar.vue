<template lang="pug">
  nav#navBar
    p(v-for="(item, idx) in navNames"
      class="default"
      :class="{ selected: idx===nowNav }"
      @click="navFilter(idx)") {{item.text}}
      span
</template>
<script>
export default {
  data() {
    return {
      nowNav: 0,
      navNames: [
        {
          text: 'My Tasks',
          status: 'all',
        },
        {
          text: 'In Progress',
          status: 'ing',
        },
        {
          text: 'Completed',
          status: 'done',
        },
      ],
    };
  },
  methods: {
    navFilter(idx) {
      this.nowNav = idx;
      this.$bus.$emit('navFilter', this.nowNav);
    },
  },
};
</script>
<style lang="scss" scoped>
nav#navBar {
  width: 100%;
  height: 76px;
  background-color: #4a90e2;
  display: flex;
  justify-content: center;
  align-items: center;
  p.default {
    width: 220px;
    height: 76px;
    line-height: 76px;
    color: #00408b;
    background-color: transparent;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
  }
  p.default.selected {
    position: relative;
    color: #ffffff;
    span {
      width: 160px;
      height: 5px;
      background-color: #00408b;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -80px;
    }
  }
}
</style>
