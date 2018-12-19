<template>
  <div class="LeftSideNav" :style="{'top': topDetect}" :class="{'slide-in': openNavOrNot}" v-hammer:swipe.left="onSwipeLeft">
      <div class="sideNav">
      <div class="div1">
        <span>
          <div id="img" class="img1" alt="">
          </div>
          首頁
        </span>
      </div>
      <div class="div2">
        <span>
          <div id="img" class="img2" src="@/assets/icons/navibarIcons/btn-1-n.png" alt="">
          </div>
          商城
        </span>
      </div>
      <div class="div3">
        <span>
          <div id="img" class="img3" src="@/assets/icons/navibarIcons/btn-1-n.png" alt="">
          </div>
          交易
        </span>
      </div>
      <div class="div4">
        <span>
          <div id="img" class="img4" src="@/assets/icons/navibarIcons/btn-1-n.png" alt="">
          </div>
          遊戲
        </span>
      </div>
      <div class="div5">
        <span>
          <div id="img" class="img5" src="@/assets/icons/navibarIcons/btn-1-n.png" alt="">
          </div>
          社群
        </span>
      </div>
      <div class="div6">
        <span>
          <div id="img" class="img6" src="@/assets/icons/navibarIcons/btn-1-n.png" alt="">
          </div>
          帳戶
        </span>
      </div>
      <div class="div7">
        <span>
          <div id="img" class="img7" src="@/assets/icons/navibarIcons/btn-1-n.png" alt="">
          </div>
          登出
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LeftSideNav',
  data() {
      return {
        isNavOpen: false,
      }
  },
  props: {
  },
  components: {
  },
  methods: {
    onSwipeLeft(){
      this.$store.commit('OpenNav')
    },
  },
  computed: {
    openNavOrNot() {
      return this.$store.state.navOpen
    },
    topDetect() {
      if(this.$store.state.userInfoHide){
        return '50px'
      } else {
        return ''
      }
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .LeftSideNav {
    top: 120px;
    width: 20%;
    background-color: #1c3644;
    height: 100%;
    width: 70px;
    position: fixed;
    left: -999px;
    .sideNav {
      div {
        display: flex;
        background-color: #1c3644;
        height: 70px;
        width: 70px;
        #img {
          height: 30px;
          width: 30px;
          display: block;
          margin: 0 auto;
          margin-top: 15%;
          background-repeat: no-repeat;
          background-size: contain;
        }
        .img1 {
          background: url('~@/assets/icons/navibarIcons/btn-1-n.png');
        }
        .img2 {
          background: url('~@/assets/icons/navibarIcons/btn-2-n.png');
        }
        .img3 {
          background: url('~@/assets/icons/navibarIcons/btn-3-n.png');
        }
        .img4 {
          background: url('~@/assets/icons/navibarIcons/btn-4-n.png');
        }
        .img5 {
          background: url('~@/assets/icons/navibarIcons/btn-5-n.png');
        }
        .img6 {
          background: url('~@/assets/icons/navibarIcons/btn-6-n.png');
        }
        .img7 {
          background: url('~@/assets/icons/navibarIcons/btn-7-n.png');
        }
        span {
          color: white;
          display: block;
          font-size: 14px;
          text-shadow: 2px 2px black;
          margin: auto;
        }
      }
    }
    .div1 {
      // &:hover {
      //   background-color: aqua;
      //   .img1 {
      //     background: url('~@/assets/icons/navibarIcons/btn-1-h.png');
      //   }
      // }
    }
    .div2 {
      // &:hover {
      //   background-color: aqua;
      //   .img2 {
      //     background: url('~@/assets/icons/navibarIcons/btn-2-h.png');
      //   }
      // }
    }
    .div3 {
      // &:hover {
      //   background-color: aqua;
      //   .img3 {
      //     background: url('~@/assets/icons/navibarIcons/btn-3-h.png');
      //   }
      // }
    }
    .div4 {
      // &:hover {
      //   background-color: aqua;
      //   .img4 {
      //     background: url('~@/assets/icons/navibarIcons/btn-4-h.png');
      //   }
      // }
    }
    .div5 {
      // &:hover {
      //   background-color: aqua;
      //   .img5 {
      //     background: url('~@/assets/icons/navibarIcons/btn-5-h.png');
      //   }
      // }
    }
    .div6 {
      // &:hover {
      //   background-color: aqua;
      //   .img6 {
      //     background: url('~@/assets/icons/navibarIcons/btn-6-h.png');
      //   }
      // }
    }
    .div7 {
      // &:hover {
      //   background-color: aqua;
      //   .img7 {
      //     background: url('~@/assets/icons/navibarIcons/btn-7-h.png');
      //   }
      // }
    }
  }

  .LeftSideNav.slide-in {
    -webkit-animation: slide-in 0.3; /* Safari 4.0 - 8.0 */
    animation: slide-in 0.3;
    left: 0px;
    position: fixed;
    z-index: 9999;
  }

  @keyframes slide-in {
    0% {
      left: -200px;
    }
    100% {
      left: 0px;
    }
  }
  
</style>
