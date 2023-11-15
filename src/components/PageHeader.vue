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
                <div class="col">Logo</div>
                <div class="col">
                    <div class="nav-bar">
                        <div class="nav-menu">menu</div>
                        <div class="input">input</div>
                        <div class="menu">menu sec</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
    .row {
        justify-content: space-between;
    }
    .nav-bar {
        display: flex;
    }
</style>