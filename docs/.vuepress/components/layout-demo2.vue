<template>
  <div class="wrapper">
    <z-layout>
      <z-header style="height: 50px; background: rgba(0, 160, 233, 0.7)">
        header
      </z-header>
      <z-layout>
        <z-sider style="height: 100px; background: #ddd; width: 200px">
          sider
        </z-sider>
        <z-content style="height: 100px; background: rgba(0, 120, 200, 0.7)">
          content
        </z-content>
      </z-layout>
      <z-footer style="height: 50px; background: rgba(0, 160, 233, 0.7)">
        footer
      </z-footer>
    </z-layout>
  </div>
</template>

<script>
import Content from "../../../src/Layout/content.vue";
import Footer from "../../../src/Layout/footer.vue";
import Header from "../../../src/Layout/header.vue";
import Layout from "../../../src/Layout/layout.vue";
import Sider from "../../../src/Layout/sider.vue";

export default {
  components: {
    "z-sider": Sider,
    "z-layout": Layout,
    "z-header": Header,
    "z-footer": Footer,
    "z-content": Content,
  },
  data() {
    return {};
  },
};
</script>

<style >
.wrapper {
  margin-top: 10px;
}
</style>