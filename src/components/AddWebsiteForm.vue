<template>
  <button
    v-if="!isOpen"
    @click="isOpen = true"
    class="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
  >
    <plus-icon size="24" />
  </button>

  <div v-else class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg p-6 w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4">{{ t('addWebsite.title') }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">{{ t('addWebsite.form.title') }}</label>
            <input
              type="text"
              required
              v-model="formData.title"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">{{ t('addWebsite.form.url') }}</label>
            <input
              type="url"
              required
              v-model="formData.url"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">{{ t('addWebsite.form.description') }}</label>
            <textarea
              required
              v-model="formData.description"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">{{ t('addWebsite.form.category') }}</label>
            <input
              type="text"
              required
              v-model="formData.category"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
        <div class="mt-6 flex justify-end space-x-3">
          <button
            type="button"
            @click="isOpen = false"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            {{ t('addWebsite.form.cancel') }}
          </button>
          <button
            type="submit"
            class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            {{ t('addWebsite.form.submit') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { PlusIcon } from 'lucide-vue-next';

const { t } = useI18n();
const isOpen = ref(false);
const formData = reactive({
  title: '',
  url: '',
  description: '',
  category: ''
});

const emit = defineEmits<{
  (e: 'submit', website: { title: string; url: string; description: string; category: string }): void;
}>();

const handleSubmit = () => {
  emit('submit', { ...formData });
  Object.assign(formData, {
    title: '',
    url: '',
    description: '',
    category: ''
  });
  isOpen.value = false;
};
</script>