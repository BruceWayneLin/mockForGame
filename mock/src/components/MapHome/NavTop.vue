<template>
  <div class="NavTop">
    <div class="nav">
      <div style="display: block;" class="navDiv">
        <div id="roundLeft" v-if="showBurger" @click="toggleNav()">
          <font-awesome-icon id="icon" icon="bars"/>
        </div>
      </div>
      <div class="navDiv">
        <img src="@/assets/imgs/logo.png" alt="">
      </div>
      <div style="display: block;" class="navDiv">
        <div id="roundRight">
          <img id="icon" src="@/assets/icons/iconMoney.png" alt="">
        </div>
      </div>
    </div>
    <UserInfo />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import UserInfo from '@/components/Units/UserInfo.vue'
import { State } from 'vuex'
export default {
  name: 'NavTop',
  data() {
    return {
      showBurger: false
    }
  },
  props: {
  },
  components: {
    FontAwesomeIcon,
    UserInfo
  },
  methods: {
    toggleNav() {
      this.$store.commit('OpenNav')
    }
  },
  mounted() {
    if (this.$route.path == '/DashBoard') {
      this.showBurger = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .NavTop {
    position: fixed;
    width: 100%;
    z-index: 9999;
    height: 120px;
    background-image: -moz-linear-gradient( rgb(25,19,101) 28%, rgb(29,26,67) 41%, rgb(32,32,32) 53%, rgb(25,25,25) 100%);
    background-image: -webkit-linear-gradient( rgb(25,19,101) 28%, rgb(29,26,67) 41%, rgb(32,32,32) 53%, rgb(25,25,25) 100%);
    background-image: -ms-linear-gradient( rgb(25,19,101) 28%, rgb(29,26,67) 41%, rgb(32,32,32) 53%, rgb(25,25,25) 100%);
    background-image: linear-gradient( rgb(25,19,101) 28%, rgb(29,26,67) 41%, rgb(32,32,32) 53%, rgb(25,25,25) 100%);
    .nav {
    width: 100%;
    padding-top: 3px;
    padding-bottom: 23px;
    display: flex;
      .navDiv {
        display: flex;
        width: 33%;
        height: 45px;
        img {
          display: block;
          margin: 0 auto;
          height: 35px;
        }
        #roundLeft {
          display: block;
          height: 40px;
          width: 40px;
          /* Safari 3-4, iOS 1-3.2, Android 1.6- */
          -webkit-border-radius: 50%; 
          /* Firefox 1-3.6 */
          -moz-border-radius: 50%;
          /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
          border-radius: 50%; 
          // margin: 5px auto;
          background-image: -moz-linear-gradient( 90deg, rgb(164,117,14) 0%, rgb(167,120,17) 31%, rgb(196,149,47) 51%, rgb(168,121,18) 68%, rgb(164,117,14) 100%);
          background-image: -webkit-linear-gradient( 90deg, rgb(164,117,14) 0%, rgb(167,120,17) 31%, rgb(196,149,47) 51%, rgb(168,121,18) 68%, rgb(164,117,14) 100%);
          background-image: -ms-linear-gradient( 90deg, rgb(164,117,14) 0%, rgb(167,120,17) 31%, rgb(196,149,47) 51%, rgb(168,121,18) 68%, rgb(164,117,14) 100%);
          background-image: linear-gradient( 90deg, rgb(164,117,14) 0%, rgb(167,120,17) 31%, rgb(196,149,47) 51%, rgb(168,121,18) 68%, rgb(164,117,14) 100%);
          box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.004);
          float: left;
          margin-left: 5%;
          #icon {
            display: block;
            height: 20px;
            margin: 10px auto;
            color: white;
          }
        }

        #roundRight {
          display: block;
          height: 40px;
          width: 40px;
          /* Safari 3-4, iOS 1-3.2, Android 1.6- */
          -webkit-border-radius: 50%; 
          /* Firefox 1-3.6 */
          -moz-border-radius: 50%;
          /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
          border-radius: 50%; 
          // margin: 5px auto;
          background-image: -moz-linear-gradient( 90deg, rgb(164,117,14) 0%, rgb(167,120,17) 31%, rgb(196,149,47) 51%, rgb(168,121,18) 68%, rgb(164,117,14) 100%);
          background-image: -webkit-linear-gradient( 90deg, rgb(164,117,14) 0%, rgb(167,120,17) 31%, rgb(196,149,47) 51%, rgb(168,121,18) 68%, rgb(164,117,14) 100%);
          background-image: -ms-linear-gradient( 90deg, rgb(164,117,14) 0%, rgb(167,120,17) 31%, rgb(196,149,47) 51%, rgb(168,121,18) 68%, rgb(164,117,14) 100%);
          background-image: linear-gradient( 90deg, rgb(164,117,14) 0%, rgb(167,120,17) 31%, rgb(196,149,47) 51%, rgb(168,121,18) 68%, rgb(164,117,14) 100%);
          box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.004);
          float: right;
          margin-right: 5%;
        }
      }
      #icon {
        width: 30px;
        height: 30px;
        margin: auto;
        margin-top: 4px;
      }
    }
  }
</style>
