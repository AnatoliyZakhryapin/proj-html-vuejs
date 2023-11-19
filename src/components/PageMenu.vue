<script>

export default {
    data() {
        return {
            activeIndex: Number,
        }
    },
    props: {
        title: {
            type: String,
            required: false
        }, 
        arrow: {
            type: String,
            required: false
        }, 
        links: Array,
    },
    methods: {
        isActive(index) {
            if(index === this.activeIndex) {
                return true
            }
        },
        getActive(index) {
            this.activeIndex = index;
        }
    }
}
</script>

<template>
    <h3 v-if="title"> {{ title }} </h3>
    <ul class="menu">
        <li 
            class="menu-item" 
            :class="{'active': isActive(index)}"
            v-for="(link, index) in links"
        
        >
            <a  
                v-if="link.icon"
                class="icon"  
                :href="link.href"
            >
                <font-awesome-icon :icon="link.icon" />
            </a>
            <a  
                v-if="link.text" 
                class="text" 
                :href="link.href"
                @click="getActive(index)"
            >
                <span v-if="arrow" class="arrow">
                    <!-- &#10230; -->
                    <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </span>
                {{ link.text }}
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    @use './style/partial/varibils' as*;
    .menu *{
        font-family: $f-family-Roboto;
    }
</style>