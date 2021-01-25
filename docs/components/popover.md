---
title:Popover
---

# Popover-弹出框

#### 支持 HTML:

<ClientOnly>
<popover-demo></popover-demo>
</ClientOnly>

#### 示例代码:

```html
<z-popover>
  <template slot="content">
    <strong style="color: #f1453d">加粗的提示</strong>
  </template>
  <z-button>上面弹出</z-button>
</z-popover>
<z-popover position="bottom">
  <template slot="content" slot-scope="{ close }">
    <div>popover 内容<z-button @click="close">关闭</z-button></div>
  </template>
  <z-button>下面弹出</z-button>
</z-popover>
<z-popover position="left">
  <template slot="content">
    <div>popover 内容</div>
  </template>
  <z-button>左边弹出</z-button>
</z-popover>
<z-popover position="right">
  <template slot="content">
    <div>popover 内容</div>
  </template>
  <z-button>右边弹出</z-button>
</z-popover>
```

#### 支持 hover 触发:

<ClientOnly>
<popover-demo2></popover-demo2>
</ClientOnly>

#### 示例代码:

```html
<z-popover trigger="hover">
  <template slot="content">
    <div>popover 内容</div>
  </template>
  <z-button>上面弹出</z-button>
</z-popover>
<z-popover position="bottom" trigger="hover">
  <template slot="content">
    <div>popover 内容</div>
  </template>
  <z-button>下面弹出</z-button>
</z-popover>
<z-popover position="left" trigger="hover">
  <template slot="content">
    <div>popover 内容</div>
  </template>
  <z-button>左边弹出</z-button>
</z-popover>
<z-popover position="right" trigger="hover">
  <template slot="content">
    <div>popover 内容</div>
  </template>
  <z-button>右边弹出</z-button>
</z-popover>
```

# Attributes

|   参数   |             说明             |  类型  |          可选值          | 默认值 |
| :------: | :--------------------------: | :----: | :----------------------: | :----: |
| position | 设置弹出框相对触发区域的位置 | String | left、right、top、bottom |  top   |
| trigger  |         设置触发模式         | String |       click、hover       | click  |
