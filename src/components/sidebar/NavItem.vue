<template lang="">
    <hr
        v-show="index > 0"
        class=""
    />
    <a
        :href="name"
        class="flex w-full items-center justify-start gap-x-3 rounded p-3 hover:bg-indigo-100 hover:text-blue"
        :class="checkCurrentUrl(name)"
    >
        <component
            :is="getIcon(name)"
            :size="30"
        ></component>
        <span class="text-sm font-bold capitalize">{{ name }}</span>
    </a>
</template>
<script lang="ts">
    import { defineComponent } from "vue"
    import ViewDashboardIcon from "vue-material-design-icons/ViewDashboard.vue"
    import Table from "vue-material-design-icons/Table.vue"
    import MoneyBagIcon from "../../../public/icons/MoneyBag.vue"
    export default defineComponent({
        components: {
            TableIcon: Table as any,
            ViewDashboard: ViewDashboardIcon as any,
            MoneyBagIcon,
        },
        props: {
            name: {
                type: String,
                default() {
                    return ""
                },
            },
            index: {
                type: Number,
                default() {
                    return 0
                },
            },
        },
        methods: {
            getIcon(name: string) {
                const icons = {
                    dashboard() {
                        return ViewDashboardIcon
                    },
                    vendas() {
                        return Table
                    },
                    planos() {
                        return MoneyBagIcon
                    },
                }
                if (icons[name]) {
                    return icons[name]()
                }
            },
            checkCurrentUrl(matcher: string) {
                const regEx = new RegExp(`/${matcher}`, "g")
                console.log(location.href, regEx)

                if (regEx.test(location.href)) {
                    return "bg-indigo-100"
                }
            },
        },
    })
</script>
<style lang=""></style>
