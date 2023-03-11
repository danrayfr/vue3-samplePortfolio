<template>
    <div>
        <div :class="{
                'space-y-8 sm:space-y-16': isList,
                'grid sm:grid-cols-3 sm:gap-12': isGrid
            }">
            <Article :layout="layout" v-for="article in articles" :key="article.id" :article="article"/>
        </div>
        
        <div v-if="showViewAll" class="mt-8 sm:mt-12">
            <router-link to="/articles" class="px-4 py-2 sm:px-6 bg-indigo-400 hover:bg-indigo-500 text-white rounded focus:outline-none">View All</router-link>
        </div>
    </div>
</template>

<script setup>
import Article from '@/components/Article.vue'
import { defineProps, computed } from 'vue'

const props = defineProps({
    layout: {
        type: String,
        default: "list"
    }, 
    articles: {
        Array,
    },
    showViewAll: {
        type: Boolean,
        default: true
    }
})

let isGrid = computed(() => {
    return props.layout === "grid"
})

let isList = computed(() => {
    return props.layout === "list"
})

</script>