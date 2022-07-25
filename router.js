import Vue from "vue";
import VueRouter from "vue-router";
import Home from "~/pages/home.vue";
import Login from "~/pages/login.vue";

Vue.use(VueRouter);
// 路由信息
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component:Login,
    },
];

// 导出路由
const router = createRouter({
    return new VueRouter({
        mode:'history',
        routers
    })
});

export default router;
