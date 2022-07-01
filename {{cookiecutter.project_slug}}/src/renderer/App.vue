<template>
    <main-view/>
</template>

<script lang="ts">
import MainView from "@renderer/views/MainView.vue";

export default {
    name: "App",
    components: {
        MainView
    },
    mounted()
    {
        console.log(window.api.hello());
    }
};
</script>
