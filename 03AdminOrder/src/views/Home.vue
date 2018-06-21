<template lang="pug">
  #Home
    <ShowInfo />
</template>
<script>
import ShowInfo from '../components/ShowInfo.vue';

export default {
  components: {
    ShowInfo,
  },
};
</script>

<style lang="scss">
@import '../../public/config.scss';

#Home {
  width: 1024px;
  margin: 0 auto;
  background-color: $grey1;
  padding: 30px 42px 42px;
}
</style>
