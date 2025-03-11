<script setup>
import { ref } from 'vue';
import WebsiteList from './components/WebsiteList.vue';
import AddWebsite from './components/AddWebsite.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-bold text-gray-900">网站导航</h1>
          <AddWebsite />
        </div>
      </div>
    </header>

    <main>
      <WebsiteList />
    </main>
  </div>
</template>