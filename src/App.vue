<script setup lang="ts">
    import Dashboard from "./pages/Dashboard.vue"
    import MainContainer from "./components/general/MainContainer.vue"
    import { provide } from "vue"
    provide("mobileSidebarOpen", screen.width <= 640)
</script>

<template>
    <MainContainer>
        <Dashboard />
    </MainContainer>
</template>

<style scoped></style>
