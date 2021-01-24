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
import Toast from './toast.vue'
import plugin from './plugin'
import Tabs from './Tabs/tabs'
import TabsHeader from './Tabs/tabs-head'
import TabsBody from './Tabs/tabs-body'
import TabsItem from './Tabs/tabs-item'
import TabsPane from './Tabs/tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

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
Vue.component('z-toast', Toast)
Vue.component('z-tabs', Tabs)
Vue.component('z-tabs-head', TabsHeader)
Vue.component('z-tabs-body', TabsBody)
Vue.component('z-tabs-item', TabsItem)
Vue.component('z-tabs-pane', TabsPane)
Vue.component('z-popover', Popover)
Vue.component('z-collapse', Collapse)
Vue.component('z-collapse-item', CollapseItem)
Vue.use(plugin)

new Vue({
  el: '#app',
  methods: {
    yyy() {
      console.log('yyy')
    },
  }
})