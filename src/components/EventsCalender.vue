<script>
    export default {
        data() {
            return {
                
            }
        },
        props: {
            calender: {
                type: Array,
                required: true
            },
        },
        methods: {
            getData(date) {
                const d = new Date(date);
                const day = d.getDate();
                const mounth = d.getMonth() + 1;
                const year = d.getFullYear();
                const printDate = {
                    day,
                    mounth,
                    year
                }
		  	    return printDate;
            },
        }
    }
</script>

<template>
    <div class="calender">
        <div class="calender-header">
            <h4>Upcoming Events</h4>
        </div>
        <ul class="calender-body">
            <li class="event" v-for="event in calender">
                <div class="card-event">
                    <div class="card-header">
                        <div class="place-img">
                            <div class="day">{{ getData(event.date).day}}</div>
                            <div class="mounth-year">{{ getData(event.date).mounth}}/{{ getData(event.date).year}}</div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="title">{{ event.nameEvent }}</div>
                        <div class="date">{{  event.timeStart }} - {{ event.timeFine}}, 
                            {{ getData(event.date).day}}/{{ getData(event.date).mounth}}/{{ getData(event.date).year}}
                        </div>
                        <div class="place">{{ event.place }}</div>
                        <div class="read-more">
                            <a href=#>Read more</a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" lscoped>
    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;

    .calender {
        max-width: 500px;
        background-color: white;
        .calender-header {
            padding: 30px 40px;
            h4 {
                font-size: $f-st-3;
            }
        }
        
        li {
            border-top: 1px solid  $border-gray-1;
            border-bottom: 1px solid  $border-gray-1;
            padding: 30px 40px;
        }

        .card-event {
            display: flex;
            gap: 20px;
            .place-img {
                text-align: center;
                color: $f-white-1;
                padding: 10px;
                background-color:  $bg-orange;
                margin-top: 5px;
                .mounth-year {
                    font-size: $f-s-4;
                }
            }

            .card-body {
                display: flex;
                flex-direction: column;
                gap: 10px;
                .title {
                    font-size:  $f-st-4;
                    font-weight: bold;
                    &:hover {
                        color: $f-orange-1;
                    }
                }

                .date, .place {
                    font-size: $f-s-4;
                }

                .read-more {
                    font-weight: bold;
                    text-transform: uppercase;
                    a {
                        font-size:  $f-s-3;
                    }
                }
            }

            
        }

    }
</style>