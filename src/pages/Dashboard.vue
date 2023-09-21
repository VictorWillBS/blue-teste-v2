<template lang="">
    <main
        class="flex h-full w-full flex-col items-center justify-between gap-y-3 pb-12 lg:flex-row xl:max-w-7xl xl:justify-around"
    >
        <DashboardMain />
        <NewsAside />
    </main>
</template>
<script lang="ts">
    import DashboardMain from "../components/dashboard/DashboardMain.vue"
    import NewsAside from "../components/dashboard/NewsAside.vue"
    export default {
        components: {
            DashboardMain,
            NewsAside,
        },
    }
</script>
<style lang=""></style>
