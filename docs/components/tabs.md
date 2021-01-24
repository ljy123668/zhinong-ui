---
title:Tabs
---

# Tabs-标签页

选项卡切换组件。

#### 使用方法:

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

#### 示例代码:

```
data() {
    return {
      selectedTab: "3",
      selectedTab2: "1",
    };
},

<z-tabs :selected.sync="selectedTab">
    <z-tabs-head>
        <z-tabs-item name="1"> 标题一 </z-tabs-item>
        <z-tabs-item name="2"> 标题二 </z-tabs-item>
        <z-tabs-item name="3"> 标题三</z-tabs-item>
    </z-tabs-head>
    <z-tabs-body>
        <z-tabs-pane name="1"> 内容一 </z-tabs-pane>
        <z-tabs-pane name="2"> 内容二</z-tabs-pane>
        <z-tabs-pane name="3"> 内容三 </z-tabs-pane>
    </z-tabs-body>
</z-tabs>
<z-tabs :selected.sync="selectedTab2">
    <z-tabs-head>
        <z-tabs-item name="1"> 标题一 </z-tabs-item>
        <z-tabs-item name="2" disabled> 标题二 </z-tabs-item>
        <z-tabs-item name="3"> 标题三</z-tabs-item>
    </z-tabs-head>
    <z-tabs-body>
        <z-tabs-pane name="1"> 内容一 </z-tabs-pane>
        <z-tabs-pane name="2"> 内容二</z-tabs-pane>
        <z-tabs-pane name="3"> 内容三 </z-tabs-pane>
    </z-tabs-body>
</z-tabs>

```

# Attributes

### Tabs

|   参数   |   说明   |  类型  | 可选值 | 默认值 |
| :------: | :------: | :----: | :----: | :----: |
| selected | 当前选中 | String |  name  |   --   |

### TabsHeadItem

|   参数   |      说明      |  类型   |   可选值   | 默认值 |
| :------: | :------------: | :-----: | :--------: | :----: |
|   name   | 唯一标识，必选 | String  |     --     |   --   |
| disabled |  设置是否禁用  | Boolean | true,false | false  |

### TabsBodyPane

| 参数 |      说明      |  类型  | 可选值 | 默认值 |
| :--: | :------------: | :----: | :----: | :----: |
| name | 唯一标识，必选 | String |   --   |   --   |
