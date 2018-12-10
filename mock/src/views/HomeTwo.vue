<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <landingPageOne msg="landing page"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import landingPageOne from '@/components/landingPageOne.vue'; // @ is an alias to /src

@Component({
  components: {
    landingPageOne,
  },
})
export default class Home extends Vue {}
</script>
