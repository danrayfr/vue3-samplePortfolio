<template>
    <div :class="`relative z-0 ${heightClass}`">
        <img :src="imageUrl?imageUrl:'/gif/loading.gif'" alt="hero" class="block w-full h-full object-cover">

        <!--div class="absolute inset-0 bg-black opacity-30"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-blue-300 opacity-50"></div>
        
        <div class="absolute inset-0">
            <div class="container mx-auto px-4 sm:px-0 text-white h-full w-full flex flex-col items-center justify-center
                sm:justify-end text-2xl sm:text-5xl">
                <div class="mb-4 sm:mb-8">
                    {{ title }}
                </div>
            </div>
        </div-->
    </div>
</template>
<script setup>
import { defineProps, computed, ref, onMounted } from 'vue' 

const props = defineProps({
    imageUrl: { 
        type: [String, Object],
    },
    title: {
        type: [String, Object],
    },
    height: {
        type: [String, Object],
    }
})

let heightClass = computed(() => { 
    if(props.height === "articleDetail")
    {
        //return "h-hero sm:h-hero";
        return "hero-height"
    }

    return "h-40 sm:h-64";
})

</script>