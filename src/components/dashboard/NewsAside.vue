<script setup lang="ts"></script>
<template lang="">
    <Container
        custom-class=" sm:container lg:w-1/4 w-full bg-white h-full px-4 py-5 flex flex-col  gap-y-3"
    >
        <h6 class="mb-3 text-sm font-bold">Atualizações</h6>
        <section
            class="flex w-full flex-row items-center justify-start gap-3 lg:flex-col"
        >
            <PhotoCard
                v-for="update in updateNews"
                :key="update.code"
                :title="update.title"
                :description="update.description"
                :image-url="update.imageUrl"
                :link="update.link"
            />
        </section>
    </Container>
</template>
<script lang="ts">
    import Container from "../general/microComponents/Container.vue"
    import PhotoCard from "./PhotoCard.vue"
    import INews from "../../types/INews"
    import newsFactory from "../../utils/newsFactory"
    import { defineComponent } from "vue"
    export default defineComponent({
        components: { Container, PhotoCard },
        data() {
            return {
                updateNews: this.newsFactory(2) satisfies INews[],
            }
        },
        methods: {
            newsFactory,
        },
    })
</script>
<style lang=""></style>
