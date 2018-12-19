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
      height: 250px;
      width: 200px;
      position: absolute;
      z-index: 400;
      top: 35vh;
      left: -180px;
    
    }
    .plane.flyPlane {
      -webkit-animation: fly 45s infinite; /* Safari 4.0 - 8.0 */
      animation: fly 45s infinite;
    }
  }
  
  @keyframes fly {
    0% {
        transform: translate(-100px, 100px);
    }
    100% {
        transform: translate(1024px, -1024px);
    }
  }
  @-webkit-keyframes fly {
    0% {
        transform: translate(-100px, 100px);
    }
    100% {
        transform: translate(1024px, -1024px);
    }
  }
</style>
