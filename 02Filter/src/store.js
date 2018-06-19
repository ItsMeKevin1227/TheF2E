/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

// 引入 axios
import axios from 'axios';

Vue.use(Vuex);

let tempTags = [];
const store = new Vuex.Store({
  state: {
    // actions抓回來的資料存放區
    items: [],
    // 當前頁數
    currentPage: 1,
    // 是否正在ajax
    isLoading: true,
    // 關鍵字搜尋
    searchKeyword: '',
    // 總頁數
    totalPage: 0,
    // 每頁筆數
    pageSize: 6,
    // 總筆數
    totalLength: 0,
    // 下拉式選單可選的標籤
    tagList: [
      { zone: '楠梓區', isSelected: false, id: 'Nanzi-Dist', contentAmount: 0 },
      { zone: '左營區', isSelected: false, id: 'Zuoying-Dist', contentAmount: 0 },
      { zone: '鼓山區', isSelected: false, id: 'Gushan-Dist', contentAmount: 0 },
      { zone: '三民區', isSelected: false, id: 'Sanmin-Dist', contentAmount: 0 },
      { zone: '苓雅區', isSelected: false, id: 'Lingya-Dist', contentAmount: 0 },
      { zone: '新興區', isSelected: false, id: 'Xinxing-Dist', contentAmount: 0 },
      { zone: '前金區', isSelected: false, id: 'Qianjin-Dist', contentAmount: 0 },
      { zone: '鹽埕區', isSelected: false, id: 'Yancheng-Dist.', contentAmount: 0 },
      { zone: '前鎮區', isSelected: false, id: 'Qianzhen-Dist', contentAmount: 0 },
      { zone: '旗津區', isSelected: false, id: 'Qijin-Dist', contentAmount: 0 },
      { zone: '小港區', isSelected: false, id: 'Xiaogang-Dist', contentAmount: 0 },
      { zone: '鳳山區', isSelected: false, id: 'Fengshan-Dist', contentAmount: 0 },
      { zone: '茂林區', isSelected: false, id: 'Maolin-Dist', contentAmount: 0 },
      { zone: '甲仙區', isSelected: false, id: 'Jiaxian-Dist', contentAmount: 0 },
      { zone: '六龜區', isSelected: false, id: 'Liugui-Dist', contentAmount: 0 },
      { zone: '杉林區', isSelected: false, id: 'Shanlin-Dist', contentAmount: 0 },
      { zone: '美濃區', isSelected: false, id: 'Meinong-Dist', contentAmount: 0 },
      { zone: '內門區', isSelected: false, id: 'Neimen-Dist', contentAmount: 0 },
      { zone: '仁武區', isSelected: false, id: 'Renwu-Dist', contentAmount: 0 },
      { zone: '田寮區', isSelected: false, id: 'Tianliao-Dist', contentAmount: 0 },
      { zone: '旗山區', isSelected: false, id: 'Qishan-Dist', contentAmount: 0 },
      { zone: '梓官區', isSelected: false, id: 'Ziguan-Dist', contentAmount: 0 },
      { zone: '阿蓮區', isSelected: false, id: 'Alian-Dist', contentAmount: 0 },
      { zone: '湖內區', isSelected: false, id: 'Hunei-Dist', contentAmount: 0 },
      { zone: '岡山區', isSelected: false, id: 'Gangshan-Dist', contentAmount: 0 },
      { zone: '茄萣區', isSelected: false, id: 'Qieding-Dist', contentAmount: 0 },
      { zone: '路竹區', isSelected: false, id: 'Luzhu-Dist', contentAmount: 0 },
      { zone: '鳥松區', isSelected: false, id: 'Niaosong-Dist', contentAmount: 0 },
      { zone: '永安區', isSelected: false, id: 'Yong-an-Dist', contentAmount: 0 },
      { zone: '燕巢區', isSelected: false, id: 'Yanchao-Dist', contentAmount: 0 },
      { zone: '大樹區', isSelected: false, id: 'Dashu-Dist', contentAmount: 0 },
      { zone: '大寮區', isSelected: false, id: 'Daliao-Dist', contentAmount: 0 },
      { zone: '林園區', isSelected: false, id: 'Linyuan-Dist', contentAmount: 0 },
      { zone: '彌陀區', isSelected: false, id: 'Mituo-Dist', contentAmount: 0 },
      { zone: '橋頭區', isSelected: false, id: 'Qiaotou-Dist', contentAmount: 0 },
      { zone: '大社區', isSelected: false, id: 'Dashe-Dist', contentAmount: 0 },
      { zone: '那瑪夏區', isSelected: false, id: 'Namaxia-Dist', contentAmount: 0 },
      { zone: '桃源區', isSelected: false, id: 'Taoyuan-Dist', contentAmount: 0 },
    ],
  },
  getters: {
    selectedTags: state => {
      return state.tagList.filter(tag => tag.isSelected);
    },
    filteredData: state => {
      let finalData = [];
      // 關鍵字搜尋
      finalData =
        state.searchKeyword === ''
          ? state.items
          : state.items.filter(keyword => {
              let tempStr = JSON.stringify(keyword);
              let regexWords = state.searchKeyword.split(' ').join('|');
              if (tempStr.match(new RegExp(regexWords, 'i')) !== null) return true;
            });

      // 地區搜尋 計數
      state.tagList.forEach(area => {
        let count = 0;
        finalData.forEach(item => {
          if (item.Zone === area.zone) count++;
        });
        area.contentAmount = count;
      });

      // 地區搜尋 篩選陣列
      finalData =
        store.getters.selectedTags.length === 0
          ? finalData
          : finalData.filter(item =>
              store.getters.selectedTags.some(tag => tag.zone === item.Zone),
            );

      // 分頁
      state.totalPage = Math.ceil(finalData.length / state.pageSize);
      state.totalLength = finalData.length;

      // pagination
      let start = (state.currentPage - 1) * state.pageSize;
      let end = start + state.pageSize;

      // return finalData;
      return finalData.slice(start, end);
    },
  },
  mutations: {
    setTags(state, tag) {
      // Filter.vue選取Tag用
      tag.isSelected = !tag.isSelected;
      state.currentPage = 1;
      store.commit('scrollToTop');
    },
    deleteTag(state, tag) {
      // Search.vue刪Tags用
      tag.isSelected = false;
      state.currentPage = 1;
      store.commit('scrollToTop');
    },
    setKeyword(state, payload) {
      // 加入關鍵字
      state.searchKeyword = payload.keyword;
    },
    changePage(state, payload) {
      state.currentPage = payload;
    },
    setItems(state, payload) {
      // actions取得資料用
      state.items.push(payload);
      state.isLoading = false;
    },
    scrollToTop() {
      const scrollHeight = window.scrollY;
      const scrollStep = Math.PI / (500 / 15);
      const cosParameter = scrollHeight / 2;
      let scrollCount = 0;
      let scrollMargin;
      const scrollInterval = setInterval(function() {
        if (window.scrollY != 0) {
          scrollCount = scrollCount + 1;
          scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
          window.scrollTo(0, scrollHeight - scrollMargin);
        } else clearInterval(scrollInterval);
      }, 15);
    },
  },
  actions: {
    fetchApi({ commit }, payload) {
      axios
        .get('https://data.kcg.gov.tw/api/action/datastore_search', {
          params: {
            resource_id: '92290ee5-6e61-456f-80c0-249eae2fcc97',
          },
        })
        .then(response => {
          let items = response.data.result.records;
          for (let i = 0; i < items.length; i++) {
            commit('setItems', items[i]);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
});
export default store;
