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
        height: 80px;
        position: absolute;
        .btnOne {
            background: url('~@/assets/icons/navibarIcons/announce.png');
            background-size: contain;
            background-repeat: no-repeat;
            width: 50px;
            height: 50px;
            position: fixed;
            bottom: 15px;
            z-index: 1000;
        }
        .btnTwo {
            background: url('~@/assets/icons/navibarIcons/sign-04.png');
            background-size: contain;
            background-repeat: no-repeat;
            width: 50px;
            height: 50px;
            display: block;
            position: fixed;
            bottom: 15px;
            z-index: 1000;
            right: 15px;
        }
    }
</style>
