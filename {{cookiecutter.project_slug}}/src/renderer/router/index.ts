{% if cookiecutter.vue_version == '2' %}import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import HomePage from "@renderer/views/pages/HomePage.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    }
];

export default new VueRouter({
    routes
});
{% else %}import {RouteRecordRaw, createRouter, createWebHashHistory} from "vue-router";
import HomePage from "@renderer/views/pages/HomePage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    }
];

export default createRouter({
    history: createWebHashHistory(),
    routes
});
{% endif %}
