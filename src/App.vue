<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-bold text-gray-900">{{ t('title') }}</h1>
          <language-switcher />
        </div>
      </div>
    </header>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './components/LanguageSwitcher.vue';

const { t } = useI18n();
</script>