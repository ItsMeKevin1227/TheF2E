<template>
  <div id="app">
    <div class="explore">
      <input v-model="search"
             placeholder=" / Kogi Cosby sweater ethical">
      <span>Explore</span>
    </div>
    <div class="image"
         :style="{ 'background-image': 'url(' + filteredData[id].Picture1 + ')' }"></div>
    <div id="content">
      <h2>{{filteredData[id].Name}}</h2>
      <h3>{{filteredData[id].Name}}</h3>
      <el-tag type=""
              size="mini">
        {{filteredData[id].Zone}}
      </el-tag>
      <br>
      <i class="el-icon-location"></i>
      <span>{{filteredData[id].Add}}</span>
      <i class="el-icon-date"></i>
      <span>{{filteredData[id].Opentime}}</span>
      <p>{{filteredData[id].Description}}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      search: '',
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    ...mapGetters(['filteredData']),
  },
};
</script>
<style lang="scss" scoped>
@import '../../static/styles/settings.scss';

#app {
  min-width: 664px;
  width: 80%;
  .image {
    width: 100%;
    height: 352px;
    background-size: cover;
  }
  .explore {
    margin-top: 24px;
    margin-bottom: 24px;
    width: 100%;
    height: 48px;
    position: relative;
    font-size: 16px;
    span {
      position: absolute;
      top: 13px;
      left: 10px;
      color: $color-sub;
    }
    input {
      width: 100%;
      height: 100%;
      padding-left: 70px;
      background-color: $color-grey2;
      border: none;
      font-size: 16px;
      outline: none;
      border-radius: 4px;
    }
  }
  #content {
    width: 100%;
    background-color: #fff;
    font-family: 'Roboto-Bold';
    padding: 24px 66px;
    margin-bottom: 24px;
    h2 {
      color: $color-sub;
      font-size: 36px;
      text-align: center;
      margin: 0 auto 24px;
    }
    h3 {
      display: inline-block;
      font-size: 16px;
      margin-right: 20px;
      margin-bottom: 14px;
    }
    .el-tag {
      font-family: 'Roboto';
      font-style: italic;
      margin-right: 20px;
      font-weight: 600;
      margin-bottom: 16px;
      font-size: 16px;
      color: #fff;
      font-weight: 200;
      background-color: $color-grey3;
      border-radius: 100px;
      padding: 2px 12px 6px;
      line-height: 15px;
    }
    i {
      margin-right: 7px;
      margin-bottom: 27px;
      & + span {
        color: $color-grey4;
      }
    }
    .el-icon-date {
      margin-left: 20px;
    }
  }
}
</style>

