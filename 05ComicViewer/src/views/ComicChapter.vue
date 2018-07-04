<template>
  <div id="ComicChapter">
    <h3>All Chapters</h3>
    <div id="chapterChoose">
      <li v-for="(item,idx) in chapters"
          :key="idx">Chapter {{idx+1}}: {{item}}</li>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chapters: ['The F2E Challenge Start!', 'Todo List is Going Crazy!'],
    };
  },
};
</script>

<style lang="scss">
@import '../../public/style.scss';
#ComicChapter {
  width: 620px;
  margin: 0 auto;
  h3 {
    width: 181px;
    height: 44px;
    background-color: #000;
    color: #fff;
    line-height: 44px;
    text-align: center;
    font-size: $fz2;
    font-weight: 700;
    margin-bottom: 0;
  }
  #chapterChoose {
    width: 620px;
    border: 3px solid #000;
    box-sizing: border-box;
    padding: 22px 0;
    background-color: #fff;
    li {
      list-style: none;
      font-weight: 900;
      font-size: $fz4;
      padding: 8px 24px;
      cursor: pointer;
      &:hover {
        background-color: #000;
        color: #fff;
        &:last-child {
          &::after {
            content: 'NEW';
            display: inline-block;
            text-align: center;
            margin-left: 16px;
            width: 55px;
            height: 18px;
            background-color: $green;
            color: #000;
          }
        }
      }
      &:last-child {
        margin-bottom: 0;
        &::after {
          content: 'NEW';
          display: inline-block;
          text-align: center;
          margin-left: 16px;
          width: 55px;
          height: 18px;
          background-color: $green;
        }
      }
    }
  }
}
</style>
