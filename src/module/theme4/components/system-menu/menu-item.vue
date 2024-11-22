<script setup lang="ts">
import {ref} from 'vue'

const props = defineProps({
    menuItems: {
        type: Object,
        default: () => ({}),
    },
})

const menuItems = ref(props.menuItems)
// console.log(item)
</script>

<template>
    <nav v-for="item in menuItems" :key="item.path">
        <el-sub-menu
            popper-class="dark-mode"
            v-if="item.children && item.children.length > 0"
            :index="item.path">
            <template #title>
                <el-icon>
                    <component :is="item.icon"/>
                </el-icon>
                <span>{{ item.name }}</span>
            </template>
            <menu-item :menu-items="item.children" />
        </el-sub-menu>
        <a v-else-if="item.target" :href="item.path" :target="item.target">
            <el-menu-item :index="item.path">
                <el-icon>
                    <component :is="item.icon"/>
                </el-icon>
                <template #title>
                    <span>{{ item.name }}</span>
                </template>
            </el-menu-item>
        </a>
        <router-link v-else :to="item.path">
            <el-menu-item :index="item.path">
                <el-icon>
                    <component :is="item.icon"/>
                </el-icon>
                <template #title>
                    <span>{{ item.name }}</span>
                </template>
            </el-menu-item>
        </router-link>
    </nav>
</template>

<style scoped>
a {
    text-decoration: none;
}
</style>
