<template>
  <div class="component bg-warning">
    <h3>User Details</h3>
    <p>Tuoi toi:</p>
    <div class="row">
      <div class="col-md-8">
        <p>{{name}}</p>
        <p>Giá trị ban đầu: "{{ message }}"</p>
        <button class="btn btn-info" v-on:click="change">Change</button>
      </div>
      <div class="col-md-8">
        <p>Giá trị sau khi chuyển đổi: "{{message}}"</p>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  // sử dụng props
  props: {
    message: {
        type:Object,
        default: 'Nhập vô đi má'
    }
  },
  data() {
    return {
      //   message: "Chào mừng đến với freetuts.net",
      //   name: "cuong"
    };
  },
  methods: {
    change: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }

    // showMessage: function() {
    //   return this.message
    //     .split("")
    //     .reverse()
    //     .join("");
    // }
  }
};
</script>

<style scoped>
</style>