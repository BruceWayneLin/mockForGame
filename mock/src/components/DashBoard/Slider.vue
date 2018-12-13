<template>
    <div class="slider">
        <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
            <slide>
            Slide 1 Content
            </slide>
            <slide>
            Slide 2 Content
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
        background: white;
    }
</style>
