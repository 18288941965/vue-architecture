# Vue 3 + TypeScript + Vite

本架构意在指导后续搭建vue项目，包括目录结构的规划，代码的规范和约束等等内容。

vue3 开发规范：

### https://cn.vuejs.org/style-guide/

eslint 中文文档：
### https://eslint.nodejs.cn/docs/


## CSS属性定义顺序
本项目所遵循的css属性顺序规范==（子属性紧跟主属性）==

1. content
2. 布局属性（Box Model）：包括position、display、float、clear等。
3. 盒模型属性：包括width、height、padding、border、margin等。
4. 文字属性：包括color、font、text-align、text-decoration等。
5. 背景属性：包括background-color、background-image、background-position等。
6. 盒阴影属性：包括box-shadow、text-shadow等。
7. 文本属性：包括text-indent、text-transform、text-overflow等。
8. 表格布局属性：包括table-layout、border-collapse等。
9. 动画属性：包括transition、animation等。
10. 其他属性：包括opacity、cursor、z-index等。

### 常见错误

1、安装node包异常

```
Error: EPERM: operation not permitted, unlink 'E:\vuevte\node_modules\@esbuild\win32-x64\esbuild.exe'
```

解决方式：停止前端项目并清空缓存，重新安装即可。

2、页面缓存无效
```
<keep-alive :include="keepAliveInclude">
<script setup lang="ts">
```
解决方式：不加include就能正常缓存，如果必须用include则只能采用原生的写法。

### 本系统遵循的命名规范
1. 文件夹名全部小写（示例：system-header）
2. ts文件全部采用小驼峰方式命名（示例：menuIndex）
3. vue文件名全部小写（示例：menu-index）
4. vue内部name使用大驼峰方式命名（示例：MenuIndex）