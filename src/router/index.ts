/*
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-01-26 16:01:14
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// ? Hash Mode
// * history: createWebHashHistory()

// ? HTML5 Mode
// * history: createWebHistory(),

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/photography",
    name: "photography",
    component: () =>
      import(
        /* webpackChunkName: "photography" */ "../views/photography/photography.vue"
      ),
  },
  {
    path: "/myNotes",
    name: "myNotes",
    component: () =>
      import(/* webpackChunkName: "myNotes" */ "../views/myNotes/myNotes.vue"),
  },
  {
    path: "/myDemo",
    name: "myDemo",
    component: () =>
      import(/* webpackChunkName: "myDemo" */ "../views/myDemo/myDemo.vue"),
  },
  {
    path: "/aboutMe",
    name: "aboutMe",
    component: () =>
      import(/* webpackChunkName: "aboutMe" */ "../views/aboutMe/aboutMe.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
