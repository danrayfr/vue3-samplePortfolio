<template>
    <ArticleHero :imageUrl="article.image_url ? article.image_url : '/images/monkey.jpg'" :title="article.title" height="articleDetail"/>
    
    <div class="container mx-auto px-4 sm:px-0 py-8 sm:py-20">
        <div class="text-gray-700  text-2xl font-bold mb-4">
            {{article.title}}
        </div>
        <div class="flex flex-col sm:flex-row sm:items-center justify-between"> 
            <div class="flex items-center text-gray-500">
                <div>
                    <svg class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 
                                0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 
                                013 12V7a4 4 0 014-4z" />
                    </svg>
                </div>
                <div class="ml-4 text-gray-500"> {{article.category.name }}</div> 
            </div>
            
            <div class="flex items-center text-gray-500">
                <div>
                    <svg class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div class="ml-2 text-gray-500"> {{article.created_date}}</div>
            </div>
        </div>

        <div class="mt-2 sm:mt-4">
            <div class="mt-6 sm:mt-6 text-gray-800" v-html="article.description">

            </div>
        </div>
    </div>
</template>
<script setup>
import ArticleHero from '@/components/ArticleHero.vue'
import { useArticle } from '@/composables/useArticle'
import {ref, defineProps } from 'vue'

let { articleDetail, articleDetailLoading, fetchArticleDetail } = useArticle()

const props = defineProps({
    slug: String,
})

fetchArticleDetail({ 
    slug: props.slug
})

const article = ref(articleDetail)
</script>