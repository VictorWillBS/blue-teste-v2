<template lang="">
    <div
        class="rounded shadow"
        :class="customClass"
    >
        <slot> </slot>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from "vue"
    export default defineComponent({
        props: {
            customClass: {
                type: String,
                default() {
                    return "bg-white"
                },
            },
        },
        mounted() {
            this.customClass // type: string | undefined
        },
    })
</script>
<style lang=""></style>
