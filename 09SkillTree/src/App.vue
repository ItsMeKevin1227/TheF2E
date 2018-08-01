<template>
  <div id="app">
    <LevelPanel/>
    <SkillTree/>
    <SkillPanel/>
  </div>
</template>

<script>
// eslint-disable-next-line
import LevelPanel from '@/components/LevelPanel';
// eslint-disable-next-line
import SkillTree from '@/components/SkillTree';
// eslint-disable-next-line
import SkillPanel from '@/components/SkillPanel';

export default {
  name: 'app',
  components: {
    LevelPanel, SkillTree, SkillPanel,
  },
};
</script>

<style lang="scss">
@import './assets/styles/variables.scss';

#app {
  display: flex;
  font-family: Roboto;
  width: 1024px;
  height: 768px;
  margin: 0 auto;
  background: linear-gradient(
    to right,
    $background 0%,
    #000 35%,
    #000 65%,
    $background 100%
  );
  justify-content: space-around;
}
</style>
