<template>
  <div class="Cloud">
    <img src="@/assets/clouds/cloud01.png" alt="" class="cloudOne img-responsive">
    <img src="@/assets/clouds/cloud02.png" alt="" class="cloudTwo img-responsive">
    <img src="@/assets/clouds/cloud03.png" alt="" class="cloudThree img-responsive">
  </div>
</template>

<script>

export default {
  name: 'Cloud',
  props: {
  },
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cloudOne {
    position: absolute;
    display: flex;
    z-index: 9997;
    width: 50%;
    height: auto;
    top: 130px;
    -webkit-animation: cloudOneMove 45s infinite; /* Safari 4.0 - 8.0 */
    animation: cloudOneMove 45s infinite;
    animation-duration: -3s;
    -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 */
    animation-timing-function: linear;
    max-height: 400px;
  }
  .cloudTwo {
    position: absolute;
    z-index: 9998;
    width: 50%;
    height: auto;
    top: 130px;
    -webkit-animation: cloudOneMove 55s infinite; /* Safari 4.0 - 8.0 */
    animation: cloudOneMove 55s infinite;
    animation-duration: -3s;
    -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 */
    animation-timing-function: linear;
    max-height: 400px;
  }
  .cloudThree {
    position: absolute;
    width: 50%;
    z-index: 9996;
    top: 130px;
    -webkit-animation: cloudOneMove 75s infinite; /* Safari 4.0 - 8.0 */
    animation: cloudOneMove 75s infinite;
    animation-duration: -5s;
    -webkit-animation-timing-function: linear; /* Safari 4.0 - 8.0 */
    animation-timing-function: linear;
    max-height: 400px;
  }

  @-webkit-keyframes cloudOneMove {
    from {left: 0;}
    to {left: 50%;}
  }

  @keyframes cloudOneMove {
    from {left: 0;}
    to {left: 50%;}
  }

  @-webkit-keyframes cloudTwoMove {
    from {left: 0;}
    to {left: 50%;}
  }

  @keyframes cloudTwoMove {
    from {left: 0;}
    to {left: 50%;}
  }

  @-webkit-keyframes cloudThreeMove {
    from {left: 0;}
    to {left: 50%;}
  }

  @keyframes cloudThreeMove {
    from {left: 0;}
    to {left: 50%;}
  }

  .Cloud {
  }
</style>
