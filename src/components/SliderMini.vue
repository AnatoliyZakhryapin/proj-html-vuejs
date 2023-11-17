<script>
export default {
    data() {
        return {
            currentIndex: 0,
        }
    },
    props: {
        slides: {
            type: Array,
            required: true
        }
    },
    methods: {
        nextImage(){
            if(this.currentIndex === this.slides.length - 1){
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        },
        prevImage(){
            if(this.currentIndex === 0){
                this.currentIndex = this.slides.length -1; 
            } else {
                this.currentIndex--;
            }
        },
        complexEmit() {
            const index = this.currentIndex;
                this.$emit('sendIndex', index)
        }
    }
}
</script>

<template>
    <div class="carousel">
        <div class="slides-wrapper">
            <!-- SLIDES -->
            <div 
                class="slide" 
                :class="currentIndex === index ? 'active' : ''"
                v-for="(slide, index) in slides">
                <!-- IMAGE -->
                <figure>
                    <img :src="slide.src">
                </figure>
                <!-- SLIDE NAVIGATION -->
                <div class="slide-navigation">
                    <!-- ARROW LEFT -->
                    <div class="btn arrow-left" @click="prevImage(), complexEmit()">
                        <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
                    </div>
                    <!-- ARROW RIGHT -->
                    <div class="btn arrow-right" @click="nextImage(), complexEmit()">
                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;
  
    .slide {
        position: relative;
        display: none;
        &.active {
            display: block;
        }
        h1.title {
            font-size: $f-st-1;
            line-height:  $f-st-1;
            margin-bottom: 40px;
            position: relative;
            display: inline-block;
            .dot {
                height: 20%;
                aspect-ratio: 1;
                display: inline-block;
                background-color: #FF4612;
                border-radius: 999px;
                position: absolute;
                bottom: 0%;
                right: -7%;
                transform: translate(-50%, -50%);
            }
        }
        .slide-navigation {
            position: absolute; 
            bottom: 0;
            display: flex;
        }
        .btn {
            background-color: $bg-orange;
            @include btn;
            color: $f-white-1;
           &.arrow-left {
            padding: 30px 10px 30px 20px;
           }
           &.arrow-right{
            padding: 30px 20px 30px 10px;
           }
         }
    }
</style>