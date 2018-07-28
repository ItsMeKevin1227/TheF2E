<script>
import Question from '@/components/Question/index.vue';

export default {
  name: 'page3',
  components: { Question },
  data() {
    return {
      details: {
        questionNum: 'Q3',
        nextPage: 'done',
        title: 'When you’re in a exam which you barely prepared for, which is your priority solution?',
        note: 'Choose the answer appeared in your mind instantly',
      },
      options: ['Take a nap right away', 'Fill the answer randomly', 'All fill the answer "C"'],
    };
  },
  mounted() {
    // shape
    // eslint-disable-next-line
    const timeSquire = new TimelineMax();
    // eslint-disable-next-line
    const timeTriangle = new TimelineMax();
    // eslint-disable-next-line
    const timeCircle = new TimelineMax();

    // Detail Animation
    timeSquire.from('.square', 1.2, {
      top: '150%',
      delay: 1.5,
    })
      .to('.square', 5, {
        rotation: 180,
        delay: 0.3,
        // eslint-disable-next-line
        ease: Power3.easeOut,
      });

    timeTriangle.from('.triangle', 1.2, {
      top: '150%',
      delay: 1.5,
      // eslint-disable-next-line
      ease: Power3.easeOut,
    })
      .to('.triangle', 5, {
        rotation: 360,
        delay: 0.3,
      });

    timeCircle.from('.mainShape', 1, {
      x: '100%',
      delay: 0.5,
    })
      .from('.circle', 1.2, {
        top: '150%',
        delay: 1,
        // eslint-disable-next-line
        ease: Power3.easeOut,
      })
      .to('.circle', 5, {
        scale: 1.1,
        delay: 0.3,
      });
  },
};
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
