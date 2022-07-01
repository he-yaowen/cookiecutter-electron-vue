{% if cookiecutter.vue_version == '2' %}import Vue from "vue";
import App from "./App.vue";

import router from "./router";
{%- if cookiecutter.use_vuex == 'yes' %}
import store from "./store";
{%- endif %}

new Vue({
    router,
{%- if cookiecutter.use_vuex == 'yes' %}    store,{%- endif %}
    render: h => h(App)
}).$mount("#app");
{% else %}import {createApp} from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");
{% endif %}
