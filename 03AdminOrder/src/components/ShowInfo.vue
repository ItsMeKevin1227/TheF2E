<template lang="pug">
  #ShowInfo
    .top-container
      h2 OVERVIEW
      div.selectContainer
        div.note-date
          p {{$moment().subtract(selectDate, 'days').format("YYYY/MM/DD")}}
          i.el-icon-caret-right
          p {{$moment().format("YYYY/MM/DD")}}
        el-select(v-model="filterDate"
          placeholder="請選擇"
          @change="FilterDate(filterDate)")
          el-option(v-for="item in dateOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value")
    .cardContainer
      .card.panel
        i(class='fas fa-hand-holding-usd')
        h3 TOTAL REVENUE
        .info.revenue {{filterRevenue | currency}}
      .card.panel
        i(class='fas fa-money-check-alt')
        h3 TOTAL COST
        .info.cost {{filterCost | currency}}
      .card.panel
        i(class='fas fa-money-bill')
        h3 NET INCOME
        .info.income {{filterRevenue - filterCost | currency}}
    .chartsContainer.panel
      h2 Activity
      ve-line(:data="chartData")
    .transactionContainer.panel
      h2 Transaction Website
      li
        div.left
          i(class="fab fa-facebook-square")
          a(href="Facebook.com") Facebook.com
        div.right 45,836
          el-tooltip(class="item" effect="dark" placement="top")
            div(class="inc" slot="content") INCREASE 899 VIEWS
              br
              span last week: 44,937
            i(class="fas fa-arrow-up") 20%
      li
        div.left
          i(class="fab fa-google")
          a(href="google.com") google.com
        div.right 23,582
          el-tooltip(class="item" effect="dark" placement="top")
            div(class="inc" slot="content") INCREASE 899 VIEWS
              br
              span last week: 44,937
            i(class="fas fa-arrow-up") 12%
      li
        div.left
          i(class="fab fa-vuejs")
          a(href="https://vuejs.org/") https://vuejs.org/
        div.right 2,489
          el-tooltip(class="item" effect="dark" placement="top")
            div(class="inc" slot="content") INCREASE 899 VIEWS
              br
              span last week: 44,937
            i(class="fas fa-arrow-down") 15%
      li
        div.left
          i(class="fab fa-wordpress")
          a(href="Wordpress.com") Wordpress.com
        div.right 1,057
          el-tooltip(class="item" effect="dark" placement="top")
            div(class="inc" slot="content") INCREASE 899 VIEWS
              br
              span last week: 44,937
            i(class="fas fa-arrow-down") 30%
    .orderContainer.panel
      h2 Latest Orders
      li
        .image
        .label
          h3 Vintage T-shirt
          p 2018/6/13  13:42
          p Belle Willis
        .total
          h3 Total
          span 3,200
      li
        .image
        .label
          h3 Cowboy Jacket
          p 2018/6/13  10:45
          p Adrian Cummings
        .total
          h3 Total
          span 2,800
      li
        .image
        .label
          h3 Coach Coat
          p 2018/6/13  8:26
          p Lura Holland
        .total
          h3 Total
          span 1,600
    .clear
</template>
<script>
import { _ } from 'vue-underscore';
import Vue from 'vue';

Vue.filter('currency', value => `$ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);

export default {
  data() {
    return {
      // 日期格式
      dateOptions: [
        {
          value: 'Weekly',
          label: 'Weekly',
        },
        {
          value: 'Monthly',
          label: 'Monthly',
        },
      ],
      filterDate: 'Monthly',
      // 日期範圍
      selectDate: 6,
      // 假資料
      fakeRevenue: [],
      fakeCost: [],
      fakeIncome: [],
      fakeDate: [],
      totalRevenue: 0,
      totalCost: 0,
      totalRevenueWeek: 0,
      totalCostWeek: 0,
      // 圖表
      chartData: {
        columns: ['Date', 'TOTAL REVENUE', 'TOTAL COST', 'NET INCOME'],
        rows: [],
      },
      tempObj: {},
    };
  },
  created() {
    for (let i = 0; i <= 30; i += 1) {
      const random1 = _.random(5000, 8000);
      const random2 = _.random(2000, 6000);
      this.totalRevenue += random1;
      this.totalCost += random2;
      if (i <= 6) {
        this.totalRevenueWeek += random1;
        this.totalCostWeek += random2;
      }
      this.fakeRevenue.push(random1);
      this.fakeCost.push(random2);
      this.fakeIncome.push(random1 - random2);
      this.fakeDate.push(this.$moment().subtract(30 - i, 'days').format('DD MMM'));
      this.tempObj = {
        Date: this.fakeDate[i],
        'TOTAL REVENUE': this.fakeRevenue[i],
        'TOTAL COST': this.fakeCost[i],
        'NET INCOME': this.fakeIncome[i],
      };
      this.chartData.rows.push(this.tempObj);
    }
  },
  computed: {
    filterRevenue() {
      return this.filterDate === 'Weekly' ? this.totalRevenueWeek : this.totalRevenue;
    },
    filterCost() {
      return this.filterDate === 'Weekly' ? this.totalCostWeek : this.totalCost;
    },
  },
  methods: {
    FilterDate(value) {
      if (value === 'Weekly') this.selectDate = 6;
      else this.selectDate = 30;
    },
  },
};
</script>
<style lang="scss">
@import '../../public/config.scss';

#ShowInfo {
  .top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    h2 {
      font-family: $ffb;
      font-size: $title;
    }
    .selectContainer {
      .note-date {
        margin-right: 15px;
        display: flex;
        float: left;
        padding-top: 10px;
        p {
          padding: 0 5px;
        }
      }
    }
  }
  .cardContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    .card {
      width: 300px;
      display: inline-block;
      text-align: center;
      font-size: $subtitle2;
      background-color: #fff;
      padding: 30px 0;
      i {
        margin-right: 8px;
        display: inline-block;
        font-size: $title;
      }
      h3 {
        display: inline-block;
      }
      .info {
        font-size: 36px;
        font-family: $ffb;
        &.revenue {
          color: $green;
        }
        &.cost {
          color: $red;
        }
        &.income {
          color: $blue;
        }
      }
    }
  }
  .chartsContainer {
    background-color: #fff;
    padding: 30px 40px 0;
    margin-bottom: 20px;
    h2 {
      font-size: $title;
      font-family: $ffb;
    }
    .ve-line {
      width: 100%;
      div {
        canvas {
          width: 100%;
        }
      }
    }
  }
  .transactionContainer,
  .orderContainer {
    width: 460px;
    height: 460px;
    padding: 30px 40px;
    float: left;
    background-color: #fff;
    h2 {
      font-size: $title;
      font-family: $ffb;
    }
  }
  .transactionContainer {
    margin-right: 20px;
    li {
      list-style: none;
      padding: 24px 0;
      border-bottom: 1px solid $grey2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:last-child {
        border-bottom: 0px;
      }
      .left {
        i {
          font-size: 45px;
          margin-right: 20px;
        }
        a {
          font-size: $subtitle2;
          text-decoration: none;
          color: $grey3;
        }
      }
      .right {
        font-size: $subtitle;
        font-family: $ffb;
        letter-spacing: 1px;
        i {
          margin-left: 20px;
          font-size: $subtitle2;
          letter-spacing: 0px;
          &.fa-arrow-up {
            color: $green;
          }
          &.fa-arrow-down {
            color: $red;
          }
        }
      }
    }
  }
  .orderContainer {
    h2 {
      margin-bottom: 22px;
    }
    li {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 8px;
      padding-bottom: 8px;
      border-bottom: 1px solid $grey2;
      &:last-child {
        border-bottom: 0px;
      }
      .image {
        width: 100px;
        height: 100px;
        background-image: url('../assets/logo.png');
        background-size: contain;
        background-repeat: no-repeat;
      }
      .label {
        p {
          color: $grey3;
          font-size: $subtitle2;
        }
      }
      .total {
        align-self: flex-end;
        font-size: $subtitle;
        h3 {
          font-size: $table;
        }
      }
    }
  }
  .panel {
    box-shadow: 0 0 10px 5px $grey2;
    border-radius: 3px;
  }
}
div.inc {
  font-size: $subtitle2;
  span {
    font-family: $ff;
    color: $grey4;
    font-style: italic;
    font-size: $table;
    margin-top: 8px;
    // display: block;
  }
}
</style>
