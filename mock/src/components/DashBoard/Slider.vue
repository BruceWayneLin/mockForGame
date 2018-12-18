<template>
    <div class="slider">
        <carousel :per-page="1" :mouse-drag="false">
            <slide>
                <img src="@/assets/imgs/banner.png" alt="" class="img-responsive">
            </slide>
        </carousel>
    </div>
</template>
<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: 'Slider',
        components: {
            Carousel,
            Slide
        },
    }
</script>

<style lang="scss" scoped>
    .slider {
        height: 150px;
        position: absolute;
        z-index: 999;
        top: 120px;
        width: 100%;
        left: 0;
        background: white;
        img {
            height: 37%;
        }
    }
</style>
