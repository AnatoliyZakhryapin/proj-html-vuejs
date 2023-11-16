<script>

export default {
    data() {
        return {
            
        }
    },
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card">
       <figure class="card-img">
            <img :src="card.img">
       </figure>
       <div class="card-body">
            <div class="card-title">
                <h4>{{ card.title }}</h4>
            </div>
            <div class="card-text">
                <p>{{ card.text }}</p>
            </div>
       </div>
    </div>
</template>

<style lang="scss" scoped>

    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;

    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 200px;
        gap: 25px;
        .card-body {
            display: flex;
            flex-direction: column;
            gap: 15px;
            .card-title {
                font-size: $f-st-4;
            }
            .card-text {
                font-size: $f-s-3;
                line-height: 22px;
            }
        }
    }
    figure.card-img {
        width: 150px;
    }

</style>