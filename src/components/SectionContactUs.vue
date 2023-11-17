<script>
import FormContactUs from './FormContactUs.vue';

    export default {
    data() {
        return {};
    },
    components: { FormContactUs }
}
</script>

<template>
    <div class="contact-us">
        <div class="container-lg">
            <div class="row">
                <div class="col-6">
                    <div class="map">
                        <figure>
                            <img src="/img/h1-contact-rev-01.png">
                        </figure>
                        <div class="contact">
                            <figure>
                                <img src="/img/h1-contact-rev-03.png">
                            </figure>
                            <div class="text">
                                <div class="title">
                                    <h3>New York Coaching</h3>
                                </div>
                                <div class="read-more">
                                    <a href=#>Read more</a>
                                </div>
                            </div>
                        </div>
                        <div class="tag tag-1">
                            <figure>
                                <img src="/img/h1-contact-rev-02.png">
                            </figure>
                        </div>
                        <div class="tag tag-2">
                            <figure>
                                <img src="/img/h1-contact-rev-02.png">
                            </figure>
                        </div>
                        <div class="tag tag-3">
                            <figure>
                                <img src="/img/h1-contact-rev-02.png">
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <FormContactUs/>
                </div>
        </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;

    .contact-us {
        padding: 130px 0px;
        .map {
            position: relative;
            .contact {
                figure {
                    width: 270px;
                }
                position: absolute;
                top: 44%;
                left: 21%;
                .text {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: baseline;
                    padding-left: 16%;
                    h3 {
                        font-size: &f-st-3;
                        color: $f-black-1;
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
            .tag {
                position: absolute;
                figure {
                    width: 25px;
                }
                &.tag-1 {
                    top: 33%;
                    left: 24%;
                }
                &.tag-2 {
                    top: 22%;
                    left: 51%;
                }
                &.tag-3 {
                    top: 73%;
                    left: 82%;
                }
            }
        }
    }
</style>