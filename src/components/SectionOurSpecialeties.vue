<script>
import Card from './Card.vue';
import SliderMini from './SliderMini.vue';
import VisitCard from './VisitCard.vue';
export default {
    data() {
        return {
            cards: [
                {
                    img: '/svg/svg-0.svg',
                    title: "Knowing",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                },
                {
                    img: '/svg/svg-1.svg',
                    title: "Selling",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                },
                {
                    img: '/svg/svg-2.svg',
                    title: "Learning",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                },
                {
                    img: '/svg/svg-3.svg',
                    title: "Contact",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                }
            ],
            slides: [
                {
                    name: "Jason Bikford",
                    position: "Founder and Executive Director",
                    src: "/img/h1-img-01.jpg",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis minima dicta ex consequatur doloremque!"
                },
                {
                    name: "Shiyong Ipsum",
                    position: "Analyst",
                    src: "/img/h1-img-02.jpg",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis minima dicta ex consequatur doloremque!"
                },
                {
                    name: "Roberto Lorem",
                    position: "Project Manager",
                    src: "/img/h1-img-03.jpg",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis minima dicta ex consequatur doloremque!"
                }
            ],
            currentIndex: 0
        }       
    },
    components: {
        Card,
        SliderMini,
        VisitCard,
    },
    methods: {
        getCurrentIndex(index) {
            console.log("index to come",index)
            this.currentIndex = index;
            console.log("index to save",this.currentIndex)
        }
    }
}
</script>

<template>
    <section class="OurSpecialeties"> 
        <!-- SECTION DESCRIPTION -->
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="bg-box">
                        <div class="container-lg">
                            <div class="row">
                                <div class="col">
                                    <div class="section-description">
                                        <h2 class="title">Our specialeties<span class="dot"></span></h2>
                                        <div class="text">Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col" v-for="card in cards">
                                    <Card :card="card"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- PREVIEW SPECIALETES -->
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="bg-box-2">
                        <figure class="bg">
                            <img src="/svg/svg-4.svg">
                        </figure>
                        <div class="container-lg">
                            <div class="row">
                                <div class="col">
                                    <SliderMini :slides="slides"
                                    @sendIndex="getCurrentIndex"
                                    />
                                </div>
                                <div class="col">
                                    <VisitCard 
                                        :slideIndex="currentIndex"
                                        :slides="slides"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;
  
    .container-xxl {
        position: relative;
        z-index: 1;
    }
    .bg-box {
        background-color: $bg-white-1;
        padding: 130px 0px;
        & .row {
            margin-bottom: 70px;
        }
    }
    // SECTION DESCRIPTION 
    .row:has(> .col .section-description) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        .title {
            font-size: $f-st-2;
            line-height:  $f-st-2;
            margin-bottom: 20px;
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
                right: -4%;
                transform: translate(-50%, -50%);
            }
        }
        .text {
            margin-bottom: 30px;
        }
    }
    .row:has(> .col .card) {
        justify-content: space-around;
    }

    .bg-box .row:first-child::after {
      @include after-line;
    }

    // PREVIEW SPECIALETES
    .col:has(> .bg-box-2) {
        flex-grow: 1;
        display: relative;
       .bg-box-2 {
        padding: 130px 0px;
        .bg {
            position: absolute;
            right: 20px;
            width: 27%;
            top: 40px;
        }
           .row {
                position: relative;
                .col:has(> .visit-card) {
                    position: absolute;
                    right: 0;
                    align-self: center;
                    width: 50%;
                    height: 75%;
                    background-color: white;
                    display: flex;
                    align-items: center;
                }
            }
       }
    }
</style>