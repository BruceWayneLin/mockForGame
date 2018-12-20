<template>
    <div class="News">
        <div class="content">
            <div class="title">
                <h2>最新消息</h2>
            </div>
            <div class="newsItem">
                <h3>網站即將上線</h3>
                <p>2018/10/18</p>
            </div>
            <div class="newsItem">
                <h3>網站即將上線</h3>
                <p>2018/11/18</p>
            </div>
            <div class="newsItem">
                <h3>網站即將上線</h3>
                <p>2018/10/18</p>
            </div>
            <div class="newsItem">
                <h3>網站即將上線</h3>
                <p>2018/11/18</p>
            </div>
            <div class="newsItem">
                <h3>網站即將上線</h3>
                <p>2018/11/18</p>
            </div>
            <div class="newsItem">
                <div class="lastNews">
                    <h3>網站即將上線</h3>
                    <p>2018/12/18</p>
                </div>
                <div class="moreDiv">
                    <img class="more" src="@/assets/icons/navibarIcons/more.png"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'News',
        components: {
        },
    }
</script>

<style lang="scss" scoped>
    .News {
        background: url('~@/assets/imgs/bg.png');
        background-size: contain;
        width: 100%;
       .content {
            background-color: #191639;
            margin: 10px;
            /* Safari 3-4, iOS 1-3.2, Android 1.6- */
            -webkit-border-radius: 12px; 
            /* Firefox 1-3.6 */
            -moz-border-radius: 12px; 
            /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
            border-radius: 12px; 
            letter-spacing: 1px;
            text-align: center;
            .title {
                background-color: #4482bc;
                padding-top: 10px;
                /* Safari 3-4, iOS 1-3.2, Android 1.6- */
                -webkit-border-radius: 12px 12px 0px 0px; 
                /* Firefox 1-3.6 */
                -moz-border-radius: 12px 12px 0px 0px; 
                /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
                border-radius: 12px 12px 0px 0px; 
            }
            .newsItem {
                margin: 7px 0px;
                h3 {
                    font-size: 1rem;
                    font-weight: 300;
                }
                .more {
                    height: 3vh;
                }
                .moreDiv {
                    display: inline-block;
                    float: right;
                    padding-right: 0px;
                }
                .lastNews {
                    padding: 0px;
                    display: inline-block;
                    float: left;
                }
            }
            div {
                padding: 0px 15px;
                height: 40px;
                h3 {
                    color: white;
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-align: left;
                    margin-bottom: 0px;
                }
                p {
                    color: white;
                    font-size: 12px;
                    font-weight: 100;
                    text-align: left;
                }
            }
            h2 {
                color: white;
                font-size: 1rem;
                font-weight: 800;
            }
       } 
    }
</style>
