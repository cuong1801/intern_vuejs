<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 content">
        <p>::::::::::Trang chủ::::::::::</p>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary" v-on:click="bind()">computed-watch</button>
          <button type="button" class="btn btn-secondary" v-on:click="props()">Components-props</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    bind: function() {
      window.location="http://localhost:8080/#/bind";
     
    },
    props: function() {
      window.location="http://localhost:8080/#/dashboard";
    },
    propsvali: function() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  text-align: center;
}
</style>
