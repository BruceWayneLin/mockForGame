<template>
  <div class="Airplane">
    <div class="plane" :class="{ 'flyPlane': plane }">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Airplane',
  data() {
    return {
        plane: false
    }
  },
  props: {
  },
  components: {
  },
  methods: {
    showPlaneFun() {
        var i = 0;
        setInterval(()=>{
            i++
            if(i == 60){
                i = 0;
                this.plane = !this.plane;
            }
        }, 300)
    }
  },
  mounted() {
    this.showPlaneFun()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Airplane {
    .plane {
      background: url('~@/assets/imgs/airplane.png');
      background-size: contain;
      background-repeat: no-repeat;
      height: 400px;
      width: 260px;
      position: absolute;
      z-index: 400;
      top: 35vh;
      display: none;
    }
    .plane.flyPlane {
      -webkit-animation: fly 5s infinite; /* Safari 4.0 - 8.0 */
      animation: fly 5s infinite;
      display: initial;
    }
  }
  
  @keyframes fly {
    0% {
        transform: translate(-100px, -100px);
    }
    100% {
        transform: translate(1024px, -1024px);
    }
  }
  @-webkit-keyframes fly {
    0% {
        transform: translate(-100px, -100px);
    }
    100% {
        transform: translate(1024px, -1024px);
    }
  }
</style>
