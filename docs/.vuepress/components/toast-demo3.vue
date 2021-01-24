<template>
  <div class="wrapper">
    <z-button @click="showToast">上方弹出</z-button>
  </div>
</template>

<script>
import Vue from "vue";
import Button from "../../../src/button.vue";
import plugin from "../../../src/plugin";
Vue.use(plugin);

export default {
  components: {
    "z-button": Button,
  },
  data() {
    return {};
  },
  methods: {
    showToast() {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true,
        autoClose: 3,
      });
    },
  },
};
</script>

<style >
.wrapper {
  margin-top: 10px;
}
</style>