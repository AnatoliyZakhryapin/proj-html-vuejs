<script>
export default {
    data() {
        return {
        }
    },
    props: {
        slides: {
            type: Array,
            required: true
        },
        slideIndex: {
            type: Number,
            required: true
        },
    },
}
</script>

<template>
    <div 
        class="visit-card" 
        :class="slideIndex === index ? 'active' : ''"
        v-for="(card, index) in slides">
        <div class="title">
            <h3>{{ card.name }}</h3>
            <p>{{ card.position }}</p>
        </div>
        <div class="text">
            <p>{{ card.text }}</p>
        </div>
        <div class="link-menu">
            <ul class="menu">
                <li class="menu-item">
                    <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
                </li>
                <li class="menu-item">
                    <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                </li>
                <li class="menu-item">
                    <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;
  
    .visit-card {
        padding: 0px 120px 0px 60px;
        display: none;
        &.active{
            display: block;
        }
        p {
            padding-left: 5px;
            font-size: $f-s-2;
            line-height: 30px;
        }
        .title {
            &::after {
                @include after-line;
                margin: 20px 0px 20px 5px;
            }
            h3 {
                font-size: $f-st-3;
                color: $f-black-1;
            }
        }
        .text {
            margin-bottom: 20px;
        }
        .menu {
            display: flex;
            gap: 5px;
            .menu-item a {
                width: 25px;
                font-size: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                aspect-ratio: 1;
                text-decoration: none;
                border-radius: 50%;
                background-color: $bg-orange;
                color: $f-white-1;
                &:hover {
                    background-color: $bg-black-1;
                    scale: 1.2;
                }
            }
        }
    }
  
</style>
 
 
 