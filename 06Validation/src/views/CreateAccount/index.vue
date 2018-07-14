<script>
export default {
  name: 'CreateAccount',
  data() {
    return {
      account: '',
      password: '',
      confirmPassword: '',
      name: '',
    };
  },
  computed: {
    isError() {
      if (this.account === '' ||
        this.password === '' ||
        this.confirmPassword === '' ||
        this.errors.any() === true) {
        return true;
      } return false;
    },
  },
  methods: {
    error() {
      this.$emit('error', this.isError);
    },
  },
};
</script>
<template src="./CreateAccount.html"></template>
<style lang="scss" src="./CreateAccount.scss"></style>
