<script>
    export default {
        data() {
            return {
                
            }
        },
        props: {
            progressCard: {
                type: Object,
                required: true
            }
        }
    }
</script>

<template>
    <div class="progress-card">
    <div class="card-title">
         <h4>{{ progressCard.title }}</h4>
         <span class="percent">{{ progressCard.progress }}%</span>
    </div>
     <div class="progress-bar">
         <div class="progress" :style="{ 'width': progressCard.progress + '%' }"></div>
     </div>
 </div>
</template>

<style lang="scss" lscoped>
    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;

    .progress-card {
        padding: 15px 0px;
        .card-title {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .progress-bar {
            width: 100%;
            background-color: $fill-gray-1;
            .progress {
                height: 3px;
                background-color: $border-orange-1;
            }
        }
    }
</style>