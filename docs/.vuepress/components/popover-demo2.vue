<template>
  <div class="wrapper">
    <div style="overflow: hidden">
      <z-popover trigger="hover">
        <template slot="content">
          <div>popover 内容</div>
        </template>
        <z-button>上面弹出</z-button>
      </z-popover>
      <z-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>popover 内容</div>
        </template>
        <z-button>下面弹出</z-button>
      </z-popover>
      <z-popover position="left" trigger="hover">
        <template slot="content">
          <div>popover 内容</div>
        </template>
        <z-button>左边弹出</z-button>
      </z-popover>
      <z-popover position="right" trigger="hover">
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