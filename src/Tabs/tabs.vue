<template>
  <div class="tabs"><slot></slot></div>
</template>
<script>
import Vue from "vue";
export default {
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    if (this.$children.length === 0) {
      console &&
        console.wran &&
        console.wran("tabs的子组件应该是tabs-head和tabs-body,但你没有写子组件");
    }
    this.$children.forEach((vm) => {
      if (vm.$options.name === "ZhinongTabsHead") {
        vm.$children.forEach((childVm) => {
          if (
            childVm.$options.name === "ZhinongTabsItem" &&
            childVm.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, childVm);
          }
        });
      }
    });
  },
};
</script>
<style lang="scss">
.tabs {
}
</style>