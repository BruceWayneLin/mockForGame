<template>
    <div class="twoBtn">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="btnOne pull-left"></div>
                </div>
                <div class="col-6">
                    <div class="btnTwo"></div>
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
        margin-top: 30px;
        .btnOne {
            background: url('~@/assets/icons/navibarIcons/btn-01.png');
            background-size: contain;
            background-repeat: no-repeat;
            width: 80px;
            height: 80px;
            position: fixed;
            bottom: 15px;
            z-index: 1000;
        }
        .btnTwo {
            background: url('~@/assets/icons/navibarIcons/sign-04.png');
            background-size: contain;
            background-repeat: no-repeat;
            width: 80px;
            height: 80px;
            display: block;
            position: fixed;
            bottom: 15px;
            z-index: 1000;
            right: 3%;
        }
    }
</style>
