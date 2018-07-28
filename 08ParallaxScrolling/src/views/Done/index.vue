<script>

export default {
  name: 'done',
  mounted() {
    const that = this;
    let currentY = 0;
    // eslint-disable-next-line
    const timeline = new TimelineMax();

    // eslint-disable-next-line
    const bigTriangle = TweenMax.to('.triangle11', 3, {
      x: -550,
      y: 250,
    });

    timeline.staggerTo('.triangle', 1, {
      cycle: {
        x() {
          return 2000;
        },
        y(index) {
          return -500 - (index * 150);
        },
      },
    }, 0.1)
      .add(bigTriangle, 1);

    timeline.pause();

    let progress = 0;
    window.addEventListener('scroll', () => {
      const pageHeight = document.querySelector('#app').clientHeight - window.innerHeight;
      currentY = window.scrollY;

      progress = currentY / pageHeight;
      if (progress > 0.9) {
        that.$router.push('result');
      }

      timeline.progress(progress);
      timeline.pause();
    });
  },
};
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
