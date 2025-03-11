<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8 space-y-4">
      <div class="relative">
        <search-icon
          class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size="20"
        />
        <input
          type="text"
          :placeholder="t('search.placeholder')"
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          v-model="searchTerm"
        />
      </div>

      <div class="flex gap-2 overflow-x-auto pb-2">
        <button
          @click="selectedCategory = ''"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium',
            !selectedCategory
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          {{ t('categories.all') }}
        </button>
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium',
            selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <website-card
        v-for="website in filteredWebsites"
        :key="website.id"
        :website="website"
      />
    </div>

    <add-website-form @submit="handleAddWebsite" />
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { SearchIcon } from 'lucide-vue-next';
import WebsiteCard from './WebsiteCard.vue';
import AddWebsiteForm from './AddWebsiteForm.vue';
import type { Website } from '../types';

const { t } = useI18n();

const mockWebsites: Website[] = [
  {
    id: '1',
    title: 'Freelancer Tools',
    url: 'https://freelancer-tools.shop',
    description: 'A collection of useful tools for freelancers',
    category: 'Tools',
    created_at: new Date().toISOString()
  }
];

const websites = ref<Website[]>(mockWebsites);
const searchTerm = ref('');
const selectedCategory = ref('');

const categories = computed(() => Array.from(new Set(websites.value.map(site => site.category))));

const filteredWebsites = computed(() => {
  return websites.value.filter(website => {
    const matchesSearch = website.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      website.description.toLowerCase().includes(searchTerm.value.toLowerCase());
    const matchesCategory = !selectedCategory.value || website.category === selectedCategory.value;
    return matchesSearch && matchesCategory;
  });
});

const handleAddWebsite = (newWebsite: { title: string; url: string; description: string; category: string }) => {
  const website: Website = {
    id: Date.now().toString(),
    created_at: new Date().toISOString(),
    ...newWebsite
  };
  websites.value.push(website);
};
</script>