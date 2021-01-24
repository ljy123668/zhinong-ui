<template>
  <div class="wrapper">
    <z-button @click="showToast">上方弹出</z-button>
    <z-button @click="showToast('middle')">中间弹出</z-button>
    <z-button @click="showToast('bottom')">下方弹出</z-button>
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
    showToast(e) {
      this.$toast("你的智商需要充值", {
        enableHtml: true,
        position: e,
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