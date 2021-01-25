---
title:快速上手
---

# 快速上手

### npm 安装

```
npm i zhinong-ui -S
```

### 开始使用

1.添加 CSS 样式
使用本框架前，请确保整个项目的 CSS 开启了 border-box

```
*,*::before,*::after{box-sizing: border-box;}


```

IE 8 及以上浏览器都支持此样式

2.引入 zhinong-ui

按需引入需要的组件，以达到减小项目体积的目的。

需要注意的是，样式文件要记得引入。

```
import {Button, ButtonGroup, Icon} from 'zhinong-ui'
import 'zhinong-ui/dist/index.css'

export default {
  name: 'app',
  components: {
    'z-button': Button,
    'z-icon': Icon
  }
}

```

#### 完整组件列表和引入方式

```
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
```
