---
title:Grid
---

# Grid-布局

#### 基础网格:

<ClientOnly>
<grid-demos></grid-demos>
</ClientOnly>

#### 示例代码:

```html
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
```

#### 区块间隔 :

<ClientOnly>
<grid-demos2></grid-demos2>
</ClientOnly>

#### 示例代码:

```html
<z-row class="demoRow" gutter="10">
  <z-col span="8"><div class="demoCol">8</div></z-col>
  <z-col span="8"><div class="demoCol">8</div></z-col>
  <z-col span="8"><div class="demoCol">8</div></z-col>
</z-row>
<z-row class="demoRow" gutter="10">
  <z-col span="6"><div class="demoCol">6</div></z-col>
  <z-col span="6"><div class="demoCol">6</div></z-col>
  <z-col span="6"><div class="demoCol">6</div></z-col>
  <z-col span="6"><div class="demoCol">6</div></z-col>
</z-row>
```

#### offset 设置间隔 :

<ClientOnly>
<grid-demos3></grid-demos3>
</ClientOnly>

#### 示例代码:

```html
<z-row class="demoRow" gutter="10">
  <z-col span="8"><div class="demoCol">8</div></z-col>
  <z-col span="8" offset="8"><div class="demoCol">8</div></z-col>
</z-row>
<z-row class="demoRow" gutter="10">
  <z-col span="6"><div class="demoCol">6</div></z-col>
  <z-col span="6"><div class="demoCol">6</div></z-col>
  <z-col span="6" offset="6"><div class="demoCol">6</div></z-col>
</z-row>
<z-row gutter="20" class="demoRow">
  <z-col span="4"><div class="demoCol">4</div></z-col>
  <z-col span="18" offset="2"><div class="demoCol">18</div></z-col>
</z-row>
```

# Attributes

### Row

|  参数  |   说明   |      类型      |       可选值        | 默认值 |
| :----: | :------: | :------------: | :-----------------: | :----: |
| gutter |   间距   | String、Number |         --          |   0    |
| align  | 对齐方式 |     String     | left、center、right |  left  |

### Col

|   参数   |        说明        |      类型      |            可选值            | 默认值 |
| :------: | :----------------: | :------------: | :--------------------------: | :----: |
|   span   |   栅格占据的列数   | String、Number |             1-24             |   --   |
|  offset  |   栅格占据的列数   | String、Number |             1-24             |   --   |
|   ipad   |  ipad 响应式布局   | Number、Object | span 数字或{span:1;offset:1} |   --   |
| narrowPc |  窄屏幕响应式布局  | Number、Object | span 数字或{span:1;offset:1} |   --   |
|    pc    | 普通电脑响应式布局 | Number、Object | span 数字或{span:1;offset:1} |   --   |
|  widePc  |   宽屏响应式布局   | Number、Object | span 数字或{span:1;offset:1} |   --   |
