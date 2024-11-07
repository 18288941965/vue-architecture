import {RouteRecordRaw} from 'vue-router'

const baseRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'AppLogin',
        component: () => import('../views/home/web-home.vue'),
        meta: { title: '首页' },
    },
    {
        path: '/admin/theme2',
        name: 'AdminTheme2',
        component: () => import('../views/theme/theme2/admin-theme2.vue'),
        meta: { title: 'AdminTheme2' },
    },
    {
        path: '/admin/theme3',
        name: 'AdminTheme3',
        component: () => import('../views/theme/theme3/admin-theme3.vue'),
        meta: { title: 'AdminTheme3' },
    },
]

export default baseRoutes