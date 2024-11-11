<template>
  <div class="workbench-index" style="border: 1px solid;width: 360px;height: 400px;margin: auto;
  margin-top: 100px;line-height: 40px;">
    <ul>
      <li>
        <router-link
            to="/admin/theme2"
            target="_blank"
        >
          <h5>后台管理模板 / 适用单模块</h5>
        </router-link>
      </li>

      <li>
        <router-link
            to="/admin/theme3"
            target="_blank"
        >
          <h5>后台管理模板 / 适用多模块</h5>
        </router-link>
      </li>

      <li>
        <router-link
            to="/details/index"
            target="_blank"
        >
          <h5>详细信息展现元素</h5>
        </router-link>
      </li>

      <li>VUE 类似手机应用管理页面</li>
      <li>VUE 各种类型字典选择组件</li>
      <li>VUE 表格分页组件</li>
      <li>动态大屏组件</li>
      <li>Dialog弹出多类型封装</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'WorkbenchIndex',
})
</script>

<style scoped lang="scss">
  .workbench-index{
    & ul li{
      background-color: #EBEEF5;
      margin: 5px;
      padding: 0 20px;
    }
  }

</style>