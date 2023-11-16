<script>
import Card from './Card.vue';

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
            ]
        }       
    },
    components: {
        Card,
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
    }
    .row:has(> .col .section-description) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-bottom: 70px;
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


</style>