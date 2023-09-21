<script setup lang="ts">
    import Route from "./pages/Route.vue"
    import MainContainer from "./components/general/MainContainer.vue"
    import { provide } from "vue"
    provide("mobileSidebarOpen", screen.width <= 640)
</script>

<template>
    <MainContainer>
        <Route />
    </MainContainer>
</template>

<style scoped></style>
