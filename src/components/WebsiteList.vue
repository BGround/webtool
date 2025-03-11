<script setup>
import { ref, computed } from 'vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

const websites = ref([
  {
    id: 1,
    name: 'Freelancer Tools',
    url: 'https://freelancer-tools.shop',
    description: 'A collection of useful tools for freelancers',
    category: 'Tools'
  },
  // Add more sample websites here
]);

const searchQuery = ref('');

const filteredWebsites = computed(() => {
  return websites.value.filter(website => 
    website.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    website.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <div class="relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索网站..."
          class="w-full input-primary pl-10"
        />
        <MagnifyingGlassIcon class="h-5 w-5 text-gray-400 absolute left-3 top-3" />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="website in filteredWebsites" :key="website.id" 
           class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h3 class="text-xl font-semibold mb-2">{{ website.name }}</h3>
        <p class="text-gray-600 mb-4">{{ website.description }}</p>
        <div class="flex justify-between items-center">
          <span class="text-sm text-blue-600">{{ website.category }}</span>
          <a :href="website.url" target="_blank" class="btn-primary">访问网站</a>
        </div>
      </div>
    </div>
  </div>
</template>