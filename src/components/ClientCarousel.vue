<script>
    export default {
        data() {
            return {
                
            }
        },
        props: {
            partnersList: {
                type: Array,
                required: true
            },
        },
    }
</script>

<template>
    <div class="list">
        <ul class="client-list">
            <li class="list-item" v-for="partner in partnersList">
                <figure class="client-logo">
                    <a href="#">
                        <img :src="partner.src">
                        <img class="hover" :src="partner.srcOver">
                    </a>
                </figure>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .client-list {
        display: flex;
        justify-content: space-between;;
    }
    .client-logo {
        width: 80px;

        & a :first-child {display: block;}
        & a :last-child {display: none;}

        &:hover :first-child {display: none;}
        &:hover :last-child {display: block;}
    }
</style>