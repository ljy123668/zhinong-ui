<template>
  <div class="tabs-body"><slot></slot></div>
</template>
<script>
export default {
  name: "ZhinongTabsBody",
  inject: ["eventBus"],
};
</script>
<style lang="scss">
.tabs-body {
}
</style>