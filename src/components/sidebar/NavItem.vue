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
            :is="getIcon(route)"
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
            route: {
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
            getIcon(route: string) {
                if (!route) route = "default"
                const iconName = route.replace("/", "") as keyof IIcons
                interface IIcons {
                    default(): any
                    vendas(): any
                    planos(): any
                }
                const icons = {
                    default() {
                        return ViewDashboardIcon
                    },
                    vendas() {
                        return Table
                    },
                    planos() {
                        return MoneyBagIcon
                    },
                } satisfies IIcons
                return icons[iconName]()
            },
            checkCurrentUrl(matcher: string) {
                const regEx = new RegExp(matcher, "g")
                console.log(location.href, regEx)

                if (regEx.test(location.href)) {
                    return "bg-indigo-100"
                }
            },
        },
    })
</script>
<style lang=""></style>
