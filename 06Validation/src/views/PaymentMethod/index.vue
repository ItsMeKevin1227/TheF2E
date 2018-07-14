<script>
export default {
  name: 'PaymentMethod',
  data() {
    return {
      card: '',
      cardName: '',
      bankName: '',
      cvv: '',
      cardYear: '',
      cardMonth: '',
      yearArr: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    };
  },
  beforeMount() {
    this.$emit('error', true);
  },
  computed: {
    isError() {
      if (this.card === '' ||
        this.cardName === '' ||
        this.bankName === '' ||
        this.cvv === '' ||
        this.cardYear === '' ||
        this.cardMonth === '' ||
        this.errors.any() === true) {
        return true;
      } return false;
    },
  },
  methods: {
    bankCardKeyup() {
      const self = this;
      self.card = self.card.replace(/\s/g, '').replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
    },
    error() {
      this.$emit('error', this.isError);
    },
  },
};
</script>
<template src="./PaymentMethod.html"></template>
<style lang="scss" src="./PaymentMethod.scss"></style>
