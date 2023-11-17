<script>
    export default {
        data() {
            return {
                
            }
        }
    }
</script>

<template>
    <section class="video-player">
        <div class="containre-fluid">
            <figure>
                <img src="/img/h1-img-04.jpg">
            </figure>
            <div class="play-icon">
                <font-awesome-icon icon="fa-solid fa-play" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;

    .video-player{
        position: relative;
        .play-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%); 
            svg {
                color: $f-white-2;
                font-size: 30px;  
            } 
        }
    }

</style>
 