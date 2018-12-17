<template>
  <div class="UserInfo">
    <div class="container">
      <div class="row">
        <div id="avatar" class="col-6">
        </div>
        <div class="col-3">
          <div class="centerDiv">
            <div class="gold-coin">
              <span>99999</span>
            </div>
            <div class="bonus">
              <span>99999</span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="centerDiv">
            <div class="entertain-coin">
                <span>99999</span>
            </div>
            <div class="gift-coin">
                <span>99999</span>
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
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .UserInfo {
    position:relative;
    top: -24px;
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
      margin-top: 20px;
    }
    #avatar {
      background: url('~@/assets/userInfo/user_bg.png');
      background-size: contain;
      background-repeat: no-repeat;
      height: 80px;
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
  }
</style>
