<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <router-link class="navbar-brand" to="/">My Vue App</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <template v-if="!currentUser">
                        <li>
                            <router-link to="/login" class="nav-link">Login</router-link>
                        </li>
                        <li>
                            <router-link to="/register" class="nav-link">Register</router-link>
                        </li>
                    </template>
                    <template v-else>
                        <li>
                            <router-link to="/customers" class="nav-link">Customers</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" id="navbarDropdown" class="navbar dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" area-popup="true">{{currentUser.name}}</a>
                            <span class="caret"></span>
                            <div class="dropdown-menu" area-labelledby="navbarDropdown">
                                <a href="#" @click.prevent="logout" class="dropdown-item">Logout</a>
                            </div>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'app-header',
        methods:{
            logout(){
                this.$store.commit('logout');
                this.$router.push('/login');
            }
        },
            computed:{
                currentUser(){
                    return this.$store.getters.currentUser
                }
            }
    };
</script>
