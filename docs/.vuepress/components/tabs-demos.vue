<template>
  <div class="wrapper">
    <div>
      <z-tabs :selected.sync="selectedTab">
        <z-tabs-head>
          <z-tabs-item name="1"> 标题一 </z-tabs-item>
          <z-tabs-item name="2"> 标题二 </z-tabs-item>
          <z-tabs-item name="3"> 标题三</z-tabs-item>
        </z-tabs-head>
        <z-tabs-body>
          <z-tabs-pane name="1"> 内容一 </z-tabs-pane>
          <z-tabs-pane name="2"> 内容二</z-tabs-pane>
          <z-tabs-pane name="3"> 内容三 </z-tabs-pane>
        </z-tabs-body>
      </z-tabs>
    </div>
    <div>
      <z-tabs :selected.sync="selectedTab2">
        <z-tabs-head>
          <z-tabs-item name="1"> 标题一 </z-tabs-item>
          <z-tabs-item name="2" disabled> 标题二 </z-tabs-item>
          <z-tabs-item name="3"> 标题三</z-tabs-item>
        </z-tabs-head>
        <z-tabs-body>
          <z-tabs-pane name="1"> 内容一 </z-tabs-pane>
          <z-tabs-pane name="2"> 内容二</z-tabs-pane>
          <z-tabs-pane name="3"> 内容三 </z-tabs-pane>
        </z-tabs-body>
      </z-tabs>
    </div>
  </div>
</template>

<script>
import Tabs from "../../../src/Tabs/tabs";
import TabsHeader from "../../../src/Tabs/tabs-head";
import TabsBody from "../../../src/Tabs/tabs-body";
import TabsItem from "../../../src/Tabs/tabs-item";
import TabsPane from "../../../src/Tabs/tabs-pane";
export default {
  components: {
    "z-tabs": Tabs,
    "z-tabs-head": TabsHeader,
    "z-tabs-body": TabsBody,
    "z-tabs-item": TabsItem,
    "z-tabs-pane": TabsPane,
  },
  data() {
    return {
      selectedTab: "3",
      selectedTab2: "1",
    };
  },
};
</script>

<style >
.wrapper {
  margin-top: 10px;
}
</style>