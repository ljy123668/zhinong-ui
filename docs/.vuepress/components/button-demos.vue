<template>
  <div class="wrapper">
    <z-button>默认按钮</z-button>
    <z-button :loading="loading" @click="loading = !loading">
      加载按钮
    </z-button>
    <z-button icon="setting"> 图标按钮 </z-button>
    <z-button icon="setting" icon-position="right"> 图标按钮 </z-button>
    <z-button disabled> 禁用按钮 </z-button>
  </div>
</template>

<script>
import Button from "../../../src/button.vue";
export default {
  components: {
    "z-button": Button,
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>
<style >
.wrapper {
  margin-top: 10px;
}
</style>