<template>
  <div class="UserInfo">
    <div class="infoBoard">
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserInfo',
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
  .UserInfo {
    .infoBoard {
      background: url('~@/assets/imgs/user.png');
      background-size: contain;
      background-repeat: no-repeat;
      height: 80px;
      width: 95%;
      display: block;
      margin: 0 auto;
    }
  }
</style>
