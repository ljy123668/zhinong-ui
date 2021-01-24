<template>
  <div class="wrapper">
    <z-input value="默认内容" disabled></z-input>
    <z-input value="默认内容" readonly></z-input>
    <z-input value="默认内容"></z-input>
    <z-input placeholder="请输入内容"></z-input>

    <z-input @change="inputChange" v-model="message"></z-input>
    <p>{{ message }}</p>

    <z-input error="字数不能少于3个字"></z-input>
  </div>
</template>

<script>
import Input from "../../../src/input";

export default {
  components: {
    "z-input": Input,
  },
  data() {
    return {
      message: "默认内容",
    };
  },
  methods: {
    inputChange(e) {
      console.log("hi", e.target.value);
    },
  },
};
</script>

<style >
.wrapper {
  margin-top: 10px;
}
</style>