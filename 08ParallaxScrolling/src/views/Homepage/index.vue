<script>
export default {
  name: 'homepage',
  mounted() {
    // eslint-disable-next-line
    const timeline = new TimelineMax({
      onComplete: this.myComplete,
    });
    const time = 4;


    // Detail Animation
    // eslint-disable-next-line
    const shape1 = TweenMax.to('.star', time, {
      rotation: 360,
      // eslint-disable-next-line
      ease: Power2.easeOut,
    });


    // eslint-disable-next-line
    const shape2 = TweenMax.to('.circle', time / 2, {
      scale: 1.15,
    });

    // eslint-disable-next-line
    const shape2_1 = TweenMax.to('.circle', time / 2, {
      scale: 1,
    });

    // eslint-disable-next-line
    const shape3 = TweenMax.to('.square', time, {
      rotation: -360,
    });

    // bigger
    // eslint-disable-next-line
    const bigger1 = TweenMax.to('.square', 0.5, {
      scale: 4,
    });

    // eslint-disable-next-line
    const bigger2 = TweenMax.to('.circle', 0.5, {
      scale: 4,
    });

    // eslint-disable-next-line
    const bigger3 = TweenMax.to('.star', 0.5, {
      scale: 7,
    });


    // hide txt
    // eslint-disable-next-line
    const hideTxt = TweenMax.to('.text', 0.5, {
      opacity: 0,
    });

    // eslint-disable-next-line
    const changeBg = TweenMax.to('.star', 0.5, {
      opacity: 0,
    });
    // home page
    timeline.add(shape1, 0)
      .add(shape2, 0)
      .add(shape2_1, time / 2)
      .add(shape3, 0)
      .add(bigger1) // continue
      .add(bigger2, '-=0.3')
      .add(bigger3, '-=0.3')
      .to('.circle', 0, {
        backgroundColor: '#1469FF',
      })
      .add(hideTxt)
      .add(changeBg, '-=0.5');
  },
  methods: {
    myComplete() {
      this.$router.push('page1');
    },
  },
};
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
