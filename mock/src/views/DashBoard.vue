<template>
  <div class="Dashboard">
    <div class="container">
      <NavTop />
      <ToggleBtn />
      <LeftSideNav />
      <Slider />
      <Anyatic />
      <UcoinTrade />
      <div class="specBak">
        <MiddleSlider />
        <News/>
        <twoBtn/>
        <BlueBottom/>
      </div>
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
  import twoBtn from '@/components/DashBoard/twoBtn.vue'
  import BlueBottom from '@/components/Units/BlueBottom.vue'

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
      News,
      twoBtn,
      BlueBottom
    }
  }
</script>

<style scoped lang="scss">
  .Dashboard {
    background-color: #191639;
    height: 100%;
    width: 100%;
    .specBak {
      background: url('~@/assets/imgs/bg.png');
      background-size: contain;
      width: 100%;
    }
    .container {
      padding: 0px;
      img {
        position: absolute;
        top: 150px;
        width: 100%;
      }
    }
  }
</style>