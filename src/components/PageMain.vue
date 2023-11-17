<script>
import SectionOurTeam from './SectionOurTeam.vue';
import SectionOurSpecialeties from './SectionOurSpecialeties.vue'
import SectionEventsCalender from './SectionEventsCalender.vue';
import SectionCreativeLeader from './SectionCreativeLeader.vue';
import SectionLatestNews from './SectionLatestNews.vue';
import SectionTestimonials from './SectionTestimonials.vue';

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
        SectionTestimonials
    }
}
</script>

<template>
    <SectionOurTeam/>
    <SectionOurSpecialeties/>
    <SectionEventsCalender/>
    <SectionCreativeLeader/>
    <SectionLatestNews/>
    <SectionTestimonials/>
</template>

<style scoped>
</style>