<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        PageHeader,
        PageMain,
        PageFooter,
    }
}
</script>

<template>
    <PageHeader/>
    <PageMain/>
    <PageFooter/>
</template>

<style lang="scss">
     @use './components/style/general.scss' as *;
</style>
