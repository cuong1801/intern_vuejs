<template>
  <div class="row">
    <div class="col-md-12">
      <p>Ten toi la {{ name }}</p>
      <p>Toi nam nay {{ age }} tuoi</p>
      <button class="btn btn-info" @click="back">Back</button>

      <hr />
    </div>
    <div class="col-md-8">
      <!-- sử dụng props -->
      <!-- test có không sử dụng validation -->
      <app-user-detail :message="name"></app-user-detail>
      <!-- test có dùng validation -->
      <app-user-detail></app-user-detail>
    </div>
    <div class="col-md-4">
      <app-user-edit></app-user-edit>
    </div>
  </div>
</template>


<script>
import "bootstrap/dist/css/bootstrap.css";
import UserDetail from "@/components/UserDetail.vue";
import UserEdit from "@/components/UserEdit.vue";
export default {
  data: function() {
    return {
      name: "sdsd",
      age: 23
    };
  },
  methods: {
    back: function() {
      window.location="http://localhost:8080/#/";
     
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
p {
  text-align: center;
}

</style>