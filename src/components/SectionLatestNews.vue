<script>
    export default {
        data() {
            return {
                
            }
        }
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
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;

    .latest-news {
        padding: 130px 0px;
        .row {
            justify-content: center;
            text-align: center;
            row-gap: 70px;
            .section-header {
                margin-bottom: 20px;
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