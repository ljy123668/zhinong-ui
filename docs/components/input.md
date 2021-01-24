---
title:Input
---

# Input-输入框

#### 使用方法:

<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

#### 示例代码:

```
<z-input value="默认内容" disabled></z-input>
<z-input value="默认内容" readonly></z-input>
<z-input value="默认内容"></z-input>
<z-input placeholder="请输入内容"></z-input>
<z-input @change="inputChange" v-model="message"></z-input>
<p>{{ message }}</p>
<z-input error="字数不能少于3个字"></z-input>

```

# Attributes

|    参数     |     说明     |  类型   |   可选值    | 默认值 |
| :---------: | :----------: | :-----: | :---------: | :----: |
|    value    | 设置默认内容 | String  |     --      |   --   |
|  disabled   | 是否禁用状态 | Boolean | true, false | false  |
|  readonly   | 是否只读状态 | Boolean | true, false | false  |
| placeholder |   提示信息   | String  |     --      |   --   |
|    error    |   错误信息   | String  |     --      |   --   |
