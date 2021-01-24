<template>
  <div>
    <z-row class="demoRow">
      <z-col span="8"><div class="demoCol">8</div></z-col>
      <z-col span="8"><div class="demoCol">8</div></z-col>
      <z-col span="8"><div class="demoCol">8</div></z-col>
    </z-row>
    <z-row class="demoRow">
      <z-col span="6"><div class="demoCol">6</div></z-col>
      <z-col span="6"><div class="demoCol">6</div></z-col>
      <z-col span="6"><div class="demoCol">6</div></z-col>
      <z-col span="6"><div class="demoCol">6</div></z-col>
    </z-row>
    <z-row class="demoRow">
      <z-col span="4"><div class="demoCol">4</div></z-col>
      <z-col span="4"><div class="demoCol">4</div></z-col>
      <z-col span="4"><div class="demoCol">4</div></z-col>
      <z-col span="4"><div class="demoCol">4</div></z-col>
      <z-col span="4"><div class="demoCol">4</div></z-col>
      <z-col span="4"><div class="demoCol">4</div></z-col>
    </z-row>
    <z-row class="demoRow">
      <z-col span="2"><div class="demoCol">2</div></z-col>
      <z-col span="2"><div class="demoCol">2</div></z-col>
      <z-col span="2"><div class="demoCol">2</div></z-col>
      <z-col span="2"><div class="demoCol">2</div></z-col>
      <z-col span="2"><div class="demoCol">2</div></z-col>
      <z-col span="2"><div class="demoCol">2</div></z-col>
      <z-col span="2"><div class="demoCol">2</div></z-col>
      <z-col span="2"><div class="demoCol">2</div></z-col>
      <z-col span="2"><div class="demoCol">2</div></z-col>
      <z-col span="2"><div class="demoCol">2</div></z-col>
      <z-col span="2"><div class="demoCol">2</div></z-col>
      <z-col span="2"><div class="demoCol">2</div></z-col>
    </z-row>

    <!-- <z-row gutter="20" class="demoRow">
      <z-col
        span="2"
        :ipad="{ span: 8 }"
        :narrpw-pc="{ span: 4 }"
        :pc="{ span: 2 }"
        :wide-pc="{ span: 1 }"
        >11
      </z-col>
      <z-col
        span="22"
        :ipad="{ span: 16 }"
        :narrpw-pc="{ span: 20 }"
        :pc="{ span: 22 }"
        :wide-pc="{ span: 23 }"
        >2
      </z-col>
    </z-row>
   -->
  </div>
</template>

<script>
import Row from "../../../src/row.vue";
import Col from "../../../src/col.vue";
export default {
  components: {
    "z-row": Row,
    "z-col": Col,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.demoRow {
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #fff;
  background: rgba(0, 160, 233, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
