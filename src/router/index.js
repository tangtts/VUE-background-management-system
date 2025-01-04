import { createRouter, createWebHistory } from "vue-router";
import { Menu, HomeFilled, Setting, Discount, Expand, DataBoard } from '@element-plus/icons-vue'
import Layout from "../layout/index.vue";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const menus = [
  {
    path: '/transaction-management',
    component: Layout,
    redirect: '/transaction-management/deposit-management',
    meta: { title: '交易管理', icon: Discount },
    children: [
        {
            path: "deposit-management",
            name: "deposit-management",
            component: () => import("@/views/transaction-management/deposit-management/index.vue"),
            meta: { title: '入金管理' }
        },
        {
            path: "withdrawal-management",
            name: "withdrawal-management",
            component: () => import("@/views/transaction-management/withdrawal-management/index.vue"),
            meta: { title: '提币管理' }
        },
    ]
}
]
const router = new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/bootstrap/login/index.vue"),
  },
  {
      path: "/register",
      name: "Register",
      component: () => import("@/views/bootstrap/register/index.vue"),
  },
  {
    path: '',
    component: Layout,
    redirect: '/index',
    children: [
        {
            path: '/index',
            component: () => import('@/views/index/index.vue'),
            name: 'Index',
            meta: { title: '首页' }
        }
    ]
},
...menus
  ]})
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
})
router.afterEach(() => {
  NProgress.done();
})
export { menus }
export default router