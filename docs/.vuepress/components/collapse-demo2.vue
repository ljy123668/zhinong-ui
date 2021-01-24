<template>
  <div class="wrapper">
    <z-collapse :selected.sync="selectedTab">
      <z-collapse-item title="标题1" name="1"> 内容1 </z-collapse-item>
      <z-collapse-item title="标题2" name="2"> 内容2 </z-collapse-item>
      <z-collapse-item title="标题3" name="3"> 内容3 </z-collapse-item>
    </z-collapse>
  </div>
</template>

<script>
import Collapse from "../../../src/collapse";
import CollapseItem from "../../../src/collapse-item";
export default {
  components: {
    "z-collapse": Collapse,
    "z-collapse-item": CollapseItem,
  },
  data() {
    return {
      selectedTab: ["1"],
    };
  },
};
</script>
<style >
.wrapper {
  margin-top: 10px;
}
</style>