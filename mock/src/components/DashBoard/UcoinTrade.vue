<template>
    <div class="UcoinTrade">
        <div class="container">
            <div class="row">
                <div class="total">
                    <div>
                        <img src="@/assets/icons/U.png" alt="">
                    </div>
                    <span class="text">商城娛樂幣餘額</span>
                    <span>
                        <img class="number" src="@/assets/imgs/number.png" alt="">
                    </span>
                </div>
            </div>
        </div>
        <div id="btnArea" class="container">
            <div class="row">
                <div class="col-6">
                    <div class="buy">
                        <img src="@/assets/icons/icon_sell.png" alt="">
                        我要買
                    </div>
                </div>
                <div class="col-6">
                    <div class="sell">
                        <img src="@/assets/icons/icon_sell.png" alt="">
                        我要賣
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'UcoinTrade',
        components: {
        },
    }
</script>

<style lang="scss" scoped>
    .UcoinTrade {
        background-color: #191738;
        position: relative;
        top: 0px;
        padding: 0 15px;
        .number {
            max-height: 30px;
            position: relative;
            top: 10px;
        }
        .container {   
            .buy {
                height: 60px;
                color: white;
                font-size: 16px;
                font-weight: 100;
                text-align: center;
                padding-top: 15px;
                /* Safari 3-4, iOS 1-3.2, Android 1.6- */
                -webkit-border-radius: 12px; 
                /* Firefox 1-3.6 */
                -moz-border-radius: 12px; 
                /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
                border-radius: 12px; 
                letter-spacing: 1px;
                margin: auto;
                border-radius: 8px;
                background-image: linear-gradient( 0deg, rgb(176,126,15) 0%, rgb(190,140,27) 18%, rgb(199,149,35) 30%, rgb(208,158,43) 46%, rgb(177,128,16) 64%, rgb(176,126,15) 100%);
                background-image: -moz-linear-gradient( 0deg, rgb(176,126,15) 0%, rgb(190,140,27) 18%, rgb(199,149,35) 30%, rgb(208,158,43) 46%, rgb(177,128,16) 64%, rgb(176,126,15) 100%);
                background-image: -webkit-linear-gradient( 0deg, rgb(176,126,15) 0%, rgb(190,140,27) 18%, rgb(199,149,35) 30%, rgb(208,158,43) 46%, rgb(177,128,16) 64%, rgb(176,126,15) 100%);
                background-image: -ms-linear-gradient( 0deg, rgb(176,126,15) 0%, rgb(190,140,27) 18%, rgb(199,149,35) 30%, rgb(208,158,43) 46%, rgb(177,128,16) 64%, rgb(176,126,15) 100%);
                box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.65);
                width: 148px;
                height: 50px;
            }
            .sell {
                height: 60px;
                color: white;
                font-size: 16px;
                font-weight: 100;
                text-align: center;
                padding-top: 15px;
                /* Safari 3-4, iOS 1-3.2, Android 1.6- */
                -webkit-border-radius: 12px; 
                /* Firefox 1-3.6 */
                -moz-border-radius: 12px; 
                /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
                border-radius: 12px; 
                letter-spacing: 1px;
                margin: auto;
                border-radius: 8px;
                background-image: linear-gradient( 0deg, rgb(29,79,102) 0%, rgb(41,91,113) 18%, rgb(50,100,120) 30%, rgb(58,108,127) 46%, rgb(32,82,105) 64%, rgb(29,79,102) 100%);
                background-image: -moz-linear-gradient( 0deg, rgb(29,79,102) 0%, rgb(41,91,113) 18%, rgb(50,100,120) 30%, rgb(58,108,127) 46%, rgb(32,82,105) 64%, rgb(29,79,102) 100%);
                background-image: -webkit-linear-gradient( 0deg, rgb(29,79,102) 0%, rgb(41,91,113) 18%, rgb(50,100,120) 30%, rgb(58,108,127) 46%, rgb(32,82,105) 64%, rgb(29,79,102) 100%);
                background-image: -ms-linear-gradient( 0deg, rgb(29,79,102) 0%, rgb(41,91,113) 18%, rgb(50,100,120) 30%, rgb(58,108,127) 46%, rgb(32,82,105) 64%, rgb(29,79,102) 100%);
                box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.65);
                width: 148px;
                height: 50px;
            }
        }
        .total {
            border-style: solid;
            border-width: 1px;
            border-color: rgb(79, 169, 177);
            border-radius: 10px;
            box-shadow: inset 0px 0px 25px 0px #4FA9B1;
            -webkit-box-shadow: inset 0px 0px 25px 0px #4FA9B1;
            -moz-box-shadow: inset 0px 0px 25px 0px #4FA9B1;
            -o-box-shadow: inset 0px 0px 25px 0px #4FA9B1;
            position: relative;
            top: 30px;
            width: 100%;
            height: 100px;
            .text {
                color: #4fa9b1;
                font-size: 1rem;
                margin: auto;
                display: block;
                width: 70%;
                float: right;
                text-align: center;
                padding: 5px;
            }
            div {
                width: 30%;
                margin: auto;
                float: left;
            }
            img {
                display: block;
                margin: auto;
                height: 60px;
                margin-top: 20px;
            }
        }
        #btnArea {
            margin-top: 50px;
            img {
                height: 25px;
                width: 25px;
                margin-right: 15px;
                position: relative;
                top: -5px;
            }
        }
    }
</style>
