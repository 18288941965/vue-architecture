<template>
  <div class="workbench-index">
    <section>
      <router-link
          to="/admin/theme2"
          target="_blank"
          class="wb-link"
      >
        后台管理模板
      </router-link>
      <p>
        适用于首页为应用中心，点击应用后调整到新的浏览器tab页面，页面缓存数据，但是没有菜单的点击记录。
        注：其他页面退出或者切换任职机构，所有的tab页面都需要刷新！
      </p>
    </section>

    <section>
      <router-link
          to="/admin/theme3"
          target="_blank"
          class="wb-link"
      >
        后台管理模板
      </router-link>
      <p>
        适用于所有菜单在左侧展示！顶部有历史记录。
      </p>
    </section>

    <section>
      <router-link
          to="/admin/theme4"
          target="_blank"
          class="wb-link"
      >
        开发测试页面，形成组件后及时移动到对应的位置
      </router-link>
      <p>
        demo →→→→→→ prod
      </p>
    </section>

    <section>
      <router-link
          to="/component/demo"
          target="_blank"
          class="wb-link"
      >
        组件示例
      </router-link>
      <p>
        基于element plus 封装的组件或者自定义的组件。
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'WorkbenchIndex',
})
</script>

<style scoped lang="scss">
  .workbench-index {
    height: 100%;
    background-image: url("../assets/workbench-index-bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 10px;
  }
  section{
    border: 1px solid #ccc;
    margin: 10px;
    padding: 10px;
    color: #ffffff;
    & .wb-link{
      color: #ffffff;
    }
  }
</style>