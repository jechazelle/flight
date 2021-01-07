<template>
    <div id="app">
        <vue-topprogress ref="topProgress"
                         color="#1876f2"
                         colorShadow="#3999ff"></vue-topprogress>

        <navbar></navbar>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Navbar from '../components/Navbar.vue'

    export default {
        name      : 'App',
        components: {
            Navbar
        }
    }
</script>

<style lang="scss">
    @import "../../../assets/scss/custom";
    @import "../../../../node_modules/bootstrap/scss/bootstrap";

    #app {

    }
</style>
