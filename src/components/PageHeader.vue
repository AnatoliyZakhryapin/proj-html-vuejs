<script>
import PageMenu from './PageMenu.vue';

export default {
    data() {
        return {
            navMenu: {
                links: [
                    {
                        text: "Homes",
                        href: "#"
                    },
                    {
                        text: "Pages",
                        href: "#"
                    },
                    {
                        text: "Blog",
                        href: "#"
                    },
                    {
                        text: "Shop",
                        href: "#"
                    },
                    {
                        text: "Events",
                        href: "#"
                    },
                    {
                        text: "Elements",
                        href: "#"
                    },
                ]
            }
        }
    },
    components: {
        PageMenu,
    }
}
</script>

<template>
    <header class="page-header">
        <div class="container-xxl">
            <div class="row">
                <!-- LOGO -->
                <div class="col">
                    <figure>
                        <img class="logo" src="/img/logo-img-01.png" alt="">
                    </figure>
                </div>
                <!-- NAVIGATION BAR -->
                <div class="col">
                    <div class="nav-bar">
                        <!-- NAV-MENU -->
                        <div class="nav-menu">
                            <PageMenu
                                :links="navMenu.links"
                            />
                        </div>
                        <!-- INPUT SEARCH -->
                        <div class="input">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </div>
                        <!-- SECONDARY MENU -->
                        <div class="menu-secondary">
                            <font-awesome-icon icon="fa-solid fa-list" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .page-header {
        padding: 40px 0px;
        .row {
            justify-content: space-between;
            align-items: center;
            .logo {
                width: 140px;
            }
            .nav-bar {
                display: flex;
                align-items: baseline;

                .input {
                    padding: 0px 15px;
                    transform: rotatey(180deg);
                }
                .menu-secondary {
                    padding: 0px 20px;
                }
            }
        }
    }


</style>