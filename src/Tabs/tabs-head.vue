<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ZhinongTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      console.log(vm.$el.getBoundingClientRect());
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      console.log(width, height, top, left);
      this.$refs.line.style.left = `${left}px`;
    });
  },
};
</script>
<style lang="scss">
$tab-height: 40px;
$blue: blue;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;

  border: 1px solid red;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 4px solid $blue;
    transition: all 350ms;
  }
  & .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>