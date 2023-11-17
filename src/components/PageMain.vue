<script>
import SectionOurTeam from './SectionOurTeam.vue';
import SectionOurSpecialeties from './SectionOurSpecialeties.vue'
import SectionEventsCalender from './SectionEventsCalender.vue';
import SectionCreativeLeader from './SectionCreativeLeader.vue';
import SectionLatestNews from './SectionLatestNews.vue';
import SectionTestimonials from './SectionTestimonials.vue';
import SectionVideoPlayer from './SectionVideoPlayer.vue';
import SectionContactUs from './SectionContactUs.vue';

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
    SectionTestimonials,
    SectionVideoPlayer,
    SectionContactUs
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
    <SectionVideoPlayer/>
    <SectionContactUs/>
</template>

<style scoped>
</style>