<script>
import SliderCardOne from './SliderCardOne.vue';

    export default {
    data() {
        return {
            cardsTestimonials: [
                {
                    src: "/img/h3-img-04.png",
                    name: "Cynthia Clark",
                    text: "'    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur non perspiciatis laboriosam! Provident voluptatum sit ad vitae, ex veritatis ducimus.'"
                },
                {
                    src: "/img/h3-img-07.png",
                    name: "Alexia Contemplacion",
                    text: "'    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur non perspiciatis laboriosam! Provident voluptatum sit ad vitae, ex veritatis ducimus.'"
                },
                {
                    src: "/img/h3-img-08.png",
                    name: "Federica Morini",
                    text: "'    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur non perspiciatis laboriosam! Provident voluptatum sit ad vitae, ex veritatis ducimus.'"
                },
            ]
        };
    },
    components: { SliderCardOne},
    methods: {
        scrollWin() {
            let yDistance = window.screen.height * 0.65
            console.log(yDistance)
            window.scrollBy(0, -yDistance);
        },
    }
}
</script>

<template>
    <section class="testimonials">
        <div class="container-xl">
            <div class="bg-image">
                <p>Testimonials<span class="dot"></span></p>
            </div>
            <div class="row">
                <div class="col">
                    <SliderCardOne :slides="cardsTestimonials"/>
                </div>
            </div>
        </div>
        <div class="scroll-icon" @click="scrollWin()">
            <font-awesome-icon icon="fa-solid fa-arrow-up-long" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;

    .testimonials {
        position: relative;
        height: 600px;
        background-color:  rgb(22 20 20 / 98%);
        .bg-image {
            position: absolute;
            top: 0;
            width: 100%;
            z-index: -1;
            text-align: center;
            p {
                color: $f-black-1;
                font-size: 200px;
                font-weight: bolder;
                line-height: 200px;
                position: relative;
            }
            .dot {
                height: 15%;
                aspect-ratio: 1;
                display: inline-block;
                background-color: $f-black-1;
                border-radius: 999px;
                position: absolute;
                bottom: 4%;
                right: 8%;
                transform: translate(-50%, -50%);
            }
        }
        .container-xl {
            position: relative;
            height: 100%;
            .row {
                justify-content: center;
                align-items: center;
                height: 100%;
            }
        }
    }
    .scroll-icon {
        position: absolute;
        right: 2%;
        bottom: 5%;
    } 
</style>