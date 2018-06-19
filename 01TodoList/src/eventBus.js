import Vue from 'vue';

const bus = new Vue();

Object.defineProperty(Vue.prototype, '$bus', {
  get() {
    return this.$root.bus;
  },
});

export default bus;
