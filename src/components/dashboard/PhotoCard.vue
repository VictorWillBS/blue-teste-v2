<template lang="">
    <Container custom-class="self-start lg:h-fit max-w-xs w-full rounded-lg">
        <img
            class="h-28 w-full rounded-t-lg object-cover"
            :src="imageUrl"
        />
        <div class="p-2">
            <div>
                <p class="mb-1 text-xs font-bold text-violet-700">
                    {{ title }}
                </p>
                <p class="text-wrap mb-3 text-xs text-gray-800">
                    {{ description }}
                </p>
            </div>
            <div class="text-end">
                <a
                    :href="link"
                    class="text-xs font-bold text-violet-700"
                    >Saiba mais</a
                >
            </div>
        </div>
    </Container>
</template>
<script lang="ts">
    import Container from "../general/microComponents/Container.vue"
    import { defineComponent } from "vue"
    export default defineComponent({
        components: { Container },
        props: {
            title: {
                type: String,
                default() {
                    return ""
                },
            },
            description: {
                type: String,
                default() {
                    return ""
                },
            },
            imageUrl: {
                type: String,
                default() {
                    return ""
                },
            },
            link: {
                type: String,
                default() {
                    return ""
                },
            },
        },
    })
</script>
<style lang=""></style>
