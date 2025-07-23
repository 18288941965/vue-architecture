<script setup lang="ts">
  import ElTabsCustom from './el-tabs-custom.vue'
</script>

<template>
  <div class="component-demo-body">
    <section>
      <h3>样式覆盖：修改el-tabs样式，引入element-tabs-override.css, 并在el-tabs上增加类tabs-card</h3>
      <el-tabs-custom></el-tabs-custom>
    </section>
  </div>
</template>

<style scoped lang="scss">
  .component-demo-body{
    padding: 10px;
  }
</style>