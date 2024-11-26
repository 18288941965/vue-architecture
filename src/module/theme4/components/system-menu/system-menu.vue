<script setup lang="ts">
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import MenuItem from './menu-item.vue'

const route = useRoute()

const props = defineProps({
    isCollapse: {
        type: Boolean,
        default: false,
    },
    menuItems: {
        type: Array,
        default: () => [],
    },
})

const menuItems = ref(props.menuItems)

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const handSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<template>
    <el-scrollbar>
        <el-menu
            :default-active="route.path"
            class="el-menu-vertical-demo dark-mode"
            :collapse="isCollapse"
            unique-opened
            @open="handleOpen"
            @close="handleClose"
            @select="handSelect"
        >
            <menu-item v-for="(item,index) in menuItems"
                       :key="'item' + index"
                       :menu="item || {}" />
        </el-menu>
    </el-scrollbar>
</template>

<style scoped>
.el-menu {
    border-right: none;
}
</style>
