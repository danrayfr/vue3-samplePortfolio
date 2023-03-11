<template>
  <div>
    <AppLanding :description="settings.hero_description_url" 
                :blob="`background-image:url('/svg/bg.svg');`" 
                image="/svg/hello.svg"
                title="Hello, I am Dan Ray Falcis Rollan"
    />

    <div class="py-0 sm:py-20 px-4 sm:px-0 container mx-auto border-b">
      <div class="container max-w-5xl mx-auto m-8">
        <h1 class="w-full my-2 text-5xl font-bold text-center text-gray-700">
          Articles
        </h1>
      </div> 
        <Articles :articles="articles.data" layout="list"/>
    </div>

  </div>
</template>

<script setup>
import Hero from './Hero.vue'
import HomeCard from './Card.vue'
import AppLanding from '@/components/Landing.vue'
import Articles from '@/components/Articles.vue'
import { useArticle } from '@/composables/useArticle'
import { useSettings } from '@/composables/useSetting'


let { articles, loading, fetchArticles } = useArticle()

fetchArticles()

let { settings, getSettings } = useSettings()

getSettings()

</script>  