<script setup lang="ts">
  import ElTabsCustom from './el-tabs-custom.vue'
  import DetailsComp from './details-comp.vue'
</script>

<template>
  <div class="component-demo-body">
    <section>
      <h3>样式覆盖：修改el-tabs样式，引入element-tabs-override.css, 并在el-tabs上增加类tabs-card</h3>
      <el-tabs-custom></el-tabs-custom>
    </section>
    
    <section>
      <h3>样式覆盖：修改默认的details样式, 点击标题展开面板，点击任何地方关闭面板</h3>
      <details-comp></details-comp>
    </section>
  </div>
</template>

<style scoped lang="scss">
  .component-demo-body{
    padding: 10px;
  }
</style>