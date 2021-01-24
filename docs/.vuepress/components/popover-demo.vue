<template>
  <div class="wrapper">
    <div>
      <z-popover>
        <template slot="content">
          <strong style="color: #f1453d">加粗的提示</strong>
        </template>
        <z-button>上面弹出</z-button>
      </z-popover>
      <z-popover position="bottom">
        <template slot="content" slot-scope="{ close }">
          <div>popover 内容<z-button @click="close">关闭</z-button></div>
        </template>
        <z-button>下面弹出</z-button>
      </z-popover>
      <z-popover position="left">
        <template slot="content">
          <div>popover 内容</div>
        </template>
        <z-button>左边弹出</z-button>
      </z-popover>
      <z-popover position="right">
        <template slot="content">
          <div>popover 内容</div>
        </template>
        <z-button>右边弹出</z-button>
      </z-popover>
    </div>
  </div>
</template>

<script>
import Popover from "../../../src/popover";
import Button from "../../../src/button";
export default {
  components: {
    "z-popover": Popover,
    "z-button": Button,
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