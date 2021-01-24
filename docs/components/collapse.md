---
title:Collapse
---

# Collapse-折叠面板

#### 单个显示:

<ClientOnly>
<collapse-demo></collapse-demo>
</ClientOnly>

#### 示例代码:

```
<z-collapse :selected.sync="selectedTab" single>
    <z-collapse-item title="标题1" name="1"> 内容1 </z-collapse-item>
    <z-collapse-item title="标题2" name="2"> 内容2 </z-collapse-item>
    <z-collapse-item title="标题3" name="3"> 内容3 </z-collapse-item>
</z-collapse>

```

#### 多行显示:

<ClientOnly>
<collapse-demo2></collapse-demo2>
</ClientOnly>

#### 示例代码:

```
<z-collapse :selected.sync="selectedTab" >
    <z-collapse-item title="标题1" name="1"> 内容1 </z-collapse-item>
    <z-collapse-item title="标题2" name="2"> 内容2 </z-collapse-item>
    <z-collapse-item title="标题3" name="3"> 内容3 </z-collapse-item>
</z-collapse>

```

# Attributes

### Collapse

|   参数   |     说明     |  类型   |   可选值    | 默认值 |
| :------: | :----------: | :-----: | :---------: | :----: |
| selected |    选中项    |  Array  |     --      |   []   |
|  single  | 是否单一展示 | Boolean | true、false | false  |

### CollapseItem

| 参数  |      说明      |  类型  | 可选值 | 默认值 |
| :---: | :------------: | :----: | :----: | :----: |
| title |      标题      | String |   --   |   --   |
| name  | 唯一标识，必填 | String |   --   |   --   |
