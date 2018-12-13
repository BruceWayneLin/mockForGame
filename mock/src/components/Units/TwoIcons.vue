<template>
  <div class="TwoIcons">
    <div class="icons">
      <div class="announce">

      </div>
    </div>
    <div class="icons">
      <div class="customer">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TwoIcons',
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
  .TwoIcons {
    .icons {
      display: flex;
      .announce {
        background: url('~@/assets/icons/announce.png');
        background-repeat: no-repeat;
        background-size: contain;
        height: 60px;
        width: 60px;
        display: block;
      }
      .customer {
        background: url('~@/assets/icons/customer.png');
        background-repeat: no-repeat;
        background-size: contain;
        height: 60px;
        width: 60px;
        display: block;
      }
    }
  }
</style>
