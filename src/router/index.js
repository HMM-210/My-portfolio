import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/Home/home.vue"

const routes = [
    {
        path     : "/",
        redirect : "/home",
    },
    {
        path      : "/home"  ,
        name      : "home"   ,
        component : HomePage ,
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
