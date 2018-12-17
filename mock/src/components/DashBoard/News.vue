<template>
    <div class="News">
        <div class="content">
            <div class="title">
                <h2>最新消息</h2>
            </div>
            <div>
                <h3>網站即將上線</h3>
                <p>2018/10/18</p>
            </div>
            <div>
                <h3>網站即將上線</h3>
                <p>2018/11/18</p>
            </div>
            <div>
                <h3>網站即將上線</h3>
                <p>2018/12/18</p>
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
       .content {
            /* Safari 3-4, iOS 1-3.2, Android 1.6- */
            -webkit-border-radius: 12px; 
            /* Firefox 1-3.6 */
            -moz-border-radius: 12px; 
            /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
            border-radius: 12px; 
            letter-spacing: 1px;
            border: 1px solid white;
            text-align: center;
            div {
                padding: 0px 15px;
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
                    font-weight: 600;
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
