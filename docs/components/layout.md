---
title:Layout
---

# Layout-布局

#### 页面布局一:

<ClientOnly>
<layout-demo></layout-demo>
</ClientOnly>

#### 示例代码:

```
<z-layout>
    <z-header style="height: 50px; background: rgba(0, 160, 233, 0.7)">header</z-header>
    <z-content style="height: 100px; background: rgba(0, 120, 200, 0.7)">content</z-content>
    <z-footer style="height: 50px; background: rgba(0, 160, 233, 0.7)">footer</z-footer>
</z-layout>

```

#### 页面布局二:

<ClientOnly>
<layout-demo2></layout-demo2>
</ClientOnly>

#### 示例代码:

```
<z-layout>
    <z-header style="height: 50px; background: rgba(0, 160, 233, 0.7)">
        header
    </z-header>
    <z-layout>
    <z-sider style="height: 100px; background: #ddd; width: 200px">
        sider
    </z-sider>
    <z-content style="height: 100px; background: rgba(0, 120, 200, 0.7)">
        content
    </z-content>
    </z-layout>
    <z-footer style="height: 50px; background: rgba(0, 160, 233, 0.7)">
        footer
    </z-footer>
</z-layout>
```

#### 页面布局三:

<ClientOnly>
<layout-demo3></layout-demo3>
</ClientOnly>

#### 示例代码:

```
<z-layout>
    <z-sider style="background: #ddd; width: 200px"> sider </z-sider>
    <z-layout>
        <z-header style="height: 50px; background: rgba(0, 160, 233, 0.7)">
            header
        </z-header>
        <z-content style="height: 100px; background: rgba(0, 120, 200, 0.7)">
            content
        </z-content>
        <z-footer style="height: 50px; background: rgba(0, 160, 233, 0.7)">
            footer
        </z-footer>
    </z-layout>
</z-layout>

```
