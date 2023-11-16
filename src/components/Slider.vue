<script>
export default {
    data() {
        return {
            slides: [
                {
                    src: "/img/rev-slider-main-home-img-03.jpg",
                    title: "Our Team",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolores quidem ea iusto, beatae necessitatibus obcaecati alias minima. Ut, nesciunt.",
                    textBtn1: "Read More",
                    textBtn2: "Purchase"
                },
                {
                    src: "/img/rev-slider-main-home-img-02.png",
                    title: "Our Team",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolores quidem ea iusto, beatae necessitatibus obcaecati alias minima. Ut, nesciunt.",
                    textBtn1: "Read More",
                    textBtn2: "Purchase"
                },
            ],
            currentIndex: 0,
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
    }
}
</script>

<template>
    <div class="container-fluid">
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
                    <!-- SLIDE CONTENT -->
                    <div class="slide-content">
                        <div class="container-xxl">
                            <div class="row">
                                <!-- ARROW LEFT -->
                                <div class="col">
                                    <div class="arrow-left" @click="prevImage()">
                                        <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
                                    </div>
                                </div>
                                <!-- CONTENT -->
                                <div class="col content-box">
                                    <div class="container-lg">
                                        <!-- TEXT-CONTENT -->
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="content">
                                                    <h1 class="title">{{ slide.title }}<span class="dot"></span></h1>
                                                    <p class="text">{{ slide.text }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- BUTTON -->
                                        <div class="row">
                                            <div class="col">
                                                <div class="btn btn-1">
                                                    <div class="text">
                                                        {{ slide.textBtn1 }}
                                                    </div>
                                                    <div class="arrow">
                                                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="btn btn-2">
                                                    <div class="text">
                                                        {{ slide.textBtn2 }}
                                                    </div>
                                                    <div class="arrow">
                                                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <!-- ARROW RIGHT -->
                                <div class="col">
                                    <div class="arrow-right" @click="nextImage()">
                                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                                    </div>
                                </div>
                            </div>
                        </div>
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
        .slide-content {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            .container-xxl {
                height: 100%;
                .row {
                    height: 100%;
                    align-items: center;
                    flex-wrap: nowrap;
                    .col.content-box {
                        flex-grow: 1;
                        .content {
                            margin-bottom: 40px;
                        }
                        h1.title {
                            font-size: $f-st-1;
                            line-height:  $f-st-1;
                            margin-bottom: 40px;
                            position: relative;
                            display: inline-block;
                            .dot {
                                height: 12px;
                                width: 12px;
                                display: inline-block;
                                background-color: $f-orange-1;
                                border-radius: 999px;
                                position: absolute;
                                bottom: 7px;
                                right: -16px;
                            }
                        }
                        .btn {
                            @include btn;
                            &.btn-1:hover {
                                .arrow {
                                    transform: translateX(-13px);
                                    border-color: transparent;
                                }
                            }
                            &.btn-2:hover {
                                .arrow {
                                    transform: translateX(-13px);
                                    border-color: transparent;
                                }
                            }
                        }
                        .btn.btn-1 {
                            background-color: $bg-white-1;
                            color: $f-black-1;
                            .arrow {
                                border-left: 1px solid $border-black-1;
                            }
                        }
                        .btn.btn-2 {
                            background-color: $bg-orange;
                            color: $f-white-1;
                            .arrow {
                                border-left: 1px solid $border-white-1;
                            }
                        }
                    }
                }
            }
        }
    }
</style>