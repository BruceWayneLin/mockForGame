<template>
  <div class="Dashboard">
    <div class="container">
      <NavTop />
      <ToggleBtn />
      <LeftSideNav />
      <Slider />
      <Anyatic />
      <UcoinTrade />
      <MiddleSlider />
      <News/>
      <!-- <img src="@/assets/imgs/P.jpg" alt=""> -->
    </div>
  </div>
</template>

<script>
  import NavTop from '@/components/MapHome/NavTop.vue'
  import ToggleBtn from '@/components/Units/ToggleBtn.vue'
  import LeftSideNav from '@/components/Units/LeftSideNav.vue'
  import Slider from '@/components/DashBoard/Slider.vue'
  import UcoinTrade from '@/components/DashBoard/UcoinTrade.vue'
  import Anyatic from '@/components/DashBoard/Anaytic.vue'
  import MiddleSlider from '@/components/DashBoard/MiddleSlider.vue'
  import News from '@/components/DashBoard/News.vue'


  export default {
    name: 'Dashboard',
    components: {
      NavTop,
      ToggleBtn,
      LeftSideNav,
      Slider,
      UcoinTrade,
      Anyatic,
      MiddleSlider,
      News
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