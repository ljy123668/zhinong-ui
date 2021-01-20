import Vue from 'vue';
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Content from './Layout/content.vue'
import Footer from './Layout/footer.vue'
import Header from './Layout/header.vue'
import Layout from './Layout/layout.vue'
import Sider from './Layout/sider.vue'
Vue.component('z-button', Button)
Vue.component('z-icon', Icon)
Vue.component('z-button-group', ButtonGroup)
Vue.component('z-input', Input)
Vue.component('z-row', Row)
Vue.component('z-col', Col)
Vue.component('z-sider', Sider)
Vue.component('z-layout', Layout)
Vue.component('z-header', Header)
Vue.component('z-footer', Footer)
Vue.component('z-content', Content)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi'
  },
  methods: {
    inputChange(e) {
      console.log('hi', e.target.value);
    }
  }
})