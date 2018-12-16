<template>
  <div class="MapHome">
    <NavTop/>
    <Map/>
    <ToggleBtn/>
    <Cloud/>
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

export default {
  name: 'MapHome',
  components: {
    NavTop,
    Map,
    Cloud,
    BottomNav,
    ToggleBtn,
    BlueBottom
  }
}
</script>

<style scoped lang="scss">
  .MapHome {
    height: 755px;
    width: 100%;
  }
</style>
