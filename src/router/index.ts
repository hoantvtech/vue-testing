import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("../modules/auth/components/Login.vue"),
    },
    {
      path: "/provide",
      name: "ProvideInject",
      component: () => import("../views/provide/Parent.vue"),
    },
    {
      path: "/async",
      name: "AsyncPage",
      component: () => import("../views/async/Parent.vue"),
    },
    {
      path: "/slot",
      name: "SlotPage",
      component: () => import("../views/slots/Slot.vue"),
    },
    {
      path: "/fallthrough-attributes",
      name: "FallThroughPage",
      component: () => import("../views/fallthrough-attributes/RootButton.vue"),
    },
    {
      path: "/events",
      name: "EventPage",
      component: () => import("../views/events/Parent.vue"),
    },
    {
      path: "/suspense",
      name: "SuspensePage",
      component: () => import("../views/suspense/Suspense.vue"),
    },
    {
      path: "/suspense-2",
      name: "Suspense2Page",
      component: () => import("../views/suspense-2/MySuspense.vue"),
    },
    {
      path: "/composable",
      name: "ComposablePage",
      component: () => import("../views/composables/Main.vue"),
    },
  ],
});

export default router;
