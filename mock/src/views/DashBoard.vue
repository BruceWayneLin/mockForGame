<template>
  <div class="Dashboard">
    <div class="container">
      <NavTop />
      <ToggleBtn />
      <LeftSideNav />
      <img src="@/assets/imgs/P.jpg" alt="">
    </div>
  </div>
</template>

<script>
  import NavTop from '@/components/MapHome/NavTop.vue'
  import ToggleBtn from '@/components/Units/ToggleBtn.vue'
  import LeftSideNav from '@/components/Units/LeftSideNav.vue'
  export default {
    name: 'Dashboard',
    components: {
      NavTop,
      ToggleBtn,
      LeftSideNav
    }
  }
</script>

<style scoped lang="scss">
  .Dashboard {
    background-color: #191639;
    height: 100%;
    width: 100%;
    .container {
      img {
        position: absolute;
        top: 150px;
        width: 100%;
      }
    }
  }
</style>