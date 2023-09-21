<script setup lang="ts">
    import { onMounted } from "vue"
    const emit = defineEmits(["updateSidebarVisibility"])
    onMounted(function () {
        window.addEventListener("resize", function () {
            emit("updateSidebarVisibility", screen.width >= 1024)
        })
    })
</script>
<template>
    <aside
        class="fixed left-0 top-0 z-10 flex h-full min-h-screen w-full lg:w-fit"
        :class="mobileSidebarOpen ? '' : 'hidden'"
        tabindex="0"
    >
        <section
            class="flex h-full w-44 flex-col justify-between bg-white shadow"
        >
            <div>
                <article
                    class="mb-20 flex w-full items-center justify-center p-3"
                >
                    <img
                        src="../../assets/blue-logo.svg"
                        class="w-25 h-8"
                    />
                </article>
                <section
                    class="flex items-center justify-center border-y-2 border-solid border-gray-100"
                >
                    <ul class="w-full">
                        <NavItem
                            v-for="(value, index) in navItems"
                            :key="index"
                            :name="value.name"
                            :index="index"
                            :route="value.route"
                        />
                    </ul>
                </section>
            </div>
            <button
                class="mb-10 flex items-center justify-center gap-x-2 py-3 pe-7 hover:bg-rose-50 hover:text-red-600"
            >
                <ion-icon
                    name="exit-outline"
                    class="icon-exit"
                />
                <p class="pt-0.5 text-sm font-bold">Sair</p>
            </button>
        </section>
        <div
            class="w-full bg-black bg-opacity-30 lg:hidden"
            @click="hideMobile()"
        ></div>
    </aside>
</template>
<script lang="ts">
    import NavItem from "../sidebar/NavItem.vue"
    import { defineComponent } from "vue"
    export default defineComponent({
        components: {
            NavItem,
        },
        props: {
            mobileSidebarOpen: {
                type: Boolean,
                default() {
                    return screen.width >= 1024
                },
            },
        },
        data() {
            return {
                navItems: [
                    { name: "dashboard", route: "" },
                    { name: "vendas", route: "/vendas" },
                    { name: "planos", route: "/planos" },
                ],
            }
        },
        methods: {
            hideMobile() {
                this.$emit("updateSidebarVisibility", false)
                return
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
<style lang="css">
    .icon-exit {
        width: 20px;
        height: 20px;
    }
</style>
