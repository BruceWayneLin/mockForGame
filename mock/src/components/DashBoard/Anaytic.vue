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
        margin-top: 170px;
        .chart {
            background: url('~@/assets/imgs/chart.jpg');
            background-size: cover;
            height: 175px;
            width: 100%;
            background-repeat: no-repeat;
        }
    }
</style>
