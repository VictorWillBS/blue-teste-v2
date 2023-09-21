<script setup lang="ts">
    import { ref, computed } from "vue"
    import Dashboard from "./Dashboard.vue"
    interface IRoutes {
        [key: string]: any
    }
    const routes = {
        "/": Dashboard,
        "/vendas": Dashboard,
        "/planos": Dashboard,
    } satisfies IRoutes

    const currentPath = ref(window.location.hash)

    window.addEventListener("hashchange", () => {
        currentPath.value = window.location.hash
    })

    const currentView = computed(() => {
        const route = currentPath.value.slice(1) || "/"
        return routes[route as keyof typeof routes]
    })
</script>

<template>
    <component :is="currentView" />
</template>
