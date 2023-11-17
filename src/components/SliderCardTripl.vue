<script>
export default {
    data() {
        return {
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
            console.log("1",this.firstIndex, "2",this.secondIndex,"3", this.thirdIndex)
        },
        prevImage(){
            if(this.firstIndex === 0){
                this.firstIndex = this.slides.length -1; 
            } else {
                this.firstIndex--;
            }
        },
        complexEmit() {
            const index = this.firstIndex;
                this.$emit('sendIndex', index)
        },
        isActive(array, index) {
            const lengthArray = array.length;
            let isActive;
            // console.log(lengthArray, index)
            if(lengthArray < 4){
                return isActive = true
            } else if (index === this.firstIndex || index === this.secondIndex || index === this.thirdIndex ) {
                return isActive = true
            }  else {
                // console.log(isActive)
                return isActive = false
            }
        },
        getOrder(index) {
            let order;
            if(index = this.firstIndex){
                order = 1;
                return order;
            } else if (index = this.secondIndex){
                order = 2;
                return order;
            } else if (index = this.thirdIndex){
                order = 3;
                return order;
            }
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
                        :style="{ 'order': getOrder(index) }"
                        >
                        <!-- CARD -->
                        <div class="card card-news">
                            <div class="card-image">
                                <figure>
                                    <img :src="card.src">
                                    <span class="badge">
                                        <span></span>
                                        {{ returnBadge(card.badge) }}
                                    </span>
                                </figure>
                            </div>
                            <div class="card-body">
                                <h3 class="title">{{ card.title }}</h3>
                                <p class="text">{{ card.text }}</p>
                                <p class="other">
                                    <span>{{ card.date }}</span>
                                    <span>{{ card.persone }}</span>
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
                .other span{
                    order: 1;
                    display: inline-block;
                    font-size: $f-s-4;
                    line-height:  20px;
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