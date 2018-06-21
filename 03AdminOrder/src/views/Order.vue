<template lang="pug">
  #Order
    OrderList
</template>
<script>
import OrderList from '../components/OrderList.vue';

export default {
  components: {
    OrderList,
  },
};
</script>

<style lang="scss">
@import '../../public/config.scss';

#Order {
  width: 1024px;
  margin: 0 auto;
  background-color: $grey1;
  padding: 30px 42px 40px;
}
</style>
