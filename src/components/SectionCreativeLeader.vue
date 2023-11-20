<script>
    import ProgressCard from './ProgressCard.vue';
    export default {
        data() {
            return {
                progressdb: [
                    {
                        title: "Mentorship",
                        progress: 78
                    },
                    {
                        title: "Education",
                        progress: 95
                    },
                    {
                        title: "Learning",
                        progress: 65
                    },
                    {
                        title: "Motivation",
                        progress: 83
                    }
                ]
            }
        },
        components: {
            ProgressCard
        },
        methods: {
            scrollWin() {
                let yDistance = window.screen.height * 0.73
                console.log(yDistance)
                window.scrollBy(0, -yDistance);
            },
        }
    }
</script>

<template>
    <section class="creativeLeader">
        <div class="container-lg">
            <div class="row">
                <div class="col-6">
                    <div class="content">
                        <div class="title">
                            <h3>Creative Leader<span class="dot"></span></h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti beatae aut officia reprehenderit vitae tempora, ipsam magnam aliquam consectetur, molestias culpa provident cumque quis tempore a dicta? Nam, tenetur repellendus.</p>
                        <div class="read-more">
                            <a href=#>Read more</a>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="progress-box" >
                        <ProgressCard :progressCard="progressCard" v-for="progressCard in progressdb"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll-icon" @click="scrollWin()">
            <font-awesome-icon icon="fa-solid fa-arrow-up-long" />
        </div>
    </section>
</template>

<style lang="scss" lscoped>
    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;

    .creativeLeader {
        background-color: $bg-white-1;
        padding: 130px 0px;
        position: relative;
        .content {
            display: flex;
            flex-direction: column;
            gap: 20px;
            .title {
                &::after {
                    @include after-line;
                    margin: 0;
                }
                h3 {
                    font-size: $f-st-3;
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
                        right: -5%;
                        transform: translate(-50%, -50%);
                    }
                }
            }
            .read-more {
                font-weight: bold;
                text-transform: uppercase;
            a {
                font-size:  $f-s-3;
            }
        }
        }
    }
    .scroll-icon {
        position: absolute;
        right: 2%;
        bottom: 5%;
        border: 1px solid $f-gray-1;
    }
</style>