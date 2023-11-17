<script>
import SectionOurTeam from './SectionOurTeam.vue';
import SectionOurSpecialeties from './SectionOurSpecialeties.vue'
import SectionEventsCalender from './SectionEventsCalender.vue';
import SectionCreativeLeader from './SectionCreativeLeader.vue';

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
    }
}
</script>

<template>
    <SectionOurTeam/>
    <SectionOurSpecialeties/>
    <SectionEventsCalender/>
    <SectionCreativeLeader/>
</template>

<style scoped>
</style>