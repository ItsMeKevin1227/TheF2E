<template>
  <div id="searchArea">
    <template v-if="!$store.state.isLoading">
      <h3>Showing {{totalLength}} results by…</h3>
      <div class="selectTags">
        <el-tag v-for="(tag,idx) in selectedTags"
                closable
                :key="idx"
                size="small"
                @close="deleteTag(tag)">
          {{tag.zone}}
        </el-tag>
      </div>
      <SearchItem/>
    </template>
    <h2 v-else>Loading</h2>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import SearchItem from './SearchItem';

export default {
  components: {
    SearchItem,
  },
  computed: {
    ...mapState(['totalLength']),
    ...mapGetters(['selectedTags']),
  },
  methods: {
    ...mapMutations(['deleteTag']),
  },
};
</script>
<style lang="scss">
@import '../../static/styles/settings.scss';

#searchArea {
  display: inline-block;
  .selectTags {
    margin-bottom: 24px;
  }
  .el-tag {
    margin-right: 8px;
    background-color: transparent;
    color: $color-sub;
    border-color: $color-sub;
    cursor: pointer;
    &:hover {
      background-color: $color-sub;
      color: #fff;
    }
    &:hover > i {
      color: #fff;
    }
    i {
      color: $color-sub;
      background-color: transparent;
    }
  }
}
</style>
