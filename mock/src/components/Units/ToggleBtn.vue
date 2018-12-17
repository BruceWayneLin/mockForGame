<template>
  <div class="ToggleBtn">
    <div @click="toToggle()">
        <img :src="bakUrl" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'ToggleBtn',
  data() {
      return {
          bakUrl: ''
      }
  },
  props: {
  },
  components: {
  },
  methods: {
      detectImg(url) {
          switch (url) {
              case '/':
                this.bakUrl = require('@/assets/icons/toggleBtnS.png')
              break;
              case '/dashboard':
                this.bakUrl = require('@/assets/icons/toggleBtnM.png')
              break;
              default:
                this.bakUrl = require('@/assets/icons/toggleBtnM.png')
          }
      },
      toToggle() {
        var path = '/DashBoard'
        if(this.$route.path == '/DashBoard'){
            path = '/'
        }  
        this.$router.push(path)
      }
  },
  mounted() {
      this.detectImg(this.$route.path)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .ToggleBtn {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 9999;
      .toggleDiv {
          background-size: contain;
        //   background-image: url("~@/assets/icons/toggleBtnM.png");
          height: 100%;
          width: 100%;
          background-repeat: no-repeat;
          position: absolute;
          right: 0px;
          z-index: 999;
          display: block;
          top: 150px;
      }
      img {
          height: 55px;
          position: absolute;
          right: 0px;
          z-index: 999;
          display: block;
          top: 150px;
      }
  }
</style>
