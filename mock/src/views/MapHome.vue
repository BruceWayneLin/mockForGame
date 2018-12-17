<template>
  <div class="MapHome">
    <NavTop/>
    <Map/>
    <ToggleBtn/>
    <Cloud/>
    <Airplane/>
    <BottomNav/>
    <BlueBottom/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavTop from '@/components/MapHome/NavTop.vue'
import Map from '@/components/MapHome/Map.vue'
import Cloud from '@/components/MapHome/Cloud.vue'
import BottomNav from '@/components/MapHome/BottomNav.vue'
import ToggleBtn from '@/components/Units/ToggleBtn.vue'
import BlueBottom from '@/components/Units/BlueBottom.vue'
import Airplane from '@/components/Units/Airplane.vue'
export default {
  name: 'MapHome',
  components: {
    NavTop,
    Map,
    Cloud,
    BottomNav,
    ToggleBtn,
    BlueBottom,
    Airplane
  }
}
</script>

<style scoped lang="scss">
  .MapHome {
    height: 630px;
    width: 100%;
    overflow: hidden;
  }
</style>
