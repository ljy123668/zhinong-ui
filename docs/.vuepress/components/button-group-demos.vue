<template>
  <div class="wrapper">
    <z-button-group>
      <z-button icon="left"> 上一页 </z-button>
      <z-button> 确定 </z-button>
      <z-button icon="right" icon-position="right"> 下一页 </z-button>
    </z-button-group>
  </div>
</template>

<script>
import Button from "../../../src/button.vue";
import ButtonGroup from "../../../src/button-group.vue";
export default {
  components: {
    "z-button": Button,
    "z-button-group": ButtonGroup,
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