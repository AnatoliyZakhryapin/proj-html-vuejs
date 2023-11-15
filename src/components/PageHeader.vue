<script>

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
                        <div class="nav-menu">menu</div>
                        <!-- INPUT SEARCH -->
                        <div class="input">input</div>
                        <!-- SECONDARY MENU -->
                        <div class="menu">menu sec</div>
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
            .logo {
                width: 140px;
            }
            .nav-bar {
                display: flex;
            }
        }
    }
</style>