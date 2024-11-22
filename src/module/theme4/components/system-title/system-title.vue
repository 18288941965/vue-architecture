<script setup lang="ts">

defineProps({
    isCollapse: {
        type: Boolean,
        default: false,
    },
})

</script>

<template>
    <el-header>
        <el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
        <div style="margin: 0 20px;" v-if="!isCollapse">系统标题</div>
    </el-header>
</template>

<style scoped>
</style>
