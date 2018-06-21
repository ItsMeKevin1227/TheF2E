<template lang="pug">
  #OrderList
    .topContainer
      div
        el-checkbox(v-model="checked")
        span.triangle
      div
        h3 EDIT SECTION
        span.triangle
    .tableContainer
      el-table(:data="tableData"
        stripe
        style="width: 100%")
        el-table-column(prop="date"
          label="Customer")
        el-table-column(prop="name"
          label="Product List")
        el-table-column(prop="address"
          label="Total")
        el-table-column(prop="address"
          label="Add to Cart")
        el-table-column(prop="address"
          label="Check-out")
        el-table-column(prop="address"
          label="Address")
        el-table-column(prop="address"
          label="Status")
    .paginationContainer
      el-pagination(layout="prev, pager, next"
        :total="50")
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '../../public/config.scss';

#OrderList {
  .topContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    div {
      .el-checkbox {
        width: 20px;
        height: 20px;
        span {
          width: 100%;
          height: 100%;
        }
        .el-checkbox__inner::after {
          height: 10px;
          width: 4px;
          top: 2px;
          left: 7px;
        }
      }
      .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6px 5px 0 5px;
        border-color: #000 transparent transparent transparent;
        display: inline-block;
        margin-left: 6px;
      }
      h3 {
        font-family: $ffb;
        font-size: $table;
        display: inline-block;
        & + .triangle {
          margin-bottom: 2px;
        }
      }
    }
  }
  .el-table th.is-leaf {
    border-bottom: 0px solid #000;
    color: #000000;
  }
  .paginationContainer {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
  }
}
</style>
