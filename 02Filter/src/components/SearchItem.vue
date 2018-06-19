<template>
  <div id="wrapper">
    <div v-if="filteredData.length === 0"
         style="text-align:center">沒有景點可以去啦... 換個搜尋條件吧</div>
    <template v-else>
      <el-row>
        <el-col :span="24"
                v-for="(item, idx) in filteredData"
                :key="idx">
          <router-link :to="`/content/${idx}`">
            <div class="card">
              <div class="image"
                   :style="{ 'background-image': 'url(' + item.Picture1 + ')' }"></div>
              <div class="content">
                <h3>{{item.Name}}</h3>
                <p>{{item.Description}}</p>
                <span>{{item.Name}}</span>
                <el-tag type=""
                        size="mini">
                  {{item.Zone}}
                </el-tag>
                <br>
                <i class="el-icon-location"></i>{{item.Add}}
                <i class="el-icon-date"></i>{{item.Opentime}}
              </div>
            </div>
          </router-link>
        </el-col>
      </el-row>
      <el-pagination layout="prev, pager, next"
                     :total="totalLength"
                     :page-size="pageSize"
                     @current-change="changePage">
      </el-pagination>
    </template>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['totalLength', 'pageSize']),
    ...mapGetters(['filteredData']),
  },
  methods: {
    ...mapMutations(['changePage']),
  },
};
</script>
<style lang="scss">
@import '../../static/styles/settings.scss';

#wrapper {
  position: relative;
  width: 780px;
  .card {
    position: relative;
    vertical-align: top;
    margin-bottom: 24px;
    height: 220px;
    box-shadow: 2px 2px 2px $color-grey2;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      box-shadow: 4px 4px 2px $color-grey3;
      transition: all 0.3s;
      transform: translate(-2px, -2px);
    }
    .image {
      width: 220px;
      height: 100%;
      display: inline-block;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .content {
      display: inline-block;
      background-color: #fff;
      position: absolute;
      left: 220px;
      top: 0;
      width: 560px;
      height: 220px;
      padding: 24px 20px;
      font-family: 'Roboto-Regular';
      color: $color-grey4;
      font-size: 14px;
      h3 {
        font-size: 24px;
        color: $color-sub;
        font-family: 'Roboto-Bold';
        margin-top: 0;
        margin-bottom: 16px;
      }
      p {
        margin-top: 0;
        margin-bottom: 13px;
        font-size: 16px;
        font-family: 'Roboto-Regular';
        line-height: 24px;
        height: 50px;
        overflow: hidden;
        color: #000;
      }
      span {
        font-family: 'Roboto-Bold';
        margin-right: 20px;
        font-weight: 600;
        margin-bottom: 16px;
        color: #000;
        font-size: 16px;
        &.el-tag {
          color: $color-sub;
          font-weight: 200;
          &:hover {
            color: #fff;
          }
        }
      }
      .el-icon-date,
      .el-icon-location {
        font-size: 13px;
        margin-right: 7px;
      }
      .el-icon-date {
        margin-left: 20px;
      }
    }
  }
  .el-pagination {
    position: absolute;
    right: 0;
    padding: 0;
    margin-bottom: 20px;
  }
}
</style>
