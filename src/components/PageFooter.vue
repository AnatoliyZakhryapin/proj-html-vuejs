<script>
import PageMenu from './PageMenu.vue';

export default {
    data() {
        return {
            importatnLinks: {  
                arrow: false,
                title: "Important links",
                links: [
                    {
                        text: "About me",
                        href: "#"
                    },
                    {
                        text: "About us",
                        href: "#"
                    },
                    {
                        text: "Language packs",
                        href: "#"
                    },
                    {
                        text: "Become a coach",
                        href: "#"
                    },
                    {
                        text: "Monthly events",
                        href: "#"
                    }
                ]
            },
            contactMe: {
                arrow: false,
                title: "Contact me",
                links: [
                    {
                        text: "451 BigBlue Street, NY 10013",
                        href: "#",
                        icon: "fa-solid fa-location-dot"
                    },
                    {
                        text: "(315)5512-2579",
                        href: "#",
                        icon: "fa-solid fa-phone"
                    },
                    {
                        text: "everlead@mikado.com",
                        href: "#",
                        icon: "fa-solid fa-envelope" 
                    },
                ]
            },
        };
    },
    components: { PageMenu },
    methods: {
        scrollWin() {
            let yDistance = window.screen.height * 0.48
            console.log(yDistance)
            window.scrollBy(0, -yDistance);
        },
    }
}
</script>

<template>
   <section class="page-footer">
        <div class="container-lg">
            <div class="row">
                <div class="col-3">
                    <div class="about">
                       <h3 class="title">About</h3>
                        <ul class="menu">
                            <li class="menu-item">
                                <div class="text">
                                    <p>
                                        We created Everlead to effectively become the stepping stone towards meeting all your goals & achieving business success.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div> 
                    <div class="icon-menu">
                        <ul class="menu">
                            <li class="menu-item">
                                <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
                            </li>
                            <li class="menu-item">
                                <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                            </li>
                            <li class="menu-item">
                                <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-3">
                    <div class="twitter">
                       <h3 class="title">Twitter</h3>
                        <ul class="menu">
                            <li class="menu-item">
                                <div class="icon">
                                    <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                                </div>
                                <div class="text">
                                    <p>
                                        <span><a href="#">@aliasadadm</a></span>
                                        Hi 
                                        <span><a href="#">@aliasadadm</a></span>,
                                        can you please submit a ticket at 
                                        <span><a href="#">https://t.co/jlv611xg7d</a></span>
                                        and one of ouy support agent...
                                        <span><a href="#">https://t.co/vk57k1s9bs</a></span>
                                    </p>
                                </div>
                            </li>
                            <li class="menu-item">
                                <div class="icon">
                                    <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                                </div>
                                <div class="text">
                                    <p>
                                        <span><a href="#">@HenrySefaBoaky1</a></span>
                                        Check out our theme Glioia which has all necessary elements to
                                        build a multi vendor marketplace.
                                        <span><a href="#">https://t.co/c9bIyx7bll</a></span>,
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div> 
                </div>
                <div class="col-3">
                    <div class="important-links">
                        <h4 class="title">Important links</h4>
                        <PageMenu
                            :links="importatnLinks.links"
                            :arrow="importatnLinks.arrow"
                        />
                    </div>
                </div>
                <div class="col-3">
                    <div class="contact-me">
                        <h4 class="title">Contact me</h4>
                        <PageMenu 
                            :links="contactMe.links"
                            :arrow="contactMe.arrow"
                        />
                    </div>
                    <div class="subscribe">
                        <p>Your name</p>
                        <p>Subscribe</p>
                    </div>
                </div>
            </div>
        </div> 
        <div class="scroll-icon" @click="scrollWin()">
            <font-awesome-icon icon="fa-solid fa-arrow-up-long" />
        </div>   
   </section>
</template>

<style lang="scss" scoped>
    @use './style/partial/varibils' as*;
    @use './style/partial/mixins' as*;
    .page-footer {
        position: relative;
        padding: 130px 0px;
        background-color: $bg-black-6;
        color: $f-gray-2;
        .row {
            flex-wrap: nowrap;
            gap: 10px;
        }
        .title {
            font-size: $f-st-4;
            color: $f-white-1;
            margin-bottom: 20px;
            &::after {
                @include after-line;
                margin: 0;
                margin-top: 20px;
            }
        }
        .col-3 {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .twitter .menu {
            display: flex;
            flex-direction: column;
            gap: 20px;
            & .menu-item {
                display: flex;
                gap: 20px;
                a {
                    text-decoration: underline;
                }
                .icon a {
                    color: $bg-orange;
                }
            }
        }
        .subscribe {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            border-bottom: 3px solid;
            & :last-child {
                text-transform: uppercase;
                color: $f-white-1;
            }
        }

    }
   
    .icon-menu .menu {
        display: flex;
        gap: 20px;
        .menu-item a {
            width: 25px;
            font-size: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            aspect-ratio: 1;
            border-radius: 50%;
            background-color: $f-white-1;
            color: $bg-black-6;
           
        }
    }
    .scroll-icon {
        position: absolute;
        right: 2%;
        bottom: 5%;
    }

</style>

