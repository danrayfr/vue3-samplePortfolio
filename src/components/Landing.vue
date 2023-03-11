<template>
    <!--div class="h-screen pb-14 bg-right bg-cover bg-white" style="background-image:url('/svg/bg.svg');"-->
    <div class="h-screen pb-14 bg-right bg-cover bg-white" :style="blob">
        <!--Main-->
        <div class="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <!--Left Col-->
            <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                <h1 class="my-4 text-3xl md:text-5xl text-gray-600 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                    {{title}}
                </h1>
                <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle text-gray-600">
                    {{description}}
                </p>
            
                <!--p class="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Download our app:</p>
                <div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                    <img src="App Store.svg" class="h-12 pr-4 bounce-top-icons">
                    <img src="Play Store.svg" class="h-12 bounce-top-icons">
                </div-->
            </div>
            
            <!--Right Col-->
            <div class="w-full xl:w-3/5 py-6 overflow-y-hidden hover:grow-[2]">
                <img class="w-auto mx-auto lg:mr-0 slide-in-bottom" :src="image">
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    description: String,
    blob: {
        type: String,
        required: true
    },
    image: {
        type: String, 
        required: true
    },
    title: {
        type: String, 
        required: true
    }

})
</script>