import {getLocalUser} from './helpers/auth';
import {setAuthorization} from './helpers/general';
const user = getLocalUser();
export default{
  state:{
    currentUser: user,
    isLoggedIn:!!user,
    loading:false,
    auth_error:null,
    customers:[],
    welcome: 'Hello World'
  },
  getters:{
    isLoading(state){
      return state.loading;
    },
    isLoggedIn(state){
      return state.isLoading;
    },
    currentUser(state){
      return state.currentUser;
    },
    auth_error(state){
      return state.auth_error;
    },
    customers(state){
      return state.customers;
    },
    welcome(state){
      return state.welcome;
    }
  },
  mutations:{
    login(state){
      state.loading = true;
      state.auth_error = null;
    },
    LoginSuccess(state,payload){
      state.auth_error = null;
      state.isLoggedIn = true;
      state.loading = false;
      state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
      localStorage.setItem("user", JSON.stringify(state.currentUser));
    },
    LoginFailed(state, payload){
      state.loading = false;
      state.auth_error = payload.error;
    },
    logout(state){
      localStorage.removeItem("user");
      state.isLoggedIn = false;
      state.currentUser = null;
    },
    updateCustomers(state,payload){
      state.customers = payload;
    }
  },
  actions:{
    login(context){
      context.commit("login");
    },
    getCustomers(context){
      axios.get('/api/customers')
      .then((response) => {
        context.commit('updateCustomers', response.data.customers);
      })
    }
  }
};
