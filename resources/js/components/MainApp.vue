<template>
    <div id="main">
        <Header/>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import Header from './Header.vue';
    export default {
        name: 'main-app',
        components: {Header}
    }
</script>
