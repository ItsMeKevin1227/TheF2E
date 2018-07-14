<template lang="pug">
#Header
  router-link(class="logo"
    :class="routeHome"
    to="/") Shoptime
  router-link(class="link"
    :class="routeHome"
    to="/") Home
  router-link(class="link"
    :class="routeOrders"
    to="/order") Orders
  router-link(class="link"
    :class="routeProduct"
    to="/product") Product
  .admin ADMIN
</template>
<script>
export default {
  computed: {
    routeHome() {
      return this.$route.path === '/' ? 'active' : '';
    },
    routeOrders() {
      return this.$route.path === '/order' ? 'active' : '';
    },
    routeProduct() {
      return this.$route.path === '/product' ? 'active' : '';
    },
  },
};
</script>
<style lang="scss">
@import '../../public/config.scss';

#Header {
  width: 100%;
  height: 70px;
  background-color: #000;
  display: flex;
  margin: 0 auto;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-family: $ffb;
  .logo,
  .link,
  .admin {
    margin-right: 40px;
    margin-left: 40px;
    font-size: $subtitle2;
    cursor: pointer;
    font-family: $ffb;
  }
  .logo {
    font-size: $title;
    color: #fff;
  }
  .link {
    color: $grey4;
    &.active {
      color: #fff;
    }
  }
  .admin {
    margin-left: 343px;
  }
}
</style>
