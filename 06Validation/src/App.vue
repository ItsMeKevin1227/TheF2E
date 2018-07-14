<template>
  <div id="app">
    <el-steps :active="active"
              finish-status="finish"
              space="68px"
              :align-center="true">
      <el-step></el-step>
      <el-step></el-step>
      <el-step></el-step>
      <el-step></el-step>
    </el-steps>
    <router-view @error="errorChild" />
    <template v-if="error">
      <el-button id="nextBtn"
                 class="form"
                 disabled>{{ btnText }}
      </el-button>
    </template>
    <template v-else>
      <router-link :to="link"
                   v-show="this.$route.name !== 'Congratulation'">
        <el-button id="nextBtn"
                   class="form"
                   @click="error=true">{{ btnText }}
        </el-button>
      </router-link>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      error: true,
    };
  },
  updated() {
    if (this.$route.name === 'CreateAccount') {
      this.active = 0;
    } else if (this.$route.name === 'GeneralInformation') {
      this.active = 1;
    } else if (this.$route.name === 'UpdateProfilePicture') {
      this.active = 2;
    } else if (this.$route.name === 'PaymentMethod') {
      this.active = 3;
    } else if (this.$route.name === 'Congratulation') {
      this.active = 4;
    }
  },
  computed: {
    btnText() {
      if (this.$route.name === 'PaymentMethod') {
        return 'DONE';
      } return 'SUBMIT & NEXT';
    },
    link() {
      if (this.$route.name === 'CreateAccount') {
        return '/step2';
      } else if (this.$route.name === 'GeneralInformation') {
        return '/step3';
      } else if (this.$route.name === 'UpdateProfilePicture') {
        return '/step4';
      } else if (this.$route.name === 'PaymentMethod') {
        return '/congratulation';
      } return '';
    },
  },
  methods: {
    errorChild(val) {
      this.error = val;
    },
  },
};
</script>

<style lang="scss">
@import './assets/style.scss';
@import './assets/basic.scss';
@import './assets/App.scss';
</style>
