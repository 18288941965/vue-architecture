<script setup lang="ts">
import {ref, watch} from 'vue'

const prop = defineProps(({
    isCollapse: {
        type: Boolean,
        default: false
    }
}))

const isCollapse = ref(prop.isCollapse)

const emit = defineEmits(['collapseClick'])

const collapseClick = () => {
    isCollapse.value = !isCollapse.value
    emit('collapseClick', isCollapse.value)
}
</script>

<template>
    <el-header>
        <div style="display: flex;align-items: center;cursor: pointer;" @click="collapseClick">
            <svg v-if="isCollapse" t="1732244089491" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1455" width="30" height="30">
                <path
                    d="M32 669.28v-347.2L275.52 496 32 669.28z m340-330.4h585.44A34.56 34.56 0 0 1 992 373.44a34.72 34.72 0 0 1-34.56 34.72H372a34.72 34.72 0 0 1-34.56-34.72 34.56 34.56 0 0 1 34.56-34.56z m0 244.32h585.44A34.72 34.72 0 0 1 992 617.92a34.72 34.72 0 0 1-34.56 34.56H372a34.72 34.72 0 0 1-34.56-34.56 34.72 34.72 0 0 1 34.56-34.72zM66.56 818.88h890.88A34.56 34.56 0 0 1 992 853.44a34.56 34.56 0 0 1-34.56 34.56H66.56A34.56 34.56 0 0 1 32 853.44a34.56 34.56 0 0 1 34.56-34.56z m0-715.68h890.88A34.72 34.72 0 0 1 992 137.92a34.56 34.56 0 0 1-34.56 34.56H66.56A34.56 34.56 0 0 1 32 137.92a34.72 34.72 0 0 1 34.56-34.72z"
                    fill="#4592D8" p-id="1456"></path>
            </svg>
            <svg v-else t="1732244080432" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1289" width="30" height="30">
                <path
                    d="M980.96 322.08v347.2L737.44 496l243.52-173.92zM640.96 652.48H55.52a34.88 34.88 0 0 1-34.56-34.56 34.88 34.88 0 0 1 34.56-34.72h585.44a34.72 34.72 0 0 1 34.56 34.72 34.72 34.72 0 0 1-34.56 34.56z m0-244.32H55.52a34.88 34.88 0 0 1-34.56-34.72 34.72 34.72 0 0 1 34.56-34.56h585.44a34.56 34.56 0 0 1 34.56 34.56 34.72 34.72 0 0 1-34.56 34.72z m305.44-235.68H55.52a34.72 34.72 0 0 1-34.56-34.56 34.88 34.88 0 0 1 34.56-34.72h890.88a34.72 34.72 0 0 1 34.56 34.72 34.56 34.56 0 0 1-34.56 34.56z m0 715.52H55.52a34.72 34.72 0 0 1-34.56-34.56 34.72 34.72 0 0 1 34.56-34.56h890.88a34.56 34.56 0 0 1 34.56 34.56 34.56 34.56 0 0 1-34.56 34.56z"
                    fill="#4592D8" p-id="1290"></path>
            </svg>
        </div>
        <div style="display: flex;align-items: center;margin: 0 20px;">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>系统设置</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </el-header>
</template>

<style scoped>

</style>
