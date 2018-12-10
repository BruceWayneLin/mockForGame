<template>
  <div class="NavTop">
    <div class="NavDiv">

    </div>
    <div class="NavDiv">
      <img src="@/assets/imgs/logo.png" alt="">
    </div>
    <div class="NavDiv">

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component()
export default class NavTop extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .NavTop {
    background-color: #191639;
    width: 100%;
    height: 60px;
    position: absolute;
    top: 0px;
    display: flex;
    border: none;
    .NavDiv {
      display: flex;
      background-color: #191639;;
      height: 100%;
      width: 100%;
      img {
        height: 80%;
        width: 80%;
        z-index:999;
        position: relative;
        margin: 5px auto;
      }
    }
  }
</style>