<template>
  <div id="ComicCover">
    <div id="cover"
         :style="{ 'backgroundImage': `url('${cover}')` }"></div>
    <div id="info">
      <h2 id="title">MY HEXSCHOOL</h2>
      <div id="intro">
        <li>
          <span>Genres</span>
          Fusce/vehicula/dolor
        </li>
        <li>
          <span>Author</span>
          Namae Shiranai
        </li>
        <li>
          <span>Status</span>
          Ongoing
        </li>
        <li>
          <span>Rate</span>
          <span class="star">★★★★☆</span>
        </li>
        Summary
        <p>{{text1}}
        </p>
        <p>
          {{text2}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import cover from '@/assets/img/comicCover.png';

export default {
  data() {
    return {
      cover,
      text1: 'If your banker breaks, you snap if your apothecary by mistake sends you poison in your pills, you die.',
      text2: 'Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals.',
    };
  },
};
</script>
<style lang="scss">
@import '../../public/style.scss';
#ComicCover {
  width: 617px;
  margin: 0 auto;
  #cover {
    width: 300px;
    height: 446px;
    box-sizing: border-box;
    background-size: contain;
    border: 3px solid #000;
    display: inline-block;
  }
  #info {
    width: 317px;
    display: inline-block;
    vertical-align: top;
    #title {
      font-size: $fz1;
      line-height: 52px;
      width: 100%;
      height: 52px;
      background-color: #000;
      color: #fff;
      text-align: center;
      margin-top: 0;
      margin-bottom: 4px;
      font-weight: 700;
      font-family: $ff;
    }
    #intro {
      list-style: none;
      font-size: $fz4;
      padding: 20px;
      li {
        margin-bottom: 8px;
        span {
          font-weight: 700;
          width: 52px;
          margin-right: 16px;
          display: inline-block;
        }
        .star {
          letter-spacing: 10px;
          width: auto;
        }
        &:last-child {
          margin-bottom: 24px;
        }
      }
      p {
        line-height: 24px;
        font-size: $fz4;
      }
    }
  }
}
</style>
