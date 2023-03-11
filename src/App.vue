<script setup>
import Navbar from '@/components/layouts/Navbar.vue'
import Footer from '@/components/layouts/Footer.vue'
</script>

<template>
  <div class="flex flex-col h-full">
    <Navbar />

    <div class="flex-1">
      <router-view />
    </div>

    <div>
      <Footer />
    </div>
  </div>
</template>