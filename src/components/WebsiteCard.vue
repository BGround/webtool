<template>
  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div class="flex justify-between items-start">
      <h3 class="text-xl font-semibold text-gray-900">{{ website.title }}</h3>
      <a
        :href="website.url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-600 hover:text-blue-800"
      >
        <external-link-icon size="20" />
      </a>
    </div>
    <p class="mt-2 text-gray-600">{{ website.description }}</p>
    <div class="mt-4 flex items-center justify-between">
      <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
        {{ website.category }}
      </span>
      <span class="text-sm text-gray-500">
        {{ new Date(website.created_at).toLocaleDateString() }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ExternalLinkIcon } from 'lucide-vue-next';
import type { Website } from '../types';

defineProps<{
  website: Website;
}>();
</script>