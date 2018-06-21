<template lang="pug">
  #Product
    ProductList
</template>
<script>
import ProductList from '../components/ProductList.vue';

export default {
  components: {
    ProductList,
  },
};
</script>

<style lang="scss">
@import '../../public/config.scss';

#Product {
  width: 1024px;
  margin: 0 auto;
  background-color: $grey1;
  padding: 30px 42px 42px;
}
</style>
