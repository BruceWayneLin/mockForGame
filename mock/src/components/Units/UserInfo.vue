<template>
  <div class="UserInfo">
    <div class="container">
      <div class="row">
        <div id="avatar" class="col-6">
          <img class="avatar_icon" src="@/assets/userInfo/user_icon.png" alt="">
          <img class="level_icon" src="@/assets/userInfo/level_09.png" alt="">
          <div>
            <img class="diamon_icon" src="@/assets/userInfo/card.png" alt="">
            <span class="daimon_title">鑽卡</span>
          </div>
          <p class="title">妖嬌Ａ三蘆小辣椒</p>
        </div>
        <div class="col-3">
          <div class="centerDiv">
            <div class="gold-coin">
              <span>999,999,999</span>
            </div>
            <div class="bonus">
              <span>999,999,999</span>
            </div>
          </div>
        </div>
        <div class="col-3">
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
    backgroundpx() {
      console.log(document.body.scrollTop);
    }
  },
  computed: {
    detect() {
      
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
      padding-right: 5px;
    }
    .centerDiv {
      display: block;
      margin:auto;
      margin-top: 25px;
    }
    #avatar {
      background: url('~@/assets/userInfo/user_bg.png');
      background-size: contain;
      background-repeat: no-repeat;
      height: 80px;
      .avatar_icon {
        height: 65px;
        position: relative;
        top: 6px;
        left: -7px;
      }
      .level_icon {
        height: 30px;
        position: absolute;
        top: 10px;
        left: 74px;
      }
      .title {
        color: white;
        font-size: 12px;
        font-weight: 100;
        position: relative;
        top: -43px;
        left: 58px;
      }
    }
    .gold-coin {
      background: url('~@/assets/userInfo/coin_bg_01.png');
      background-size: contain;
      background-repeat: no-repeat;
      height: 30px;
    }
    .bonus {
      background: url('~@/assets/userInfo/coin_bg_02.png');
      background-size: contain;
      background-repeat: no-repeat;
      height: 30px;
    }
    .gift-coin {
      background: url('~@/assets/userInfo/coin_bg_03.png');
      background-size: contain;
      background-repeat: no-repeat;
      height: 30px;
    }
    .entertain-coin {
      background: url('~@/assets/userInfo/coin_bg_04.png');
      background-size: contain;
      background-repeat: no-repeat;
      height: 30px;
    }
    .diamon_icon {
      height: 15px;
      position: relative;
      left: 95px;
      top: -56px;
    }
    .daimon_title {
      position: relative;
      left: 100px;
      font-size: 14px;
      color: white;
      font-weight: 100;
      top: -55px;
      text-shadow:
      -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;

    }
  }
</style>
