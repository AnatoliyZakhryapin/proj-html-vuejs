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
        counter(){
            let n = this.currentIndex + 1
            n = "0" + n;
            return n
        },
        getTotalCounter(array) {
            let n = array.length
            n = "0" + n;
            return n
        },
        getProgressLength(array){
            const total = array.length 
            let progress = ((this.currentIndex + 1)/ total) * 100
            return progress
        }
    },
    
}
</script>

<template>
    <div class="carousel">
        <div class="container-lg">
            <div class="slides-wrapper">
                <!-- SLIDES -->
                <template v-for="(card, index) in slides">
                    <div 
                        class="slide" 
                        :class="currentIndex === index ? 'active' : ''"
                        >
                        <!-- CARD -->
                        <div class="card card-testimonials">
                            <div class="card-image">
                                <figure>
                                    <img :src="card.src">
                                </figure>
                            </div>
                            <div class="card-body">
                                <h3 class="title">{{ card.name }}</h3>
                                <p class="text">{{ card.text }}</p>
                            </div>
                            <div class="counter">
                                <div>{{ counter() }}</div>
                                <div class="progress-bar">
                                    <div class="progress" :style="{ 'width': getProgressLength(slides) + '%' }"></div>
                                </div>
                                <div>{{ getTotalCounter(slides) }}</div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
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
</template>

<style lang="scss" scoped>
    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;

    .carousel {
        color: $f-white-1;
    }
    .slides-wrapper {
        .slide {
            display: none;
            .card-testimonials {
                max-width: 700px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 25px;
            }
            &.active {
                display: block;
            }
            .card-image {
                position: relative;
                width: 130px;
            } 
            .card-body {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                margin-top: 20px;
                margin-bottom: 30px;
                text-align: center;
                h3.title {
                    color: $f-white-2;
                    font-size: $f-st-3;
                    line-height:  $f-st-3;
                    margin-bottom: 20px;
                }
                .text {
                    color: $f-white-2;
                    font-size: $f-s-1;
                    line-height:  28px;
                    margin-bottom: 20px;
                }
            }
            .counter {
                display: flex;
                align-items: center;
                width: 200px;
                gap: 10px;
                .progress-bar {
                    width: 100%;
                    height: 3px;
                    background-color:  $f-gray-2;
                    .progress {
                        height: 3px;
                        background-color:  $f-white-1;
                    }
                }
            }
        }
    }
  
    .slide-navigation {   
        display: flex;
        .arrow-left {
            left: 0;
            bottom: 50%;
            position: absolute; 
        }
        .arrow-right {
            right: 0;
            bottom: 50%;
            position: absolute; 
        }
    }
</style>