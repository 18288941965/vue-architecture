<template>
  <router-link
      to="/admin/theme2"
      target="_blank"
  >
    <h5>后台管理模板（主题2)</h5>
  </router-link>
  <router-link
      to="/admin/theme3"
      target="_blank"
  >
    <h5>后台管理模板（主题3）</h5>
  </router-link>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'WorkbenchIndex',
})
</script>

<style scoped>

</style>