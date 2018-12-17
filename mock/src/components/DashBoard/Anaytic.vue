<template>
    <div class="Anaytic">
        <div class="chart">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Anaytic',
        components: {
        },
    }
</script>

<style lang="scss" scoped>
    .Anaytic {
        position: relative;
        top: 175px;
        z-index: 99;
        .chart {
            background: url('~@/assets/imgs/chart.jpg');
            background-size: contain;
            height: 175px;
            width: 100%;
            background-repeat: no-repeat;
        }
    }
</style>
