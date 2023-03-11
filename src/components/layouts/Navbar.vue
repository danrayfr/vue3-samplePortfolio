<template>
    <!--nav id="navbar" class="px-3 py-3  bg-blue-900 text-white shadow sm:fixed w-full z-10 transition-colors duration-500
            "
        :class="{'sm:bg-transparent sm:shadow-none' : !showWhiteBackground}">
        <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between">
            <div class="w-full flex flex-row items-center justify-between">
                <div class="text-2xl font-bold">
                    <router-link to="/">
                        <img :src="!showWhiteBackground ? '/images/logo/dray-logo-gold.png' : '/images/logo/dray-logo.png'" 
                            class="w-auto h-auto"
                        >
                    </router-link>
                </div>
                <div>
                    
                    <button v-show="!isVisible" class="sm:hidden" @click="toggle">
                        <svg class="w-6 h-6 text-white" 
                                fill="currentColor" 
                                viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" 
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 
                                        01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                                        clip-rule="evenodd">
                                </path>
                        </svg>
                    </button>

                    <button v-show="isVisible" class="sm:hidden text-white" @click="toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
    
                </div>
            </div>
            <div  class="mt-4 sm:mt-0 w-full sm:space-x-4 sm:text-right sm:block "
                :class="{ 'hidden': !isVisible, 'sm:text-blue-600' : !showWhiteBackground  }">
                <NavbarLink to="/"
                    label="Home">
                </NavbarLink>
                <NavbarLink to="/articles"
                    label="Articles" />
                <NavbarLink to="life"
                    label="Life" />
                <NavbarLink to="/about"
                    label="About" />
                <NavbarLink to="/contact"
                    label="Contact" />
            </div>
        </div>
    </nav-->
    <nav id="navbar" class="px-3 py-3 text-white shadow bg-gray-50 sm:fixed w-full z-10 transition-colors duration-500"
        :class="{'sm:bg-transparent sm:shadow-none' : !showWhiteBackground}"
        >
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3 text-gray-900">

            <label for="menu-toggle" class="cursor-pointer md:hidden block" >
                <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input class="hidden sm:hidden" type="checkbox" id="menu-toggle" v-show="isVisible" @click="toggle">

            <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <nav>
                    <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <li>
                            <NavbarLink to="/"
                                label="Home"
                                class="inline-block no-underline hover:text-black hover:grow duration-200 py-2 px-4"
                            >
                            </NavbarLink>
                        </li>
                        <li>
                            <NavbarLink to="/articles"
                                label="Articles"
                                class="inline-block no-underline hover:text-black hover:grow duration-200 py-2 px-4"
                            >
                            </NavbarLink>
                        </li>
                        <li>
                            <NavbarLink to="programming"
                                label="Programming"
                                class="inline-block no-underline hover:text-black hover:grow duration-200 py-2 px-4"
                            >
                            </NavbarLink>
                        </li>
                        <li>
                            <NavbarLink to="slug"
                                label="Portfolio"
                                class="inline-block no-underline hover:text-black hover:grow duration-200 py-2 px-4"
                            >
                            </NavbarLink>
                        </li>
                        <li>
                            <NavbarLink to="/about"
                                label="About"
                                class="inline-block no-underline hover:text-black hover:grow duration-200 py-2 px-4"
                            >
                            </NavbarLink>
                        </li>
                        <li>
                            <NavbarLink to="/contact"
                                label="Contact"
                                class="inline-block no-underline hover:text-black hover:grow duration-200 py-2 px-4"
                            >
                            </NavbarLink>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <div class="order-1 md:order-2">
                <div class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800">
                    <img :src="!showWhiteBackground ? '/images/logo/dray-logo-gray.png' : '/images/logo/dray-logo-gray.png'" 
                            class="fill-current"
                        >
                </div>
            </div>

            <div class="order-2 md:order-3 flex items-center text-gray-600 ml-12" id="nav-content">

            </div>
        </div>
    </nav>
</template>

<script setup>
import NavbarLink from '@/components/layouts/NavbarLink.vue';
import { useToggle } from '@/composables/useToggle'
import { ref } from 'vue'
let { isVisible, toggle } = useToggle()

let showWhiteBackground = ref(false)

document.addEventListener("scroll", function() { 
    let bodyPosition = document.body.getBoundingClientRect().top
    const thresholdOfBody = 150
    if (bodyPosition < -thresholdOfBody) { 
        showWhiteBackground.value = true
    } else { 
        showWhiteBackground.value = false
    }
})
</script>

<style scoped>
#menu-toggle:checked + #menu {
            display: block;
        }
        
        .hover\:grow {
            transition: all 0.3s;
            transform: scale(1);
        }
        
        .hover\:grow:hover {
            transform: scale(1.02);
        }
</style>