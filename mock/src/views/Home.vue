<template>
  <div class="home">
    <NavTop />
    <NavBottom />
    <NavUserInfo></NavUserInfo>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBottom from '@/components/Home/Units/NavBottom.vue';
import NavTop from '@/components/Home/Units/NavTop.vue';
import NavUserInfo from '@/components/Home/Units/NavUserInfo.vue';

@Component({
  components: {
    NavBottom,
    NavTop,
    NavUserInfo
  },
})
export default class Home extends Vue {}
</script>
