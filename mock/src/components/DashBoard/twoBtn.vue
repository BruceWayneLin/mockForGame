<template>
    <div class="twoBtn">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="btnOne pull-left"></div>
                </div>
                <div class="col-6">
                    <div class="btnTwo pull-right"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'twoBtn',
        components: {
        },
    }
</script>

<style lang="scss" scoped>
    .twoBtn {
         background: url('~@/assets/imgs/bg.png');
        background-size: contain;
        width: 100%;
        height: 80px;

    }
</style>
