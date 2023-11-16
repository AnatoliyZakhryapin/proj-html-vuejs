<script>

export default {
    props: {
        title: {
            type: String,
            required: false
        }, 
        links: Array,
    }
}
</script>

<template>
    <h3 v-if="title"> {{ title }} </h3>
    <ul class="menu">
        <li class="menu-item" v-for="link in links">
            <a  
                v-if="link.text" 
                class="text" 
                :href="link.href"
            >
            {{ link.text }}
            </a>
            <a  
                v-if="link.icon"
                class="icon"  
                :href="link.href"
            >
                <font-awesome-icon :icon="link.icon" />
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>

</style>