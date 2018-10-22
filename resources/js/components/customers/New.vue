<template>
  <div class="customers-new">
    <div class="card card-outline-secondary">
        <div class="card-header">
            <h3 class="mb-0">
                Add new customer
            </h3>
        </div>
        <div class="card-body">
            <form @submit.prevent="add" class="form" role="form">
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label">
                         Name
                    </label>
                    <div class="col-lg-9">
                        <input class="form-control" type="text" placeholder="Name" v-model="customer.name">
                        </input>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label">
                        Email
                    </label>
                    <div class="col-lg-9">
                        <input class="form-control" type="email" placeholder="Email" v-model="customer.email">
                        </input>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label">
                        Phone
                    </label>
                    <div class="col-lg-9">
                        <input class="form-control" type="text" placeholder="Phone" v-model="customer.phone">
                        </input>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label">
                        Website
                    </label>
                    <div class="col-lg-9">
                        <input class="form-control" type="url" placeholder="Website Url" v-model="customer.website">
                        </input>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label form-control-label">
                    </label>
                    <div class="col-lg-9">
                        <input class="btn btn-secondary" type="reset" value="Cancel">
                            <input class="btn btn-primary" type="button" value="Add">
                            </input>
                        </input>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import validate from 'validate.js';
  export default {
    name:'new',
    data(){
      return {
        customer:{
          name:'',
          email:'',
          phone:'',
          website:''
        },
        errors:null
      }
    },
    methods:{
      add(){
        this.errors = null;
        const constraints= this.getConstraints();
        const errors = validate(this.$data.customer, constraints);
        if (errors) {
          this.errors = errors;
        }
      },
      getConstraints(){
        return{
          name:{
            presense:true,
            length:{
              minimum:3,
              message:"Must be atleast 3 characters long"
            }
          },
          email:{
            presense:true,
            email:true
          },
          phone:{
            presense:true,
            numericallity:true,
            length:{
              minimum:10,
              message:"Must be atleast 10 digits long"
            }
          },
          website:{
            presense:true,
            url:true
          },
        }
      }
    }
  }
</script>
