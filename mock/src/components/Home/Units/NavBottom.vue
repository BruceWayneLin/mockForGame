<template>
  <div class="Nav">
    <div class="nav-lists">
      <div class="nav-box">
        <div class="announce">
          <router-link to="#"></router-link>
        </div>
      </div>
      <div class="nav-box">
        <div class="customer-service">
          <router-link to="#"></router-link>
        </div>
      </div>
      <div class="nav-box">
        <div class="deposit-point">
          <router-link to="#"></router-link>
        </div>
      </div>
      <div class="nav-box">
        <div class="sign-up">
          <router-link to="#"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBottom extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Nav {
    background-color: gray;
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0px;
  }
</style>