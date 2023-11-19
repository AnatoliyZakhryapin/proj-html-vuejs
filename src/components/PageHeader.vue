<script>
import PageMenu from './PageMenu.vue';

export default {
    data() {
        return {
            navMenu: {
                arrow: true,
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
            },
            isActiveInput: false,
            searchText: "",
        }
    },
    components: {
        PageMenu,
    },
    methods: {
        getActiveInput() {
            const ref = this.$refs.name
            setTimeout(this.getFocusInput(ref), 1000)
            if(!this.isActiveInput) {
                return this.isActiveInput = !this.isActiveInput
            }
        },
        getFocusInput(ref) {
            return ref.focus()
        },
        getNotActiveInput() {
            if(this.searchText.length < 1) {
                return this.isActiveInput = false;
            }
        },
        clearSearchText() {
            return this.searchText = "";
        },
    },  
    created() {
        document.body.addEventListener("click",() => {
            this.getNotActiveInput()
        })
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
                                :arrow="navMenu.arrow"
                            />
                        </div>
                        <!-- INPUT SEARCH -->
                        <div 
                            class="nav-element search-bar" 
                            @click.stop="getActiveInput()"
                            :class="{'active' : isActiveInput}"
                        >   
                            <a class="search-bar__icon input" >
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </a> 
                            <input 
                                type="text" 
                                placeholder="Search"
                                v-model="searchText"
                                ref="name"  
                            > 
                            <a class="search-bar__xmark" 
                                :class="{'active' : searchText.length > 0}"
                                @click.stop="clearSearchText()"
                            >
                                <font-awesome-icon icon="fa-solid fa-xmark" />
                            </a>    
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
        width: 100%;
        position: absolute;
        z-index: 1;
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
                    margin: 0px 15px;
                    transform: rotatey(180deg);
                }
                .menu-secondary {
                    margin-left: 20px;
                }
            }
        }
    }


</style>