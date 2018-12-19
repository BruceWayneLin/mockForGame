<template>
  <div class="UserInfo" :class="{'hide': hideOrNot}">
    <div class="container">
      <div class="row">
        <div id="avatar" class="col-6" width="46%">
          <img class="avatar_icon" src="@/assets/userInfo/user_icon.png" alt="">
          <img class="level_icon" src="@/assets/userInfo/level_09.png" alt="">
          <div>
            <img class="diamon_icon" src="@/assets/userInfo/card.png" alt="">
            <span class="daimon_title">鑽卡</span>
          </div>
          <p class="title">妖嬌Ａ三蘆小辣椒</p>
        </div>
        <div class="col-3" width="32%">
          <div class="centerDiv">
            <div class="gold-coin">
              <span>999,999,999</span>
            </div>
            <div class="bonus">
              <span>999,999,999</span>
            </div>
          </div>
        </div>
        <div class="col-3" width="32%">
          <div class="centerDiv">
            <div class="entertain-coin">
                <span>999,999,999</span>
            </div>
            <div class="gift-coin">
                <span>999,999,999</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserInfo',
  props: {
  },
  components: {
  },
  methods: {
  },
  computed: {
    hideOrNot() {
      return this.$store.state.userInfoHide
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .UserInfo {
    position:relative;
    top: -30px;
    .col-3, .col-4 {
      padding: 0px;
    }
    .col-3 {
      span {
        color: white;
        font-size: 12px;
        margin: auto;
        display: block;
        float: right;
        padding-right: 5px;
        padding-top: 2px;
      }
    }
    .centerDiv {
      display: block;
      margin:auto;
      margin-top: 15%;
      position: relative;
      left: -15px;
      width: 100%;
    }
    #avatar {
      background: url('~@/assets/userInfo/user_bg.png');
      background-size: contain;
      background-repeat: no-repeat;
      height: 73px;
      .avatar_icon {
        height: 55px;
        position: relative;
        top: 6px;
        left: -7px;
      }
      .level_icon {
        height: 26px;
        position: absolute;
        top: 11px;
        left: 68px;
      }
      .title {
        color: white;
        font-size: 12px;
        font-weight: 300;
        position: relative;
        top: -38px;
        left: 48px;
      }
    }
    .gold-coin {
      background: url('~@/assets/userInfo/coin_bg_01.png');
      background-size: contain;
      background-repeat: no-repeat;
      height: 30px;
      width: 111%;
      position: relative;
      left: -10px;
    }
    .bonus {
      background: url('~@/assets/userInfo/coin_bg_02.png');
      background-size: contain;
      background-repeat: no-repeat;
      height: 30px;
      width: 111%;
      position: relative;
      left: -10px;
    }
    .gift-coin {
      background: url('~@/assets/userInfo/coin_bg_03.png');
      background-size: contain;
      background-repeat: no-repeat;
      height: 30px;
      width: 111%;
    }
    .entertain-coin {
      background: url('~@/assets/userInfo/coin_bg_04.png');
      background-size: contain;
      background-repeat: no-repeat;
      height: 30px;
      width: 111%;
    }
    .diamon_icon {
      height: 15px;
      position: relative;
      left: 86px;
      top: -49px;
    }
    .daimon_title {
      position: relative;
      left: 88px;
      font-size: 14px;
      color: white;
      font-weight: 300;
      top: -50px;
      text-shadow: black 0em 0em 0.2em;
    }
  }
  .UserInfo.hide {
    display: none;
  }
</style>
