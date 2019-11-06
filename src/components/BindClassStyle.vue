<template>
  <div id="messageApp" class="container">
    <button class="btn btn-info" @click="back">Back</button>
    <input
      class="btn btn-info"
      type="button"
      v-bind:disabled="isShowButton"
      value="Button bind_att Disabled"
    />
    <input
      class="btn btn-info"
      type="button"
      v-bind:disabled="!isShowButton"
      value="Button bind_att Enabled"
    />
    <input type="button" v-bind:class="isShowButton" value="bind class" class="btn btn-info active" />
    <!-- xoa du lieu su dung method -->
    <p>Giá trị ban đầu: "{{ message }}"</p>
    <p>Giá trị sau khi chuyển đổi: "{{ reverseMessage }}"</p>
    <p>"{{ showMessage() }}"</p>

    <!-- chuyển từ số thành chữ -->
    <input type="text" v-model="number" />
    <!-- <p>Number: "{{ number }}"</p> -->
    <p>Number To Word: "{{ ShowNumberWord }}"</p>
    <!-- watcher -->
    <p style="color:red;">watcher</p>
    <input type="text" v-model="name" />
    <p>{{ name }}</p>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  data() {
    return {
      isShowButton: false,
      message: "Chào mừng đến với freetuts.net",
      number: "12345",
      name: "Dang Quoc Cuong"
    };
  },
  methods: {
    showMessage: function() {
      return "[" + this.message + "]";
    },
    back: function() {
      window.location = "http://localhost:8080/#/";
    }
  },
  computed: {
    reverseMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    ShowNumberWord: function() {
      // console.log("Có gọi");
      var message = "";
      for (var i = 0; i < this.number.length; i++) {
        if (this.number[i] == "1") {
          message += "Một ";
        } else if (this.number[i] == "2") {
          message += "Hai ";
        } else if (this.number[i] == "3") {
          message += "Ba ";
        } else if (this.number[i] == "4") {
          message += "Bốn ";
        } else if (this.number[i] == "5") {
          message += "Năm ";
        } else if (this.number[i] == "6") {
          message += "Sáu ";
        } else if (this.number[i] == "7") {
          message += "Bảy ";
        } else if (this.number[i] == "8") {
          message += "Tám ";
        } else if (this.number[i] == "9") {
          message += "Chín ";
        } else if (this.number[i] == "0") {
          message += "Không ";
        }
      }
      return message;
    }
  },
  watch: {
    name: function() {
      alert(this.name);
    }
  }
};
</script>

<style scoped>
.active {
  border: solid 1px red;
}
</style>>

