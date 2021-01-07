<template>
    <div class="home">
        <img class="image-welcome" src="@/assets/images/welcome.png" alt="">

        <span class="subtitle">Keep control on the traffic.</span>

        <router-link to="/search" class="nav-link">
            <button type="button" class="btn btn-primary">Go!</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style lang='scss'>

    .home {
        text-align: center;

        .image-welcome {
            margin-top: 100px;
            width: 350px;
        }

        .subtitle {
            margin-top: 20px;
            display: block;
            font-size: 20px;
            color: #999999
        }
    }

</style>