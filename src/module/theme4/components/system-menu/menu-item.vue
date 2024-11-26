<script setup lang="ts">
defineProps({
    menu: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <el-sub-menu
        v-if="menu.children && menu.children.length > 0"
        popper-class="dark-mode"
        :index="menu.path">
        <template #title>
            <el-icon>
                <component :is="menu.icon"/>
            </el-icon>
            <span>{{ menu.name }}</span>
        </template>
        <menu-item v-for="child in menu.children"
                   :key="child.path"
                   :menu="child" />
    </el-sub-menu>
    <a v-else-if="menu.target" :href="menu.path" :target="menu.target">
        <el-menu-item :index="menu.path">
            <el-icon>
                <component :is="menu.icon"/>
            </el-icon>
            <template #title>
                <span>{{ menu.name }}</span>
            </template>
        </el-menu-item>
    </a>
    <router-link v-else :to="menu.path">
        <el-menu-item :index="menu.path">
            <el-icon>
                <component :is="menu.icon"/>
            </el-icon>
            <template #title>
                <span>{{ menu.name }}</span>
            </template>
        </el-menu-item>
    </router-link>
</template>

<style scoped>
a {
    text-decoration: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
}
</style>
