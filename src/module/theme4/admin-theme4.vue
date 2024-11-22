<script setup lang="ts">
import {ref} from 'vue'
import SystemTitle from './components/system-title/system-title.vue'
import SystemMenu from './components/system-menu/system-menu.vue'
import SystemHeader from './components/system-header/system-header.vue'
import SystemMain from './components/system-main/system-main.vue'


const isCollapse = ref(false)

const menuItems = [{
    name: '首页',
    path: '/',
    icon: 'House'
},
{
    name: '查询统计',
    path: '/queryStatistics',
    icon: 'DataBoard',
    children: [
        {
            name: '查询',
            path: '/queryStatistics/query',
            icon: 'Search',
            children: [
                {
                    name: '查询1',
                    path: '/queryStatistics/query/query1',
                    icon: 'Search'
                },
                {
                    name: '查询2',
                    path: '/queryStatistics/query/query2',
                    icon: 'Search'
                }
            ]
        },
        {
            name: '统计',
            path: '/queryStatistics/statistics',
            icon: 'Histogram',
            children: [
                {
                    name: '统计1',
                    path: '/queryStatistics/statistics/statistics1',
                    icon: 'Histogram'
                },
                {
                    name: '统计2',
                    path: '/queryStatistics/statistics/statistics2',
                    icon: 'Histogram'
                }
            ]
        }
    ]
},
{
    name: '系统设置',
    path: '/setting',
    icon: 'Setting',
    children: [
        {
            name: '用户管理',
            path: '/user',
            icon: 'User'
        },
        {
            name: '角色管理',
            path: '/role',
            icon: 'UserFilled'
        },
        {
            name: '菜单管理',
            path: '/menu',
            icon: 'Menu'
        },
        {
            name: '消息管理',
            path: '/message',
            icon: 'Message'
        },
        {
            name: '错误日志',
            path: '/errorLog',
            icon: 'Failed'
        }
    ]
},
{
    name: '代码编辑器',
    path: '/codemirror',
    icon: 'Notebook',
},
{
    name: '百度',
    path: 'https://www.baidu.com',
    icon: 'Search',
    target: '_blank'
}]

const collapseClick = (val: boolean) => {
    isCollapse.value = val
}

</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="240">
                <system-title :is-collapse="isCollapse" />
                <system-menu :is-collapse="isCollapse" :menu-items="menuItems" />
            </el-aside>
            <el-container>
                <system-header :is-collapse="isCollapse" @collapse-click="collapseClick"/>
                <system-main />
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
.common-layout {
    width: 100vw;
    height: 100vh;

    & .el-container {
        height: 100%;

        & .el-aside {
            height: 100%;
            padding: 0 0 0 10px;
            box-sizing: border-box;

            & .el-header {
                padding: 0;
                height: 60px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 24px;
                font-weight: bolder;
            }

            & .el-scrollbar {
                height: calc(100% - 60px);
                 & .el-menu {
                    border-right: none;
                }
            }
        }

        & .el-container {
            padding: 0 10px 10px 10px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            & .el-header {
                height: 60px;
                line-height: 60px;
                display: flex;
                align-items: center;
            }

            & .el-main {
                height: calc(100% - 90px);
                border: 1px solid var(--el-border-color);
                border-radius: 10px;
            }
        }
    }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
}
</style>
