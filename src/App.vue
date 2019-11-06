<template>
  <div class="container">
      <router-view></router-view>
      <!-- <app-user></app-user> -->

  </div>
</template>

<script>
import User from "./components/HelloWorld.vue";
import "bootstrap/dist/css/bootstrap.css";

export default {
  components: {
    appUser: User
  }
};
</script>

<style>
</style>
