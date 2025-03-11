<template>
  <button
    @click="toggleLocale"
    class="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
  >
    <globe-icon size="20" />
    <span class="font-medium">{{ currentLocale === 'en' ? '中文' : 'English' }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { GlobeIcon } from 'lucide-vue-next';

const { locale } = useI18n();
const currentLocale = computed(() => locale.value);

const toggleLocale = () => {
  locale.value = currentLocale.value === 'en' ? 'zh' : 'en';
};
</script>