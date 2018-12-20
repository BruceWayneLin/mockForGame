<template>
    <div class="slider">
        <div class="marquee">
        <img src="@/assets/imgs/volume.png">
        <MarqueeTips id="marTxt" content="親愛的娛樂家會員您好:  本公司網站系統將於6/19 中午12:00 下午17:00 進行系統轉移維護 (5 HR)  煩請各位會員  避開此時維護時間使用  謝謝各位配合。" :speed="15"></MarqueeTips>
        </div>
        <div class="slide">
            <div class="pageNa">1/3</div>
            <img src="@/assets/imgs/left.png" alt="" class="prev">
            <img src="@/assets/imgs/right.png" alt="" class="next">
            <div class="item">
                <img src="@/assets/imgs/banner.png" alt="" class="img-responsive">
            </div>
            <!-- <div class="item">
                <img src="@/assets/imgs/banner.png" alt="" class="img-responsive">
            </div>
            <div class="item">
                <img src="@/assets/imgs/banner.png" alt="" class="img-responsive">
            </div> -->
        </div>
    </div>
</template>
<script>
    import { Carousel, Slide } from 'vue-carousel';
    import MarqueeTips from 'vue-marquee-tips'

    export default {
        name: 'Slider',
        components: {
            Carousel,
            Slide,
            MarqueeTips
        },
    }
</script>

<style lang="scss" scoped>
    .slider {
        top: 115px;
        .marquee {
            color: white;
            width: 100%;
            position: absolute;
            padding: 2px;
            margin: 5px auto;
            z-index: 999;
            height: 20px;
            bottom: -35px;
            background-image: -moz-linear-gradient( -90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 1%, rgba(0,0,0,0.70196) 4%, rgba(0,0,0,0.7) 86%, rgba(0,0,0,0.70196) 96%, rgba(0,0,0,0.35) 99%, rgba(0,0,0,0) 100%);
            background-image: -webkit-linear-gradient( -90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 1%, rgba(0,0,0,0.70196) 4%, rgba(0,0,0,0.7) 86%, rgba(0,0,0,0.70196) 96%, rgba(0,0,0,0.35) 99%, rgba(0,0,0,0) 100%);
            background-image: -ms-linear-gradient( -90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 1%, rgba(0,0,0,0.70196) 4%, rgba(0,0,0,0.7) 86%, rgba(0,0,0,0.70196) 96%, rgba(0,0,0,0.35) 99%, rgba(0,0,0,0) 100%);
            background-image: linear-gradient( -90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 1%, rgba(0,0,0,0.70196) 4%, rgba(0,0,0,0.7) 86%, rgba(0,0,0,0.70196) 96%, rgba(0,0,0,0.35) 99%, rgba(0,0,0,0) 100%);
            p {
                width: 100%;
                margin-left: 23px;
                font-weight: 100;
                font-size: 12px;
            }
            img {
                height: 20px;
                width: 20px;
                position: absolute;
                bottom: 0;
            }
        }
        height: 150px;
        position: relative;
        z-index: 999;
        width: 100%;
        left: 0;
        .prev {
            position: absolute;
            z-index: 999;
            left:0;
            top: 50%;
            height: 30px;
            width: 30px;
        }
        .next {
            position: absolute;
            z-index: 999;
            right:0;
            top: 50%;
            height: 30px;
            width: 30px;
        }
        .item {
            display: block;
            float: left;
            img {
                height: 180px;
            }
        }
        .pageNa {
            color: white;
            font-size: 12px;
            background: #00000096;
            position: absolute;
            right: 20px;
            bottom: 0px;
            padding: 0px 5px;
             /* Safari 3-4, iOS 1-3.2, Android 1.6- */
            -webkit-border-radius: 25px; 

            /* Firefox 1-3.6 */
            -moz-border-radius: 25px; 
            
            /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
            border-radius: 25px; 
        }
    }
</style>
