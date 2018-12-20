<template>
    <div class="MiddleSlider">
        <div class="container">
            <div class="more">玩更多 ></div>
            <h2><span>最新上線遊戲</span></h2>
            <div class="row">
                <div class="slider">
                    <carousel :per-page="2" :mouse-drag="false" :autoplay="false" :speed="300" :loop="true" :paginationSize="0">
                        <slide>
                            <img style="margin-left:15%;" src="@/assets/icons/5pk.png" alt="" class="img-responsive">
                        </slide>
                        <slide>
                            <img src="@/assets/icons/routelette.png" alt="" class="img-responsive">
                        </slide>
                        <slide>
                            <img style="margin-left:15%;" src="@/assets/icons/routelette.png" alt="" class="img-responsive">
                        </slide>
                        <slide>
                            <img src="@/assets/icons/routelette.png" alt="" class="img-responsive">
                        </slide>
                        <slide>
                            <img style="margin-left:15%;" src="@/assets/icons/routelette.png" alt="" class="img-responsive">
                        </slide>
                        <slide>
                            <img src="@/assets/icons/routelette.png" alt="" class="img-responsive">
                        </slide>
                        <slide>
                            <img style="margin-left:15%;" src="@/assets/icons/routelette.png" alt="" class="img-responsive">
                        </slide>
                        <slide>
                            <img src="@/assets/icons/routelette.png" alt="" class="img-responsive">
                        </slide>
                    </carousel>
                </div>    
            </div>
        </div>
    </div>
</template>
<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: 'MiddleSlider',
        components: {
            Carousel,
            Slide
        },
    }
</script>

<style lang="scss" scoped>
    .MiddleSlider {
        background: url('~@/assets/imgs/bg.png');
        background-size: contain;
        width: 100%;
        height: 235px;
        .more {
            position: absolute;
            color: white;
            font-size: 0.8rem;
            font-weight: 300;
            right: 17px;
            padding-top: 10px;
            letter-spacing: 1px;
        }
        img {
            height: 150px;
            width: 150px;
        }
        h2 {
            width: 100%; 
            text-align: center; 
            border-bottom: 1px solid white; 
            line-height: 0.1em;
            margin: 10px 0 20px; 
            color: white;
            position: relative;
            top: 20px;
            padding-top: 5px;
        }
        h2 span { 
            background:#283068; 
            padding:0 10px; 
            font-size: 1rem;
            position: relative;
            top: -3px;
        }
        .slider {
            position: relative;
            top: 28px;
            max-width: 100%;
        }
    }
</style>
