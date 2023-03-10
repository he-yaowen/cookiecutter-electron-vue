import path from "path";
{% if cookiecutter.vue_version == '2' %}
import vue from "@vitejs/plugin-vue2";
{% else %}
import vue from "@vitejs/plugin-vue";
{% endif %}
import electron from "vite-plugin-electron";

export default {
    plugins: [
        vue(),
        electron({
            main: {
                entry: "./src/main/index.ts"
            },
            preload: {
                input: "./src/main/preload.ts"
            }
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@main": path.resolve(__dirname, "src/main"),
            "@renderer": path.resolve(__dirname, "src/renderer")
        }
    }
};
