<script>
    export default {
        data() {
            return {
              playIsActive: false,  
            }
        },
        methods: {
            changePlayStatus() {
                this.playIsActive = !this.playIsActive
            },
            scrollWin() {
                let yDistance = window.screen.height * 0.65
                console.log(yDistance)
                window.scrollBy(0, -yDistance);
            },
        }
    }
</script>

<template>
    <section class="video-player" 
        @click.stop="changePlayStatus()"
    >
        <div class="containre-fluid">
            <figure>
                <img src="/img/h1-img-04.jpg">
            </figure>
            <div class="play-icon">
                <font-awesome-icon 
                    icon="fa-solid fa-play" 
                    v-if="!playIsActive"
                    @click.stop="changePlayStatus()"
                />
                <img 
                    :class="{'active' : playIsActive}"
                    class="loader" 
                    src="/img/ajax-loader.gif"
                >
            </div>
        </div>
        <div class="scroll-icon" @click.stop="scrollWin()">
            <font-awesome-icon icon="fa-solid fa-arrow-up-long" />
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
            .loader {
                width: 30px;
                display: none;
                &.active {
                    display: block;
                }
            }
        }
        .scroll-icon {
            position: absolute;
            right: 2%;
            bottom: 5%;
        }
    }

</style>
 