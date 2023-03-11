<template>
    <div class="relative">
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6" v-for="work in works" :key="work.id">
            <span class="flex absolute left-3 justify-center items-center w-6 h-6 bg-indigo-300 rounded-full ring-8 ring-white">
            </span>
            <div class="p-4 bg-white hover:bg-indigo-300 text-gray-900 hover:text-white rounded-lg border border-gray-200 hover:border-white shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div class="justify-between items-center mb-3 sm:flex">
            <span class="ml-6 mb-1 text-s font-normal sm:order-last sm:mb-0">{{work.year}}</span>
            <div class="ml-3 text-xl font-normal lex">
                <h2 class="font-bold text-3xl">{{work.company}}</h2>
                <p class="mt-2 font-md text-medium">{{work.position}}</p>
            </div>
            </div>
            <div class="p-3 text-md italic font-normal" v-html="work.description"></div>
            </div>
            </li>
        </ol>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useWorks } from '@/composables/useWork'

let { works, getWork } = useWorks()

getWork()

</script>
