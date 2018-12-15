<template>
  <div class="BlueBottom">
    <div class="Bottom">
      <div>
        <span>
          ULG 官網
        </span>
      </div>
      <div>
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
  props: {
  },
  components: {
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .BlueBottom {
    .Bottom {
      display: flex;
      background-image: -moz-linear-gradient( -90deg, rgb(25,19,101) 0%, rgb(25,22,63) 52%, rgb(25,25,25) 100%);
      background-image: -webkit-linear-gradient( -90deg, rgb(25,19,101) 0%, rgb(25,22,63) 52%, rgb(25,25,25) 100%);
      background-image: -ms-linear-gradient( -90deg, rgb(25,19,101) 0%, rgb(25,22,63) 52%, rgb(25,25,25) 100%);
      background-image: linear-gradient( -90deg, rgb(25,19,101) 0%, rgb(25,22,63) 52%, rgb(25,25,25) 100%);
      height: 37px;
      position: fixed;
      bottom: 0px;
      z-index: 999;
      width: 100%;
      opacity: 0.9;
      div {
        display: flex;
        width: 50%;
        color: white;
        span {
          text-align: center;
          display: block;
          margin: auto;
        }
      }
    }
  }
</style>
