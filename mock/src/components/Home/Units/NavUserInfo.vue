<template>
  <div class="NavUserInfo">
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavUserInfo extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .NavUserInfo {
    background-color: grey;
    height: 80px;
    margin-top: 60px;
    z-index: 99999;
    position: relative;
    top: 0px;

  }
</style>