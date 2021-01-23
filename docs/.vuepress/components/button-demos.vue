<template>
  <div>
    <z-button>默认按钮</z-button>
    <z-button :loading="true"> 按钮 </z-button>
    <z-button icon="setting" icon-position="left" :loading="true">
      按钮
    </z-button>
    <z-button icon="setting" icon-position="right" :loading="true">
      按钮
    </z-button>
    <z-button icon="setting" icon-position="right" disabled> 按钮 </z-button>
    <pre><code>{{content}}</code></pre>
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
      content: `
        <z-button>默认按钮</z-button>
        <z-button :loading="true"> 按钮 </z-button>
        <z-button icon="setting" icon-position="left" :loading="true">按钮</z-button>
        <z-button icon="setting" icon-position="right" :loading="true">按钮</z-button>
        <z-button icon="setting" icon-position="right" disabled> 按钮 </z-button>
      `
        .replace(/\t+| +/g, "")
        .trim(),
    };
  },
};
</script>
