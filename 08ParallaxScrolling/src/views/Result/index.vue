<script>
import Question from '@/components/Question/index.vue';

export default {
  name: 'result',
  components: { Question },
  data() {
    return {
      details: {
        questionNum: '',
        title: '',
        nextPage: '/',
        note: '',
      },
      options: ['Try Again'],
    };
  },
  mounted() {
    // eslint-disable-next-line
    const timeline = new TimelineMax();
    timeline.staggerTo('.triangle', 1, {
      cycle: {
        top() {
          return `${Math.random() * 70}%`;
        },
      },

    }, 0.1);
  },
};
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
