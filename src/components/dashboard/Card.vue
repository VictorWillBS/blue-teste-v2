<template lang="">
    <Container
        custom-class="p-3 shadow sm:max-w-2xs sm:w-full xs:w-4/5 w-full h-32  "
        :class="getBg()"
    >
        <div class="h-full max-h-1/2 text-white">
            <p class="text-xl font-bold">{{ value }}</p>
            <p class="text-xs font-light capitalize">{{ title }}</p>
        </div>
        <div class="flex w-full justify-end">
            <PayMoneyIcon :size="61" />
        </div>
    </Container>
</template>
<script lang="ts">
    import { PropType } from "vue"
    import { defineComponent } from "vue"
    import PayMoneyIcon from "../../../public/icons/PayMoney.vue"
    import Container from "../general/microComponents/Container.vue"

    type Type = "proposes" | "gain" | "default"
    export default defineComponent({
        components: { Container, PayMoneyIcon },
        props: {
            value: {
                type: String,
                default() {
                    return ""
                },
            },
            title: {
                type: String,
                default() {
                    return ""
                },
            },
            type: {
                type: String as PropType<Type>,
                default() {
                    return "default"
                },
            },
        },
        methods: {
            getBg() {
                const types = {
                    proposes: "bg-black",
                    gain: "bg-neutral-500",
                    default: "bg-blue",
                }

                return types[this.type]
            },
        },
    })
</script>
<style lang=""></style>
