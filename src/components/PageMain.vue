<script>
import SectionOurTeam from './SectionOurTeam.vue';
import SectionOurSpecialeties from './SectionOurSpecialeties.vue'
import SectionEventsCalender from './SectionEventsCalender.vue';
import SectionCreativeLeader from './SectionCreativeLeader.vue';
import SectionLatestNews from './SectionLatestNews.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        SectionOurTeam,
        SectionOurSpecialeties,
        SectionEventsCalender,
        SectionCreativeLeader,
        SectionLatestNews,
    }
}
</script>

<template>
    <SectionOurTeam/>
    <SectionOurSpecialeties/>
    <SectionEventsCalender/>
    <SectionCreativeLeader/>
    <SectionLatestNews/>
</template>

<style scoped>
</style>