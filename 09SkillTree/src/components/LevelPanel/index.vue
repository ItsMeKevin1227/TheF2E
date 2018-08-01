<script>
export default {
  name: 'LevelPanel',
  data() {
    return {
      level: [
        {
          rank: 'NOOB',
          levelInfo: 'Welcome to aboard. Your mission is: <span class="strong">Collect the resources and learn the skills to upgrade the ship.</span> Good luck, captain!',
        },
        {
          rank: 'BEGINNER',
          levelInfo: 'Congradulations! You become the <span class="strong">“Front-end Beginnner”</span>. Keep searching the resources to upgrade to the next level.',
        },
        {
          rank: 'DEVELOPER',
          levelInfo: 'You’re doing well! Now you’re a <span class="strong">“Front-end Developer”</span>. It’s close to complete the upgrading program. Next level: Front-end Master.',
        },
        {
          rank: 'MASTER',
          levelInfo: 'Excellent! You’re a <span class="strong">“Front-end Master”</span> now. But a new galary was just detected by the system. Captain, make your choice.',
        },
      ],
    };
  },
};
</script>
<template src="./LevelPanel.html"></template>
<style lang="scss" src="./LevelPanel.scss"></style>
