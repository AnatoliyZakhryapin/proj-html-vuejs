<script>
export default {
    data() {
        return {
            currentIndex: 0,
            firstIndex: 0,
            secondIndex: 1,
            thirdIndex: 2,
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

            if(this.firstIndex === this.slides.length - 1){
                this.firstIndex = 0;
            } else {
                this.firstIndex++;
            }

            if(this.secondIndex === this.slides.length - 1){
                this.secondIndex = 0;
            } else {
                this.secondIndex++;
            }

            if(this.thirdIndex === this.slides.length - 1){
                this.thirdIndex = 0;
            } else {
                this.thirdIndex++
            }

            console.log(this.currentIndex)
            console.log("a",this.firstIndex, "b",this.secondIndex,"c", this.thirdIndex)
        },
        prevImage(){
            if(this.currentIndex === 0){
                this.currentIndex = this.slides.length - 1;
            } else {
                this.currentIndex--;
            }

            if(this.firstIndex === 0){
                this.firstIndex = this.slides.length - 1;
            } else {
                this.firstIndex--;
            }

            if(this.secondIndex === 0){
                this.secondIndex = this.slides.length - 1;
            } else {
                this.secondIndex--;
            }

            if(this.thirdIndex === 0){
                this.thirdIndex = this.slides.length - 1;
            } else {
                this.thirdIndex--;
            }

            console.log("prew",this.currentIndex)
            console.log("prew","a",this.firstIndex, "b",this.secondIndex,"c", this.thirdIndex)
        },
        complexEmit() {
            const index = this.firstIndex;
                this.$emit('sendIndex', index)
        },
        isActive(array, index) {
            const lengthArray = array.length;
            let isActive;
            if(lengthArray < 4){
                return isActive = true
            } else if (index === this.firstIndex || index === this.secondIndex || index === this.thirdIndex ) {
                return isActive = true
            } else {
                return isActive = false
            }
        },
        getOrder(array, index) {
            const arrayLength = array.length
            let order;
            if(index === this.currentIndex) {
                order = 1
            } else if (index === this.currentIndex + 1 ) {
                order = 2
            } else if (index === this.currentIndex + 2) {
                order = 3
            } else if (index === 0 && this.currentIndex === arrayLength - 2) {
                order = arrayLength
            } else if (index === 1 && this.currentIndex === arrayLength - 1) {
                order = this.currentIndex
            } else if ( index === 0 && this.currentIndex === arrayLength - 1) {
                order = this.currentIndex - 1
            }
            return order;
        },
        returnBadge(badgeName) {
            let text= "";
            badgeName.forEach(element => {
                text += element + ' ' 
            });
            return text
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
                        :class="isActive(slides, index) ? 'active' : ''"
                        v-if="isActive(slides, index)"
                        :style="{ 'order': getOrder(slides,index) }"
                        >
                        <!-- CARD -->
                        <div class="card card-news">
                            <div class="card-image">
                                <figure>
                                    <img :src="card.src">
                                    <span class="badge">
                                        <span><font-awesome-icon icon="fa-solid fa-tag" /></span>
                                        {{ returnBadge(card.badge) }}
                                    </span>
                                </figure>
                            </div>
                            <div class="card-body">
                                <h3 class="title">{{ card.title }}</h3>
                                <p class="text">{{ card.text }}</p>
                                <p class="other">
                                    <p><span><font-awesome-icon icon="fa-regular fa-clock" /></span>{{ card.date }}</p>
                                    <p><span><font-awesome-icon icon="fa-regular fa-user" /></span>{{ card.persone }}</p>
                                </p>
                                <div class="read-more">
                                    <a href=#>Read more</a>
                                </div>
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

    .slides-wrapper {
        display: flex;
        gap: 20px;
        .slide {
            width: calc(100% * 4 / 12);
            display: none;
            &.active {
                display: block;
            }
            .card-image {
                position: relative;
                .badge {
                    color: $f-white-1;
                    font-size: $f-s-4;
                    font-weight: 200;
                    background-color: $bg-orange;
                    padding: 10px;
                    position: absolute;
                    bottom: 0%;
                    right: 8%;
                    transform: translateY(50%);
                }
            } 
            .card-body {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                text-align: left;
                margin-top: 15px;
                h3.title {
                    order: 2;
                    font-size: $f-st-3;
                    line-height:  $f-st-3;
                    margin-bottom: 20px;
                }
                .text {
                    order: 3;
                    font-size: $f-s-4;
                    line-height:  20px;
                    margin-bottom: 20px;
                }
                .other {
                    display: flex;
                    gap: 10px;
                    & *{
                        order: 1;
                        font-size: $f-s-4;
                        line-height:  20px;
                    }
                    span {
                        margin-right: 5px;
                        color: $f-orange-1;
                    }
                }
                .read-more {
                    order: 4;
                    font-weight: bold;
                    text-transform: uppercase;
                    a {
                        font-size:  $f-s-4;
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