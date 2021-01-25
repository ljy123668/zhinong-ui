---
title:Toast
---

# Toast-文字提示

#### 引用方法:

```js
import Vue from "vue";
import Button from "../../../src/button.vue";
import plugin from "../../../src/plugin";
Vue.use(plugin);
```

#### 使用方法:

<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

#### 示例代码:

```html
<z-button @click="showToast">上方弹出</z-button>
<z-button @click="showToast('middle')">中间弹出</z-button>
<z-button @click="showToast('bottom')">下方弹出</z-button>
```

```js
showToast(e) {
    this.$toast("你的智商需要充值", {
        enableHtml: true,
        position: e,
        autoClose: 333,
    });
},
```

#### 设置关闭按钮:

<ClientOnly>
<toast-demo2></toast-demo2>
</ClientOnly>

#### 示例代码:

```html
<z-button @click="showToast">上方弹出</z-button>
```

```js
showToast() {
    this.$toast("你的智商需要充值", {
    enableHtml: true,
    closeButton: {
        text: "已充值",
        callback() {
        console.log("需要充值");
        },
    },
    autoClose: 3,
    });
},
```

#### 支持传入 HTML:

<ClientOnly>
<toast-demo3></toast-demo3>
</ClientOnly>

#### 示例代码:

```html
<z-button @click="showToast">上方弹出</z-button>
```

```js
showToast() { this.$toast('<strong style="color:red;">加粗的提示</strong>', {
    enableHtml: true,
    autoClose: 3,
    });
},
```

# Attributes

|    参数     |           说明           |  类型   |                    可选值                    |                默认值                |
| :---------: | :----------------------: | :-----: | :------------------------------------------: | :----------------------------------: |
|   message   | 显示内容，函数第一个参数 | String  |                      --                      |                  --                  |
|   object    |   函数接受的第二个参数   | String  | autoClose, closeButton, enableHtml, position |                  --                  |
|  position   |         设置位置         | String  |             top、middle、bottom              |                 top                  |
|  autoClose  |       是否自动关闭       | Boolean |                 true、false                  |                 true                 |
| closeButton |       设置关闭按钮       | Object  |                      --                      | {message:'关闭', callback:undefined} |
| enableHtml  |    是否支持 html 内容    | Boolean |                 true、false                  |                false                 |
