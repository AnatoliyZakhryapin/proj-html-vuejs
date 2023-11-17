<script>
import EventsCalender from './EventsCalender.vue';
    export default {
        data() {
            return {
                eventsImg: [
                    {
                        src: "/img/h1-img-09.jpg"
                    },
                    {
                        src: "/img/h1-img-08.jpg"
                    },
                    {
                        src: "/img/h1-img-07.jpg"
                    }
                ],
                currentIndex: 0,
                idAutoPlay: null,
                calenderdb: [
                    {
                        nameEvent: "Melbourne Coaching",
                        timeStart: "09:00 am",
                        timeFine: "05:00 pm",
                        date: "01/07/2023",
                        place: "Cambridge, MA 02138, USA"
                    },
                    {
                        nameEvent: "New York Coaching",
                        timeStart: "09:00 am",
                        timeFine: "05:00 pm",
                        date: "01/11/2023",
                        place: "Cambridge, MA 02138, USA"
                    },
                    {
                        nameEvent: "London Coaching",
                        timeStart: "09:00 am",
                        timeFine: "05:00 pm",
                        date: "01/21/2023",
                        place: "Cambridge, MA 02138, USA"
                    }
                ]
            }
        },
        components: {
            EventsCalender,
        },
        methods: {
            slideChanger() {    
                let id = setInterval(() => {
                            if(this.currentIndex === this.eventsImg.length-1){
                            this.currentIndex = 0 ;
                            } else {
                                this.currentIndex++;
                            }
                        }, 3000) 
               return this.idAutoPlay = id
            },
            clearInterval() {
                clearInterval(this.idAutoPlay)
            }
        },
    }
</script>

<template>
    <section class="events-calander" 
        @mouseenter="slideChanger()"
        @mouseleave="clearInterval()"
    >
        <div class="events-images">
            <figure>
                <img :src="eventsImg[currentIndex].src"
                >
            </figure>
        </div>
        <div class="events">
                <div class="container-lg">
                    <div class="row">
                        <div class="col">
                            <div class="calender-box">
                                <EventsCalender :calender="calenderdb"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    
</template>

<style lang="scss" lscoped>
    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;

    .events-calander{
        position: relative;
        display: flex;
        .events-images {
            flex-grow: 1;
        }
    }
    .events {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        .container-lg {
            flex-grow: 1;
            display: flex;
            align-items: center;
        }
    }
</style>