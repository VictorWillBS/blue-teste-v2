<template lang="">
    <section
        class="mb-3 flex h-20 w-full max-w-7xl items-center justify-between"
    >
        <section class="flex gap-3">
            <MenuIcon
                class="cursor-pointer lg:hidden"
                @click="showMobileSidebar()"
            />
            <article class="flex items-center text-sm font-bold text-white">
                {{ date }}
            </article>
        </section>

        <article class="">
            <img
                src="/images/happy_woman.jpg"
                alt=""
                class="h-11 min-h-11 w-11 min-w-11 rounded-full border-2 border-solid border-white object-cover"
            />
        </article>
    </section>
</template>
<script lang="ts">
    import Menu from "vue-material-design-icons/Menu.vue"
    import getTodayDateHumanized from "../../utils/getTodayDateHumanized"

    export default {
        components: { MenuIcon: Menu as any },
        props: {
            mobileSidebarOpen: {
                type: Boolean,
                default() {
                    return screen.width >= 1024
                },
            },
        },
        data() {
            return { date: getTodayDateHumanized() }
        },
        methods: {
            showMobileSidebar() {
                this.$emit("updateSidebarVisibility", true)
                return
            },
        },
    }
</script>
<style lang=""></style>
