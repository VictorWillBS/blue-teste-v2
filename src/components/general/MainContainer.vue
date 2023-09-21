<template lang="">
    <div
        class="relative flex min-h-screen w-screen overflow-y-auto bg-white-blue font-text-normal"
    >
        <Sidebar
            :mobile-sidebar-open="mobileSidebarOpen"
            @updateSidebarVisibility="updateSidebarVisibility"
        />
        <div
            class="flex w-full flex-col items-center justify-start px-6 py-1 lg:ms-40"
        >
            <TopBar
                :mobile-sidebar-open="mobileSidebarOpen"
                @updateSidebarVisibility="updateSidebarVisibility"
            />
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
    import TopBar from "./TopBar.vue"
    import Sidebar from "./Sidebar.vue"
    import { defineComponent } from "vue"
    export default defineComponent({
        components: { TopBar, Sidebar },
        data() {
            return {
                mobileSidebarOpen: screen.width >= 1024,
            }
        },
        methods: {
            updateSidebarVisibility(isOpen: boolean) {
                this.mobileSidebarOpen = isOpen
                return
            },
        },
    })
</script>
<style lang=""></style>
