<template lang="pug">
#ProductList
  .topContainer
    div
      el-checkbox(v-model="checked")
      span.triangle
    div.btn ADD NEW PRODUCT +
  .tableContainer
    el-table(:data="tableData"
      stripe
      style="width: 100%")
      el-table-column(prop="date"
        label="Product")
      el-table-column(prop="name"
        label="Original")
      el-table-column(prop="address"
        label="DisCount")
      el-table-column(prop="address"
        label="Size")
      el-table-column(prop="address"
        label="Color")
      el-table-column(prop="address"
        label="Inventory")
      el-table-column(prop="address"
        label="Status")
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

#ProductList {
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
    }
    .btn {
      width: 190px;
      height: 34px;
      font-family: $ffb;
      font-size: $table;
      color: #fff;
      background-color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      border: 1px solid #000;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        color: #000;
        background-color: #fff;
        border: 1px solid #000;
        transition: all 0.3s;
      }
    }
  }
}
</style>
