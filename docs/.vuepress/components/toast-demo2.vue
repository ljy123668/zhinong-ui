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
      this.$toast("你的智商需要充值", {
        enableHtml: true,
        closeButton: {
          text: "已充值",
          callback() {
            console.log("需要充值");
          },
        },
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