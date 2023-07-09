import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";
const routes: RouteRecordRaw[] = [{
  path: "/",
  redirect: "/home",
}, {
  path: "/home",
  component: () => import("@/views/home/home.vue"),
}, {
  path: "/login",
  component: () => import("@/views/login/login.vue"),
}, {
  path: "/:pathMatch(.*)*",
  name: "NotFound",
  component: () => import("@/views/error/404.vue"),
}];
const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
