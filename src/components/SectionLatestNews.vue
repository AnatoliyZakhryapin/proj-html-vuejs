<script>
import SliderCardTripl from './SliderCardTripl.vue';

    export default {
    data() {
        return {
            cardsNews: [
                {
                    src: "/img/h1-blog-img-01.jpg",
                    title: "Next investiment",
                    text: "                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ex ullam dolorem, consequuntur neque eum libero vel odit veniam sapiente in veritatis delectus consectetur voluptas repellendus. Exercitationem quis velit numquam?",
                    date: "05/05/2019",
                    persone: "Amanda Doe",
                    badge: ["Business, Leading"]
                },
                {
                    src: "/img/h1-blog-img-02.jpg",
                    title: "Team Bulding",
                    text: "                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ex ullam dolorem, consequuntur neque eum libero vel odit veniam sapiente in veritatis delectus consectetur voluptas repellendus. Exercitationem quis velit numquam?",
                    date: "05/05/2019",
                    persone: "Amanda Doe",
                    badge: ["Business, Leading"]
                },
                {
                    src: "/img/h1-blog-img-03.jpg",
                    title: "New Business day",
                    text: "                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ex ullam dolorem, consequuntur neque eum libero vel odit veniam sapiente in veritatis delectus consectetur voluptas repellendus. Exercitationem quis velit numquam?",
                    date: "05/05/2019",
                    persone: "Amanda Coe",
                    badge: ["Business, Leading"]
                },
                {
                    src: "/img/h1-blog-img-04.jpg",
                    title: "Next meeting",
                    text: "                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ex ullam dolorem, consequuntur neque eum libero vel odit veniam sapiente in veritatis delectus consectetur voluptas repellendus. Exercitationem quis velit numquam?",
                    date: "05/05/2019",
                    persone: "Amanda Coe",
                    badge: ["Business, Leading"]
                },
            ]
        };
    },
    components: { SliderCardTripl }
}
</script>

<template>
    <section class="latest-news">
        <div class="container-xl">
            <div class="row">
                <div class="col">
                    <div class="section-header">
                        <h2>Latest News<span class="dot"></span></h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, accusamus.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <SliderCardTripl :slides="cardsNews"/>
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;

    .latest-news {
        padding: 130px 0px;
        .container-xl {
            position: relative;
        }
        .row {
            justify-content: center;
            text-align: center;
            row-gap: 70px;
            .section-header {
                margin-bottom: 70px;
                &::after {
                    @include after-line;
                }
                h2 {
                    font-size: $f-st-2;
                    position: relative;
                    display: inline-block;
                    margin-bottom: 10px;
                    
                    .dot {
                        height: 15%;
                        aspect-ratio: 1;
                        display: inline-block;
                        background-color: #FF4612;
                        border-radius: 999px;
                        position: absolute;
                        bottom: 10%;
                        right: -7%;
                        transform: translate(-50%, -50%);
                    }
                }
                p {
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>