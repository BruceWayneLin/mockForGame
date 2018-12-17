<template>
    <div class="MiddleSlider">
        <div class="container">
            <h2><span>最新上線遊戲</span></h2>
            <div class="row">
                <carousel :per-page="1" :mouse-drag="false">
                    <slide>
                        <img src="@/assets/icons/5pk.png" alt="" class="img-responsive">
                    </slide>
                    <slide>
                        <img src="@/assets/icons/routelette.png" alt="" class="img-responsive">
                    </slide>
                </carousel>
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
        height: 500px;
        .VueCarousel-slide {
            width: 30%;
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

        }
        h2 span { 
            background:#283068; 
            padding:0 10px; 
            font-size: 1rem;
            position: relative;
            top: -3px;
        }
    }
</style>
