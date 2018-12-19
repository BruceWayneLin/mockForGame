<template>
    <div class="slider">
        <div class="marquee">
        <img src="@/assets/imgs/volume.png">
        <MarqueeTips id="marTxt" content="親愛的娛樂家會員您好:  本公司網站系統將於6/19 中午12:00 下午17:00 進行系統轉移維護 (5 HR)  煩請各位會員  避開此時維護時間使用  謝謝各位配合。" :speed="15"></MarqueeTips>
        </div>
        <carousel :per-page="1" :mouse-drag="false" :speed="300" :loop="true" :paginationPadding="0" :paginationSize="0">
            <slide>
                <img src="@/assets/imgs/banner.png" alt="" class="img-responsive">
            </slide>
            <slide>
                <img src="@/assets/imgs/banner.png" alt="" class="img-responsive">
            </slide>
            <slide>
                <img src="@/assets/imgs/banner.png" alt="" class="img-responsive">
            </slide>
        </carousel>
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
            bottom: -23px;
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
        img {
            height: 167px;
        }
    }
</style>
