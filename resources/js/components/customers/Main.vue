<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card card-default">
          <div class="card-header">
            <div class="row">
                <div class="col-md-6">
                  <h4 class="float-left">Customers</h4>
                </div>
                <div class="col-md-6">
                <router-link :to="`/customers/new`" class="btn btn-primary float-right">Add New</router-link>
              </div>
            </div>
          </div>
          <div class="card-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cusomers-main'
  };
</script>
