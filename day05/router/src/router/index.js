import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import UserView from "../views/UserView.vue";

// 라우터 구성 객체 생성
// createRouter() 메서드를 사용하여 라우터 인스턴스를 생성합니다.
const router = createRouter({
  // createWebHistory() 메서드를 사용하여 HTML5 History 모드를 사용합니다.
  // 이 모드는 URL에 해시(#)를 사용하지 않고, 깔끔한 URL을 제공합니다.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      // Vue Router에서 component를 지정할 때 방식이 다른 이유는 "정적(import) 방식"과 동적(import) 방식"의 차이 때문
    },
    {
      path: "/user/:id",
      name: "user",
      component: UserView,
    },
  ],
});

export default router;
