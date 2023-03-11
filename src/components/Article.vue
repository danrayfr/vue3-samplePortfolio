<template>
    <div :class="{'grid sm:grid-cols-5 gap-2 sm:gap-12': isList}">
        <div class="h-64"
            :class="{'sm:h-400px col-span-3': isList,
                        'sm:col-span-5': isGrid
                    }"    
        >
            <img :src="article.image_url" :alt="article.title" class="w-full h-full object-cover hover:grow-0 hover:shadow-xl">
        </div>
        <div class="col-span-2 mt-1 flex flex-col justify-between">
            <div :class="{
                'sm:py-2 sm:mt-0': isGrid
            }">
                <div class="text-base text-gray-400">{{ article.category.name }}</div>
                <h3 class="mt-3 leading-tight text-2xl">
                    <router-link :to="`/articles/${article.slug}`" class="hover:text-gray-800 text-gray-700 hover:underline font-bold transition-colors">
                        {{ article.title }}
                    </router-link>
                </h3>
                <div class="mt-2 text-gray-700">
                    {{ article.small_description }}
                </div>
            </div>
            <div class="mt-1 text-base text-gray-500 flex items-center">
               <svg class="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div class="ml-2">
                    {{ article.created_at_for_human }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
    layout: {
        type: String,
        default: "list"
    },
    article: {
        type: Object
    }
})

let isGrid = computed(() => {
    return props.layout === "grid"
})

let isList = computed(() => {
    return props.layout === "list"
})
</script>