<template>
  <button
    class="z-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <z-icon v-if="icon && !loading" class="icon" :name="icon"></z-icon>
    <z-icon v-if="loading" class="loading icon" name="loading"></z-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon";
export default {
  components: {
    "z-icon": Icon,
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        // console.log(value);
        return value === "left" || value === "right";
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "var";
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.z-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }

  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.1em;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>