<template>
  <div class="login row justify-content-center">
    <div class="col-md-4">
      <div class="card mt-5">
        <div class="card-header">Login</div>
        <div class="card-body">
          <form @submit.prevent="authenticate">
            <div class="form-group">
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" v-model="form.email" class="form-control" placeholder="Email">
              </div>

              <div class="form-group">
                <label for="password]">Password:</label>
                <input type="password" v-model="form.password" class="form-control" placeholder="Password">
              </div>

              <div class="form-group">
                <button type="submit" class="btn btn-primary form-control">Login</button>
              </div>
              <div class="alert alert-danger" v-if="authError">
                {{authError}}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from '../../helpers/auth.js';
  export default{
    name: "login",
    data(){
      return {
        form:{
        email:'',
        password:''
      },
      error:null,
    };
  },
    methods:{
      authenticate(){
        this.$store.dispatch('login');
        login(this.$data.form)
          .then((res) => {
            this.$store.commit("LoginSuccess", res);
            this.$router.push({path:'/'});
          })
          .catch((error) => {
            this.$store.commit("LoginFailed", {error});
          });
      }
    },
    computed:{
      authError(){
        return this.$store.getters.auth_error;
      }
    }
}
</script>

<style>

</style>
