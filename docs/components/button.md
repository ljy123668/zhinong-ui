---
title:Button
---

# Button-按钮

按钮用于开始一个即时操作。

#### 使用方法:

<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

#### 示例代码:

```
<z-button>默认按钮</z-button>
<z-button :loading="loading" @click="loading = !loading">加载按钮</z-button>
<z-button icon="setting"> 图标按钮 </z-button>
<z-button icon="setting" icon-position="right"> 图标按钮 </z-button>
<z-button disabled> 禁用按钮 </z-button>
```

# ButtonGroup-组合按钮

#### 使用方法:

<ClientOnly>
<button-group-demos></button-group-demos>
</ClientOnly>

#### 示例代码:

```
<z-button-group>
    <z-button icon="left"> 上一页 </z-button>
    <z-button> 确定 </z-button>
    <z-button icon="right" icon-position="right"> 下一页 </z-button>
</z-button-group>
```

# Attributes

|     参数     |      说明       |  类型   |                            可选值                             | 默认值 |
| :----------: | :-------------: | :-----: | :-----------------------------------------------------------: | :----: |
|     icon     | 设置内置的 icon | String  | info,error,loading,setting,left,thumbs-up,down,download,right |   --   |
| iconPosition |    图标位置     | String  |                          left、right                          |  left  |
|   loading    |    加载状态     | Boolean |                          true、false                          | false  |
