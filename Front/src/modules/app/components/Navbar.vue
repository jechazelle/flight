<template>
    <b-navbar toggleable="lg">
        <b-navbar-brand>
            <router-link to="/" class="navbar-brand">
                Flight
            </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <li class="nav-item">
                    <router-link to="/search" class="nav-link">
                        Search
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/graph" class="nav-link">
                        Graph
                    </router-link>
                </li>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name : 'Navbar',
        computed: {
            isLogged() {
                return this.$store.state.auth.session.isLogged
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

    nav.navbar {
        padding: 0 50px 0 50px;
        background-color: #FFFFFF;
        box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

        .navbar-brand {
            color: #050505;
            margin: 0 15px 0 0;
            padding: 0 0 0 0;
        }

        ul.navbar-nav {
            li.nav-item {
                a.nav-link {
                    padding: 8px 10px 8px 10px;
                    font-size: 13px;
                    margin: 0;
                    color: #65676b;
                    border-radius: 0;

                    &.router-link-exact-active {
                        color: #1876f2;
                        border-bottom: 3px solid #1876f2;
                    }
                }
            }
        }
    }

</style>
