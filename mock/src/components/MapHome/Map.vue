<template>
  <div class="Map" v-hammer:swipe.right="onSwipeRight">
    <!-- <div class="pointerOne"></div>
    <div class="pointerTwo"></div>
    <div class="pointerThree"></div>
    <div class="pointerFour"></div>
    <div class="pointerFive"></div>
    <div class="pointerSix"></div>
    <div class="pointerSeven"></div> -->
    <!-- <div class="filter" :style="{'background': filterBack}"></div> -->
    <div class="mapContent" :style="{ 'background-position-x': backgroundpx }" v-hammer:swipe.left="onSwipeLeft">      
    </div>
  </div>
</template>

<script>

export default {
  name: 'Map',
  data() {
    return {
      backgroundx: 50,
      filterBack: "url('~@/assets/building/stadiumMap.png')"
    }
  },
  props: {
  },
  components: {
  },
  methods: {
    onSwipeRight(){
      var i = 0; 
      if(this.backgroundx <= 1){
        return
      }
      var timesAnime = setInterval(()=>{
        i++
        if(this.backgroundx >= 1){
          this.backgroundx--
        }
        if(i == 20){
          clearInterval(timesAnime)
        }
      }, 30)
    },
    onSwipeLeft(){
      var i = 0; 
      if(this.backgroundx >= 99){
        return
      }
      var timesAnime = setInterval(()=>{
        i++
        if(this.backgroundx <= 99){
          this.backgroundx++
        }
        if(i == 20){
          clearInterval(timesAnime)
        }
      }, 30)
    },
    onMouseUpdate(event){
      console.log(event)
    }
  },
  computed: {
    backgroundpx() {
      return `${this.backgroundx}%`;
    }
  },
  mounted() {
     window.addEventListener('mousedown',this.onMouseUpdate);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Map{
    height: 100%;
    .mapContent {
      background: url('~@/assets/imgs/map.jpg');
      height: 100vh;
      width: 100%;
      position: relative;
      z-index: 1;
      background-size: cover;
      top: 120px;
    }
    .filter {
      height: 70vh;
      width: 100%;
      background-size: cover;
      position: absolute;
      z-index: 2;
    }
    .pointer {
      height: 100px;
      width: 100px;
      border: 1px solid red;
    }
    .pointerOne {
      position: absolute;
      z-index: 999;
      left: 40%;
      top: 20%;
      height: 17%;
      width: 17%;
      border: 2px solid red;
    }
    .pointerTwo {
      position: fixed;
      z-index: 999;
      left: 16%;
      top: 25%;
      height: 17%;
      width: 17%;
      border: 2px solid red;
    }
    .pointerThree {
      position: fixed;
      z-index: 999;
      left: 69%;
      top: 22%;
      height: 21%;
      width: 9%;
      border: 2px solid red;
    }
    .pointerFour {
      position: fixed;
      z-index: 999;
      left: 80%;
      top: 37%;
      height: 17%;
      width: 17%;
      border: 2px solid red;
    }
    .pointerFive {
      position: fixed;
      z-index: 999;
      left: 40%;
      top: 20%;
      height: 17%;
      width: 17%;
      border: 2px solid red;
    }
    .pointerSix {
      position: fixed;
      z-index: 999;
      left: 34%;
      top: 45%;
      height: 24%;
      width: 19%;
      border: 2px solid red;
      // background: url(/img/stadium.85957b1e.png);
      // background-size: contain;
      // background-repeat: no-repeat;
    }

    @media screen and (min-width: 1024px) {
      // .mapContent {
      //   height: 81vh;
      // }
      // .filter {
      //   height: 81vh;
      // }
    }
  }
</style>
