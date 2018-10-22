require('./bootstrap');
import Vue from 'vue/dist/vue.esm.js';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './routes';
import {init} from './helpers/general';
import StoreData from './store';
import MainApp from './components/MainApp.vue';
import Login from './components/Auth/Login.vue';
import Home from './components/Home.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
const store = new Vuex.Store(StoreData);
const router = new VueRouter({
  routes,
  mode: 'history'
});
init(store,router);
const app = new Vue({
    el: '#app',
    router,
    store,
    components:{
      MainApp,
      Login,
      Home
    },
    // render: h => h(Home)
});
