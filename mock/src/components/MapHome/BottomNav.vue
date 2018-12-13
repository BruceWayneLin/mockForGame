<template>
  <div class="BottomNav">
    <div class="Nav">
      <TwoIcons/>
    </div>
    <div class="marquee">
        <MarqueeTips content="親愛的娛樂家會員您好:  本公司網站系統將於6/19 中午12:00 下午17:00 進行系統轉移維護 (5 HR)  煩請各位會員  避開此時維護時間使用  謝謝各位配合。" :speed="15"></MarqueeTips>
    </div>
  </div>
</template>

<script>
import TwoIcons from '@/components/Units/TwoIcons.vue'
import MarqueeTips from 'vue-marquee-tips'

export default {
  name: 'BottomNav',
  props: {
  },
  components: {
    TwoIcons,
    MarqueeTips
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .BottomNav {
    position: absolute;
    bottom: 18%;
    height: 60px;
    width: 100%;
    z-index: 999;
    .Nav {
      div {
        display: block;
        height: 100%;
        width: 100%;
      }
    }
    .marquee {
      color: white;
      width: 80%;
      position: relative;
      padding: 2px;
      margin: 5px auto;
      background-image: -moz-linear-gradient( -90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 1%, rgba(0,0,0,0.70196) 4%, rgba(0,0,0,0.7) 86%, rgba(0,0,0,0.70196) 96%, rgba(0,0,0,0.35) 99%, rgba(0,0,0,0) 100%);
      background-image: -webkit-linear-gradient( -90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 1%, rgba(0,0,0,0.70196) 4%, rgba(0,0,0,0.7) 86%, rgba(0,0,0,0.70196) 96%, rgba(0,0,0,0.35) 99%, rgba(0,0,0,0) 100%);
      background-image: -ms-linear-gradient( -90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 1%, rgba(0,0,0,0.70196) 4%, rgba(0,0,0,0.7) 86%, rgba(0,0,0,0.70196) 96%, rgba(0,0,0,0.35) 99%, rgba(0,0,0,0) 100%);
      background-image: linear-gradient( -90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 1%, rgba(0,0,0,0.70196) 4%, rgba(0,0,0,0.7) 86%, rgba(0,0,0,0.70196) 96%, rgba(0,0,0,0.35) 99%, rgba(0,0,0,0) 100%);
      p {
        width: 94%;
      }
    }

  }
</style>
