<template>
    <!--InnerPageHero :imageUrl="settings.about_image_url" title="About Us"/-->

    <AppLanding description="Explore in here if you want to know more about me" 
                :blob="`background-image:url('/svg/about-blob.svg');`" 
                image="/svg/About-me.svg"
                title="About Me"
    />

    <div class="container mx-auto py-8 sm:py-12 px-4 sm:px-0 tex-justify border-b">
        <p class="mt-4 text-gray-800" v-html="settings.about_description_url"></p>
    </div>

    <div class="py-y8 sm:py-12 px-4 sm:px-0 container mx-auto border-b">
      <div class="container max-w-5xl mx-auto m-8">
        <h1 class="w-full my-2 text-5xl font-bold text-center text-gray-700">
          Experience
        </h1>
      </div> 
      <AppTimeline />
    </div>
</template>

<script setup>
import InnerPageHero from '@/components/InnerPageHero.vue'
import { useSettings } from '@/composables/useSetting'
import AppLanding from '@/components/Landing.vue'
import AppTimeline from './Timeline.vue'

let { settings, getSettings } = useSettings()

getSettings()
</script>