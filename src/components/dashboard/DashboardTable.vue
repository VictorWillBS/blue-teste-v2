<template lang="">
    <div class="pt-5">
        <h6 class="mb-4 px-4 text-lg font-bold text-black">
            Últimas Propostas
        </h6>
        <div class="overflow-y-autp relative mb-3 max-h-72 overflow-x-auto">
            <table class="w-full text-left text-sm text-gray-500">
                <tbody>
                    <tr
                        v-for="proposal in proposals"
                        :key="proposal.code"
                        class="border-b bg-white"
                    >
                        <td>
                            <div class="flex w-fit flex-col">
                                <span
                                    class="w-fit text-xs font-bold text-black"
                                >
                                    {{ proposal.proposer }}
                                </span>
                                <span class="w-fit text-2xs text-gray-400">
                                    Cadastrada em {{ proposal.date }}</span
                                >
                            </div>
                        </td>
                        <td>
                            <div class="flex w-fit flex-col">
                                <span class="w-fit text-2xs text-gray-400">
                                    Localidade
                                </span>
                                <span
                                    class="w-fit text-xs font-bold text-black"
                                >
                                    {{ proposal.city }}
                                </span>
                            </div>
                        </td>
                        <td>
                            <div class="flex w-fit flex-col">
                                <span class="w-fit text-2xs text-gray-400">
                                    Telefone
                                </span>
                                <span
                                    class="w-fit text-xs font-bold text-black"
                                >
                                    {{ proposal.contact }}
                                </span>
                            </div>
                        </td>
                        <td>
                            <div class="flex w-fit flex-col">
                                <span class="w-fit text-2xs text-gray-400">
                                    Valor
                                </span>
                                <span
                                    class="w-fit text-xs font-bold text-black"
                                >
                                    {{
                                        proposal.value.toLocaleString("pt-br", {
                                            style: "currency",
                                            currency: "BRL",
                                        })
                                    }}
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script lang="ts">
    import { PropType } from "vue"
    import { IProposal } from "../../types/IProposal.ts"
    import { defineComponent } from "vue"
    export default defineComponent({
        props: {
            proposals: {
                type: Array as PropType<IProposal[]>,
                default() {
                    return []
                },
            },
        },
    })
</script>
<style lang="postcss">
    tr {
        text-wrap: nowrap;
    }
    td {
        padding: 0.75rem 1rem;
    }
    tr:nth-child(even) {
        @apply bg-gray-200;
    }
</style>
