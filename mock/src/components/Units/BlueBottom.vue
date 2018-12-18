<template>
  <div class="BlueBottom">
    <div class="Bottom" :style="{'width': width, 'font-size': fontSize, 'margin-left': marginLeft, 'height': height, 'position': position}">
      <div :class="{'specialRight': this.$route.path == '/DashBoard'}">
        <span>
          ULG 官網
        </span>
      </div>
      <div :class="{'specialLeft': this.$route.path == '/DashBoard'}">
        <span>
          使用者條款
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BlueBottom',
  data() {
    return {
      width: '',
      fontSize: '',
      marginLeft: '',
      height: '',
      position: 'fixed'
    }
  },
  props: {
  },
  components: {
  },
  methods: {
    
  },
  mounted() {
    if (this.$route.path == '/DashBoard') {
      this.fontSize = '12px';
      this.height = '70px';
      this.position = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .BlueBottom {
    position: relative;
    .Bottom {
      display: flex;
      background-image: -moz-linear-gradient( 0deg, rgb(25,19,101) 0%, rgb(25,22,63) 52%, rgb(25,25,25) 100%);
      background-image: -webkit-linear-gradient( 0deg, rgb(25,19,101) 0%, rgb(25,22,63) 52%, rgb(25,25,25) 100%);
      background-image: -ms-linear-gradient( 0deg, rgb(25,19,101) 0%, rgb(25,22,63) 52%, rgb(25,25,25) 100%);
      background-image: linear-gradient( 0deg, rgb(25,19,101) 0%, rgb(25,22,63) 52%, rgb(25,25,25) 100%);
      height: 37px;
      bottom: 0px;
      z-index: 999;
      width: 100%;
      opacity: 0.9;
      div {
        display: flex;
        width: 50%;
        height: 60px;
        color: white;
        span {
          text-align: center;
          display: block;
          margin: auto;
          font-weight: 100;
        }
      }
      .specialRight {
        span {
          display: block;
          float: right;
          margin-right: 15%;
          font-weight: 100;
        }
      }
      .specialLeft {
        span {
          display: block;
          float: left;
          margin-left: 15%;
          font-weight: 100;
        }
      }
    }
  }
</style>
