import {RouteRecordRaw} from 'vue-router'

const baseRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'AppLogin',
        component: () => import('../views/workbench-index.vue'),
        meta: { title: '工作台' },
    },
    {
        path: '/admin/theme2',
        name: 'AdminTheme2',
        component: () => import('../module/theme2/admin-theme2.vue'),
        meta: { title: 'AdminTheme2' },
    },
    {
        path: '/admin/theme3',
        name: 'AdminTheme3',
        component: () => import('../module/theme3/admin-theme3.vue'),
        meta: { title: 'AdminTheme3' },
    },
    {
        path: '/admin/theme4',
        name: 'AdminTheme4',
        component: () => import('../module/theme4/admin-theme4.vue'),
        meta: { title: 'AdminTheme4' },
    },
    {
        path: '/details/index',
        name: 'DetailsIndex',
        component: () => import('../module/details/details-index.vue'),
        meta: { title: 'DetailsIndex' },
    },
]

export default baseRoutes
