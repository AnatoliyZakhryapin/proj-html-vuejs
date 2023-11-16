<script>

export default {
    data() {
        return {
            
        }
    }
}
</script>

<template>
    <section class="OurSpecialeties"> 
        <div class="container-xxl">
            <div class="container-lg">
                <div class="row">
                    <div class="col">
                        <div class="section-description">
                            <h2 class="title">Our specialeties<span class="dot"></span></h2>
                            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugit!</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        Card
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;
  
    .row:has(> .col .section-description) {
        justify-content: center;
        text-align: center;
        margin-bottom: 50px;
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
    }

    
    
    
</style>