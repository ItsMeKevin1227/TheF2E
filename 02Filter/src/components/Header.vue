<template>
  <el-row>
    <el-col :span="1">
      <div class="grid-content bg-purple-dark"></div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple-dark">
        <router-link to="/">HaveFun</router-link>
      </div>
    </el-col>
    <el-col :span="7">
      <div class="grid-content bg-purple-dark">
        <i class="fas fa-search"></i>
        <el-input v-model="search"
                  @change="setKeyword"
                  placeholder="Explore your own activities"></el-input>
      </div>
    </el-col>
    <el-col :span="10">
      <div class="grid-content bg-purple-dark">
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      search: '',
    };
  },
  methods: {
    setKeyword() {
      this.$store.commit({
        type: 'setKeyword',
        keyword: this.search,
      });
      this.search = '';
    },
  },
};
</script>
<style lang="scss">
@import '../../static/styles/settings.scss';
$height: 92px;

.grid-content {
  height: $height;
  background-color: $color-main;
  position: relative;
  border: none;
  a {
    margin: 0;
    font-size: 36px;
    font-family: 'Optima-ExtraBlack';
    color: #fff;
    line-height: $height;
    cursor: pointer;
  }
  .fa-search {
    position: absolute;
    top: ($height/2)-16px;
    left: 4px;
    color: #fff;
  }
  input {
    position: absolute;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    border-radius: 0;
    font-size: 20px;
    color: #fff;
    padding-left: 36px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
      font-style: italic;
      font-weight: 200;
      font-family: 'Roboto-Italic';
    }
  }
}
</style>
